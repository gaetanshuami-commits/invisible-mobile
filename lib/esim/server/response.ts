import { NextResponse } from "next/server";
import {
  EsimServerError,
  normalizeEsimServerError,
} from "./errors";

export type EsimApiErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

export function createEsimApiErrorResponse(
  error: unknown
): NextResponse<EsimApiErrorResponse> {
  const normalizedError = normalizeEsimServerError(error);

  return NextResponse.json(
    {
      error: {
        code: normalizedError.code,
        message: normalizedError.message,
      },
    },
    {
      status: normalizedError.statusCode,
    }
  );
}

export function createEsimApiSuccessResponse<T>(
  data: T,
  status = 200
): NextResponse<{ data: T }> {
  return NextResponse.json(
    {
      data,
    },
    {
      status,
    }
  );
}

export function createMethodNotAllowedError(): EsimServerError {
  return new EsimServerError(
    "INVALID_INPUT",
    "Method not allowed.",
    405
  );
}
