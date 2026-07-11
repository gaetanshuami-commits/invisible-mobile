import { EsimServerError } from "./errors";

export function requireNonEmptyString(
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

export function requireCountryCode(value: unknown): string {
  const countryCode = requireNonEmptyString(
    value,
    "countryCode"
  ).toUpperCase();

  if (!/^[A-Z]{2}$/.test(countryCode)) {
    throw new EsimServerError(
      "INVALID_INPUT",
      "countryCode must be a valid two-letter country code.",
      400
    );
  }

  return countryCode;
}

export function requireProviderPlanId(value: unknown): string {
  return requireNonEmptyString(value, "providerPlanId");
}

export function requireProviderEsimId(value: unknown): string {
  return requireNonEmptyString(value, "providerEsimId");
}

export function requireUuid(
  value: unknown,
  fieldName: string
): string {
  const normalizedValue = requireNonEmptyString(
    value,
    fieldName
  );

  const uuidPattern =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidPattern.test(normalizedValue)) {
    throw new EsimServerError(
      "INVALID_INPUT",
      `${fieldName} must be a valid UUID.`,
      400
    );
  }

  return normalizedValue;
}

export function requireIdempotencyKey(
  value: unknown
): string {
  const key = requireNonEmptyString(
    value,
    "idempotencyKey"
  );

  if (key.length < 12 || key.length > 200) {
    throw new EsimServerError(
      "INVALID_INPUT",
      "idempotencyKey must contain between 12 and 200 characters.",
      400
    );
  }

  return key;
}
