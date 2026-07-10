import {
  EsimProviderNotConfiguredError,
  type EsimProvider,
} from "../provider";

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
} from "../types";

export class CelitechProvider implements EsimProvider {
  readonly name = "celitech";

  private notConfigured(): never {
    throw new EsimProviderNotConfiguredError("CELITECH");
  }

  async getCountries(): Promise<EsimCountry[]> {
    return this.notConfigured();
  }

  async getPlans(_countryCode?: string): Promise<EsimPlan[]> {
    return this.notConfigured();
  }

  async purchaseEsim(
    _input: PurchaseEsimInput
  ): Promise<PurchaseEsimResult> {
    return this.notConfigured();
  }

  async getEsim(
    _providerEsimId: string
  ): Promise<EsimProfileSnapshot> {
    return this.notConfigured();
  }

  async getUsage(_providerEsimId: string): Promise<EsimUsage> {
    return this.notConfigured();
  }

  async activateEsim(
    _input: ActivateEsimInput
  ): Promise<EsimProfileSnapshot> {
    return this.notConfigured();
  }

  async topUpEsim(
    _input: TopUpEsimInput
  ): Promise<EsimProfileSnapshot> {
    return this.notConfigured();
  }

  async getInstallationDetails(
    _providerEsimId: string
  ): Promise<InstallationDetails> {
    return this.notConfigured();
  }

  async handleWebhook(_event: EsimWebhookEvent): Promise<void> {
    this.notConfigured();
  }
}
