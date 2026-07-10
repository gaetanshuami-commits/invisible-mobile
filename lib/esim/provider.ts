import type {
  ActivateEsimInput,
  EsimCountry,
  EsimPlan,
  EsimProfileSnapshot,
  EsimUsage,
  EsimWebhookEvent,
  InstallationDetails,
  PurchaseEsimInput,
  PurchaseEsimResult,
  TopUpEsimInput,
} from "./types";

export interface EsimProvider {
  readonly name: string;

  getCountries(): Promise<EsimCountry[]>;

  getPlans(countryCode?: string): Promise<EsimPlan[]>;

  purchaseEsim(input: PurchaseEsimInput): Promise<PurchaseEsimResult>;

  getEsim(providerEsimId: string): Promise<EsimProfileSnapshot>;

  getUsage(providerEsimId: string): Promise<EsimUsage>;

  activateEsim(input: ActivateEsimInput): Promise<EsimProfileSnapshot>;

  topUpEsim(input: TopUpEsimInput): Promise<EsimProfileSnapshot>;

  getInstallationDetails(
    providerEsimId: string
  ): Promise<InstallationDetails>;

  handleWebhook(event: EsimWebhookEvent): Promise<void>;
}

export class EsimProviderNotConfiguredError extends Error {
  constructor(providerName: string) {
    super(
      `${providerName} is not configured. Official API credentials and documentation are required.`
    );

    this.name = "EsimProviderNotConfiguredError";
  }
}
