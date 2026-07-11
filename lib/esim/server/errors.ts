import { EsimProviderNotConfiguredError } from "../provider";

export type EsimServerErrorCode =
  | "UNAUTHORIZED"
  | "INVALID_INPUT"
  | "PROVIDER_NOT_CONFIGURED"
  | "PROVIDER_ERROR"
  | "RESOURCE_NOT_FOUND"
  | "DATABASE_ERROR"
  | "INTERNAL_ERROR";

export class EsimServerError extends Error {
  readonly code: EsimServerErrorCode;
  readonly statusCode: number;
  readonly cause?: unknown;

  constructor(
    code: EsimServerErrorCode,
    message: string,
    statusCode: number,
    cause?: unknown
  ) {
    super(message);

    this.name = "EsimServerError";
    this.code = code;
    this.statusCode = statusCode;
    this.cause = cause;
  }
}

export function normalizeEsimServerError(
  error: unknown
): EsimServerError {
  if (error instanceof EsimServerError) {
    return error;
  }

  if (error instanceof EsimProviderNotConfiguredError) {
    return new EsimServerError(
      "PROVIDER_NOT_CONFIGURED",
      "The eSIM provider is not configured.",
      503,
      error
    );
  }

  if (error instanceof Error) {
    return new EsimServerError(
      "INTERNAL_ERROR",
      "An unexpected eSIM operation error occurred.",
      500,
      error
    );
  }

  return new EsimServerError(
    "INTERNAL_ERROR",
    "An unexpected eSIM operation error occurred.",
    500,
    error
  );
}
