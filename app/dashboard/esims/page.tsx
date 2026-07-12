import { createClient } from "@/lib/supabase/server";
import EsimsClient from "@/components/dashboard/esims/EsimsClient";

export default async function EsimsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: esims, error } = await supabase
    .from("esim_profiles")
    .select(
      "id, provider, provider_esim_id, iccid, status, country_code, activation_date, expiration_date, created_at"
    )
    .eq("user_id", user!.id)
    .order("created_at", {
      ascending: false,
    });

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Connectivité
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Mes eSIM
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Consultez vos profils, suivez leur statut et gérez leur activation
            ou leur installation depuis un espace sécurisé.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          {esims?.length ?? 0} eSIM
        </div>
      </div>

      {error ? (
        <div className="mt-10 rounded-[28px] bg-[#f4f1e8] p-8">
          <h2 className="text-2xl font-semibold">
            Profils indisponibles
          </h2>

          <p className="mt-3 max-w-xl text-black/50">
            Vos eSIM n’ont pas pu être chargées. Réessayez ultérieurement.
          </p>
        </div>
      ) : (
        <EsimsClient esims={esims ?? []} />
      )}
    </>
  );
}
