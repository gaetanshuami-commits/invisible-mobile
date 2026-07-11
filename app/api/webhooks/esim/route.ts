import {
  createEsimApiErrorResponse,
  createEsimApiSuccessResponse,
} from "@/lib/esim/server/response";
import {
  handleEsimWebhookEvent,
  parseEsimWebhookEvent,
} from "@/lib/esim/server/webhooks";
import { EsimServerError } from "@/lib/esim/server/errors";

export async function POST(request: Request) {
  try {
    const expectedSecret =
      process.env.ESIM_WEBHOOK_SECRET;

    if (!expectedSecret) {
      throw new EsimServerError(
        "PROVIDER_NOT_CONFIGURED",
        "The eSIM webhook infrastructure is not configured.",
        503
      );
    }

    const receivedSecret =
      request.headers.get("x-esim-webhook-secret");

    if (
      !receivedSecret ||
      receivedSecret !== expectedSecret
    ) {
      throw new EsimServerError(
        "UNAUTHORIZED",
        "Invalid eSIM webhook credentials.",
        401
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch (error) {
      throw new EsimServerError(
        "INVALID_INPUT",
        "The webhook body must contain valid JSON.",
        400,
        error
      );
    }

    const event = parseEsimWebhookEvent(body);

    const result =
      await handleEsimWebhookEvent(event);

    return createEsimApiSuccessResponse(result);
  } catch (error) {
    return createEsimApiErrorResponse(error);
  }
}
