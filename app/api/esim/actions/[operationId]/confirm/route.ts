import {
  createEsimApiErrorResponse,
  createEsimApiSuccessResponse,
} from "@/lib/esim/server/response";
import { confirmAndExecuteEsimOperation } from "@/lib/esim/server/operations";
import { requireUuid } from "@/lib/esim/server/validation";

type RouteContext = {
  params: Promise<{
    operationId: string;
  }>;
};

export async function POST(
  _request: Request,
  context: RouteContext
) {
  try {
    const { operationId: rawOperationId } =
      await context.params;

    const operationId = requireUuid(
      rawOperationId,
      "operationId"
    );

    const operation =
      await confirmAndExecuteEsimOperation(
        operationId
      );

    return createEsimApiSuccessResponse(
      operation
    );
  } catch (error) {
    return createEsimApiErrorResponse(error);
  }
}
