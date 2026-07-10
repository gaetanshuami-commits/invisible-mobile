import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { EsimServerError } from "./errors";

export async function requireAuthenticatedEsimUser(): Promise<User> {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new EsimServerError(
      "UNAUTHORIZED",
      "Authentication is required to perform this eSIM operation.",
      401,
      error
    );
  }

  return user;
}
