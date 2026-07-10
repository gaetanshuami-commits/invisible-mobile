import type { User } from "@supabase/supabase-js";
import { getEsimProvider } from "../index";
import type { EsimProvider } from "../provider";
import { requireAuthenticatedEsimUser } from "./auth";
import {
  EsimServerError,
  normalizeEsimServerError,
} from "./errors";

export type EsimServerContext = {
  user: User;
  provider: EsimProvider;
};

export async function createEsimServerContext(): Promise<EsimServerContext> {
  try {
    const user = await requireAuthenticatedEsimUser();

    let provider: EsimProvider;

    try {
      provider = getEsimProvider();
    } catch (error) {
      throw new EsimServerError(
        "PROVIDER_NOT_CONFIGURED",
        "The eSIM provider is not configured.",
        503,
        error
      );
    }

    return {
      user,
      provider,
    };
  } catch (error) {
    throw normalizeEsimServerError(error);
  }
}

export async function runEsimServerOperation<T>(
  operation: (context: EsimServerContext) => Promise<T>
): Promise<T> {
  try {
    const context = await createEsimServerContext();

    return await operation(context);
  } catch (error) {
    throw normalizeEsimServerError(error);
  }
}
