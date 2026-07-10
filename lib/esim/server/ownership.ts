import { createClient } from "@/lib/supabase/server";
import { EsimServerError } from "./errors";

export type OwnedEsimProfile = {
  id: string;
  provider: string | null;
  provider_esim_id: string | null;
  status: string;
};

export async function requireOwnedEsimProfile(
  userId: string,
  providerEsimId: string
): Promise<OwnedEsimProfile> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("esim_profiles")
    .select("id, provider, provider_esim_id, status")
    .eq("user_id", userId)
    .eq("provider_esim_id", providerEsimId)
    .maybeSingle();

  if (error) {
    throw new EsimServerError(
      "DATABASE_ERROR",
      "Unable to verify ownership of the eSIM profile.",
      500,
      error
    );
  }

  if (!data) {
    throw new EsimServerError(
      "RESOURCE_NOT_FOUND",
      "The requested eSIM profile was not found.",
      404
    );
  }

  return data;
}
