export type EsimStatus =
  | "pending"
  | "provisioned"
  | "active"
  | "suspended"
  | "expired"
  | "cancelled"
  | "unknown";

export type EsimCountry = {
  code: string;
  name: string;
  region?: string;
};

export type EsimPlan = {
  provider: string;
  providerPlanId: string;
  name: string;
  countryCodes: string[];
  dataAmountMb: number | null;
  validityDays: number | null;
  priceAmount: number | null;
  currency: string;
};

export type PurchaseEsimInput = {
  userId: string;
  providerPlanId: string;
};

export type PurchaseEsimResult = {
  providerEsimId: string;
  status: EsimStatus;
};

export type EsimProfileSnapshot = {
  providerEsimId: string;
  iccid: string | null;
  status: EsimStatus;
  countryCodes: string[];
  activationDate: string | null;
  expirationDate: string | null;
};

export type EsimUsage = {
  providerEsimId: string;
  dataUsedBytes: number;
  dataRemainingBytes: number | null;
  recordedAt: string;
};

export type ActivateEsimInput = {
  providerEsimId: string;
};

export type TopUpEsimInput = {
  providerEsimId: string;
  providerPlanId: string;
};

export type InstallationDetails = {
  providerEsimId: string;
  qrCodeData: string | null;
  activationCode: string | null;
  smdpAddress: string | null;
  matchingId: string | null;
};

export type EsimWebhookEvent = {
  provider: string;
  providerEventId: string;
  eventType: string;
  payload: unknown;
};
