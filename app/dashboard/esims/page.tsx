import { createClient } from "@/lib/supabase/server";

export default async function EsimsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: esims } = await supabase
    .from("esim_profiles")
    .select("id, provider, provider_esim_id, iccid, status, country_code, activation_date, expiration_date")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
        Espace client
      </p>

      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
        Mes eSIM
      </h1>

      {!esims || esims.length === 0 ? (
        <div className="mt-10 rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-2xl font-semibold">Aucune eSIM active</p>

          <p className="mt-3 text-black/50">
            Vos profils eSIM apparaîtront ici après une activation réelle via un fournisseur connecté.
          </p>
        </div>
      ) : (
        <div className="mt-10 space-y-4">
          {esims.map((esim) => (
            <div
              key={esim.id}
              className="rounded-[28px] bg-[#f4f1e8] p-6"
            >
              <p className="text-2xl font-semibold">
                {esim.country_code ?? "eSIM mondiale"}
              </p>

              <p className="mt-2 text-black/50">
                Statut : {esim.status}
              </p>

              <p className="mt-2 text-black/50">
                ICCID : {esim.iccid ?? "Non disponible"}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
