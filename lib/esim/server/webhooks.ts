import "server-only";

import { createAdminClient } from "@/lib/supabase/admin";
import { EsimServerError } from "./errors";

export type EsimWebhookEvent = {
  provider: string;
  providerEventId: string;
  eventType: string;
  payload: Record<string, unknown>;
};

export type EsimWebhookProcessingResult = {
  eventId: string;
  duplicate: boolean;
  processed: boolean;
};

function requireWebhookString(
  value: unknown,
  fieldName: string
): string {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new EsimServerError(
      "INVALID_INPUT",
      `${fieldName} is required.`,
      400
    );
  }

  return value.trim();
}

function requireWebhookPayload(
  value: unknown
): Record<string, unknown> {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value)
  ) {
    throw new EsimServerError(
      "INVALID_INPUT",
      "payload must be a valid object.",
      400
    );
  }

  return value as Record<string, unknown>;
}

export function parseEsimWebhookEvent(
  input: unknown
): EsimWebhookEvent {
  if (
    typeof input !== "object" ||
    input === null ||
    Array.isArray(input)
  ) {
    throw new EsimServerError(
      "INVALID_INPUT",
      "Invalid webhook event body.",
      400
    );
  }

  const body = input as Record<string, unknown>;

  return {
    provider: requireWebhookString(
      body.provider,
      "provider"
    ).toLowerCase(),
    providerEventId: requireWebhookString(
      body.providerEventId,
      "providerEventId"
    ),
    eventType: requireWebhookString(
      body.eventType,
      "eventType"
    ),
    payload: requireWebhookPayload(body.payload),
  };
}

async function findExistingWebhookEvent(
  provider: string,
  providerEventId: string
) {
  const admin = createAdminClient();

  const { data, error } = await admin
    .from("webhook_events")
    .select(
      "id, provider, provider_event_id, event_type, processed_at"
    )
    .eq("provider", provider)
    .eq("provider_event_id", providerEventId)
    .maybeSingle();

  if (error) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to verify webhook event idempotency.",
      500,
      error
    );
  }

  return data;
}

async function registerWebhookEvent(
  event: EsimWebhookEvent
) {
  const admin = createAdminClient();

  const { data, error } = await admin
    .from("webhook_events")
    .insert({
      provider: event.provider,
      provider_event_id: event.providerEventId,
      event_type: event.eventType,
    })
    .select("id")
    .single();

  if (error) {
    if (error.code === "23505") {
      return null;
    }

    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to register webhook event.",
      500,
      error
    );
  }

  return data;
}

async function markWebhookEventProcessed(
  eventId: string
) {
  const admin = createAdminClient();

  const { error } = await admin
    .from("webhook_events")
    .update({
      processed_at: new Date().toISOString(),
    })
    .eq("id", eventId);

  if (error) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to finalize webhook event processing.",
      500,
      error
    );
  }
}

async function processWebhookEvent(
  event: EsimWebhookEvent
): Promise<void> {
  switch (event.eventType) {
    default:
      return;
  }
}

export async function handleEsimWebhookEvent(
  event: EsimWebhookEvent
): Promise<EsimWebhookProcessingResult> {
  const existingEvent =
    await findExistingWebhookEvent(
      event.provider,
      event.providerEventId
    );

  if (existingEvent) {
    return {
      eventId: existingEvent.id,
      duplicate: true,
      processed:
        existingEvent.processed_at !== null,
    };
  }

  const registeredEvent =
    await registerWebhookEvent(event);

  if (!registeredEvent) {
    const concurrentEvent =
      await findExistingWebhookEvent(
        event.provider,
        event.providerEventId
      );

    if (!concurrentEvent) {
      throw new EsimServerError(
        "DATABASE_ERROR",
        "Unable to resolve concurrent webhook processing.",
        500
      );
    }

    return {
      eventId: concurrentEvent.id,
      duplicate: true,
      processed:
        concurrentEvent.processed_at !== null,
    };
  }

  await processWebhookEvent(event);

  await markWebhookEventProcessed(
    registeredEvent.id
  );

  return {
    eventId: registeredEvent.id,
    duplicate: false,
    processed: true,
  };
}
