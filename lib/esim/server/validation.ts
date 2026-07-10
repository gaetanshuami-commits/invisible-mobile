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
  const countryCode = requireNonEmptyString(value, "countryCode")
    .toUpperCase();

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
