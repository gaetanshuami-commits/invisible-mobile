import {
  createEsimApiErrorResponse,
  createEsimApiSuccessResponse,
} from "@/lib/esim/server/response";
import { createEsimOperation } from "@/lib/esim/server/operations";
import {
  requireIdempotencyKey,
  requireUuid,
} from "@/lib/esim/server/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const esimProfileId = requireUuid(
      body.esimProfileId,
      "esimProfileId"
    );

    const idempotencyKey =
      requireIdempotencyKey(
        body.idempotencyKey
      );

    const operation =
      await createEsimOperation({
        operationType: "activation",
        esimProfileId,
        idempotencyKey,
        requestPayload: {
          esimProfileId,
        },
      });

    return createEsimApiSuccessResponse(
      operation,
      201
    );
  } catch (error) {
    return createEsimApiErrorResponse(error);
  }
}
