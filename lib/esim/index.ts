import type { EsimProvider } from "./provider";
import { CelitechProvider } from "./providers/celitech";

export type EsimProviderName = "celitech";

const providers: Record<EsimProviderName, () => EsimProvider> = {
  celitech: () => new CelitechProvider(),
};

function isEsimProviderName(value: string): value is EsimProviderName {
  return value in providers;
}

export function getEsimProvider(): EsimProvider {
  const configuredProvider = process.env.ESIM_PROVIDER;

  if (!configuredProvider) {
    throw new Error(
      "ESIM_PROVIDER is not configured. Set a supported eSIM provider before using provider operations."
    );
  }

  const normalizedProvider = configuredProvider.trim().toLowerCase();

  if (!isEsimProviderName(normalizedProvider)) {
    throw new Error(
      `Unsupported eSIM provider: ${configuredProvider}.`
    );
  }

  return providers[normalizedProvider]();
}
