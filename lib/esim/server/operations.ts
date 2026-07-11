import "server-only";

import { createAdminClient } from "@/lib/supabase/admin";
import type {
  EsimProfileSnapshot,
  PurchaseEsimResult,
} from "../types";
import { requireAuthenticatedEsimUser } from "./auth";
import {
  EsimServerError,
  normalizeEsimServerError,
} from "./errors";
import { getEsimProvider } from "../index";

export type EsimOperationType =
  | "purchase"
  | "activation"
  | "top_up";

export type EsimOperationStatus =
  | "pending"
  | "awaiting_confirmation"
  | "confirmed"
  | "executing"
  | "executed"
  | "failed"
  | "cancelled";

export type EsimOperationRecord = {
  id: string;
  user_id: string;
  esim_profile_id: string | null;
  plan_id: string | null;
  operation_type: EsimOperationType;
  status: EsimOperationStatus;
  confirmation_required: boolean;
  idempotency_key: string;
  provider: string | null;
  provider_operation_id: string | null;
  request_payload: Record<string, unknown>;
  response_payload: Record<string, unknown>;
};

type CreateOperationInput = {
  operationType: EsimOperationType;
  idempotencyKey: string;
  esimProfileId?: string;
  planId?: string;
  requestPayload?: Record<string, unknown>;
};

async function getExistingOperation(
  userId: string,
  idempotencyKey: string
): Promise<EsimOperationRecord | null> {
  const admin = createAdminClient();

  const { data, error } = await admin
    .from("esim_operations")
    .select("*")
    .eq("user_id", userId)
    .eq("idempotency_key", idempotencyKey)
    .maybeSingle();

  if (error) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to verify the operation idempotency key.",
      500,
      error
    );
  }

  return data as EsimOperationRecord | null;
}

async function requireActivePlan(
  planId: string
) {
  const admin = createAdminClient();

  const { data, error } = await admin
    .from("plans")
    .select(
      "id, provider, provider_plan_id, name, is_active"
    )
    .eq("id", planId)
    .eq("is_active", true)
    .maybeSingle();

  if (error) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to load the requested plan.",
      500,
      error
    );
  }

  if (!data) {
    throw new EsimServerError(
      "RESOURCE_NOT_FOUND",
      "The requested plan was not found or is inactive.",
      404
    );
  }

  return data;
}

async function requireOwnedProfileById(
  userId: string,
  esimProfileId: string
) {
  const admin = createAdminClient();

  const { data, error } = await admin
    .from("esim_profiles")
    .select(
      "id, user_id, provider, provider_esim_id, status"
    )
    .eq("id", esimProfileId)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to load the requested eSIM profile.",
      500,
      error
    );
  }

  if (!data) {
    throw new EsimServerError(
      "RESOURCE_NOT_FOUND",
      "The requested eSIM profile was not found.",
      404
    );
  }

  if (!data.provider_esim_id) {
    throw new EsimServerError(
      "INVALID_INPUT",
      "The eSIM profile does not have a provider identifier.",
      409
    );
  }

  return data;
}

export async function createEsimOperation(
  input: CreateOperationInput
): Promise<EsimOperationRecord> {
  const user = await requireAuthenticatedEsimUser();
  const admin = createAdminClient();

  const existingOperation = await getExistingOperation(
    user.id,
    input.idempotencyKey
  );

  if (existingOperation) {
    return existingOperation;
  }

  if (input.planId) {
    await requireActivePlan(input.planId);
  }

  if (input.esimProfileId) {
    await requireOwnedProfileById(
      user.id,
      input.esimProfileId
    );
  }

  const { data, error } = await admin
    .from("esim_operations")
    .insert({
      user_id: user.id,
      esim_profile_id: input.esimProfileId ?? null,
      plan_id: input.planId ?? null,
      operation_type: input.operationType,
      status: "awaiting_confirmation",
      confirmation_required: true,
      idempotency_key: input.idempotencyKey,
      request_payload: input.requestPayload ?? {},
    })
    .select("*")
    .single();

  if (error) {
    if (error.code === "23505") {
      const concurrentOperation =
        await getExistingOperation(
          user.id,
          input.idempotencyKey
        );

      if (concurrentOperation) {
        return concurrentOperation;
      }
    }

    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to prepare the eSIM operation.",
      500,
      error
    );
  }

  return data as EsimOperationRecord;
}

async function markOperationFailed(
  operationId: string,
  error: unknown
) {
  const admin = createAdminClient();
  const normalizedError =
    normalizeEsimServerError(error);

  await admin
    .from("esim_operations")
    .update({
      status: "failed",
      failed_at: new Date().toISOString(),
      error_code: normalizedError.code,
      error_message: normalizedError.message,
      updated_at: new Date().toISOString(),
    })
    .eq("id", operationId);
}

async function persistProfileSnapshot(
  profileId: string,
  snapshot: EsimProfileSnapshot
) {
  const admin = createAdminClient();

  const { error } = await admin
    .from("esim_profiles")
    .update({
      provider_esim_id: snapshot.providerEsimId,
      iccid: snapshot.iccid,
      status: snapshot.status,
      country_code:
        snapshot.countryCodes[0] ?? null,
      activation_date: snapshot.activationDate,
      expiration_date: snapshot.expirationDate,
      updated_at: new Date().toISOString(),
    })
    .eq("id", profileId);

  if (error) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to update the eSIM profile.",
      500,
      error
    );
  }
}

async function executePurchase(
  operation: EsimOperationRecord,
  userId: string
) {
  if (!operation.plan_id) {
    throw new EsimServerError(
      "INVALID_INPUT",
      "The purchase operation does not contain a plan.",
      409
    );
  }

  const plan = await requireActivePlan(
    operation.plan_id
  );

  const provider = getEsimProvider();

  const result: PurchaseEsimResult =
    await provider.purchaseEsim({
      userId,
      providerPlanId: plan.provider_plan_id,
    });

  const admin = createAdminClient();

  const { data: profile, error: profileError } =
    await admin
      .from("esim_profiles")
      .insert({
        user_id: userId,
        provider: provider.name,
        provider_esim_id: result.providerEsimId,
        status: result.status,
      })
      .select("id")
      .single();

  if (profileError) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "The eSIM was purchased but its local profile could not be created.",
      500,
      profileError
    );
  }

  return {
    profileId: profile.id,
    provider: provider.name,
    providerOperationId:
      result.providerEsimId,
    responsePayload: result,
  };
}

async function executeActivation(
  operation: EsimOperationRecord,
  userId: string
) {
  if (!operation.esim_profile_id) {
    throw new EsimServerError(
      "INVALID_INPUT",
      "The activation operation does not contain an eSIM profile.",
      409
    );
  }

  const profile = await requireOwnedProfileById(
    userId,
    operation.esim_profile_id
  );

  const provider = getEsimProvider();

  const snapshot = await provider.activateEsim({
    providerEsimId: profile.provider_esim_id,
  });

  await persistProfileSnapshot(
    operation.esim_profile_id,
    snapshot
  );

  return {
    profileId: operation.esim_profile_id,
    provider: provider.name,
    providerOperationId:
      snapshot.providerEsimId,
    responsePayload: snapshot,
  };
}

async function executeTopUp(
  operation: EsimOperationRecord,
  userId: string
) {
  if (
    !operation.esim_profile_id ||
    !operation.plan_id
  ) {
    throw new EsimServerError(
      "INVALID_INPUT",
      "The top-up operation requires an eSIM profile and a plan.",
      409
    );
  }

  const [profile, plan] = await Promise.all([
    requireOwnedProfileById(
      userId,
      operation.esim_profile_id
    ),
    requireActivePlan(operation.plan_id),
  ]);

  const provider = getEsimProvider();

  const snapshot = await provider.topUpEsim({
    providerEsimId: profile.provider_esim_id,
    providerPlanId: plan.provider_plan_id,
  });

  await persistProfileSnapshot(
    operation.esim_profile_id,
    snapshot
  );

  return {
    profileId: operation.esim_profile_id,
    provider: provider.name,
    providerOperationId:
      snapshot.providerEsimId,
    responsePayload: snapshot,
  };
}

export async function confirmAndExecuteEsimOperation(
  operationId: string
): Promise<EsimOperationRecord> {
  const user = await requireAuthenticatedEsimUser();
  const admin = createAdminClient();

  const { data: operationData, error } =
    await admin
      .from("esim_operations")
      .select("*")
      .eq("id", operationId)
      .eq("user_id", user.id)
      .maybeSingle();

  if (error) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to load the eSIM operation.",
      500,
      error
    );
  }

  if (!operationData) {
    throw new EsimServerError(
      "RESOURCE_NOT_FOUND",
      "The eSIM operation was not found.",
      404
    );
  }

  const operation =
    operationData as EsimOperationRecord;

  if (operation.status === "executed") {
    return operation;
  }

  if (
    operation.status !==
      "awaiting_confirmation" &&
    operation.status !== "pending"
  ) {
    throw new EsimServerError(
      "INVALID_INPUT",
      `The operation cannot be confirmed from status ${operation.status}.`,
      409
    );
  }

  const now = new Date().toISOString();

  const { error: confirmationError } =
    await admin
      .from("esim_operations")
      .update({
        status: "executing",
        confirmed_at: now,
        executing_at: now,
        updated_at: now,
      })
      .eq("id", operation.id)
      .eq("user_id", user.id)
      .in("status", [
        "pending",
        "awaiting_confirmation",
      ]);

  if (confirmationError) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to confirm the eSIM operation.",
      500,
      confirmationError
    );
  }

  try {
    let executionResult;

    switch (operation.operation_type) {
      case "purchase":
        executionResult = await executePurchase(
          operation,
          user.id
        );
        break;

      case "activation":
        executionResult = await executeActivation(
          operation,
          user.id
        );
        break;

      case "top_up":
        executionResult = await executeTopUp(
          operation,
          user.id
        );
        break;

      default:
        throw new EsimServerError(
          "INVALID_INPUT",
          "Unsupported eSIM operation type.",
          400
        );
    }

    const executedAt =
      new Date().toISOString();

    const { data: executedOperation, error: updateError } =
      await admin
        .from("esim_operations")
        .update({
          esim_profile_id:
            executionResult.profileId,
          provider: executionResult.provider,
          provider_operation_id:
            executionResult.providerOperationId,
          response_payload:
            executionResult.responsePayload,
          status: "executed",
          executed_at: executedAt,
          updated_at: executedAt,
          error_code: null,
          error_message: null,
        })
        .eq("id", operation.id)
        .eq("user_id", user.id)
        .select("*")
        .single();

    if (updateError) {
      throw new EsimServerError(
        "DATABASE_ERROR",
        "The operation was executed but its audit record could not be finalized.",
        500,
        updateError
      );
    }

    return executedOperation as EsimOperationRecord;
  } catch (executionError) {
    await markOperationFailed(
      operation.id,
      executionError
    );

    throw normalizeEsimServerError(
      executionError
    );
  }
}
