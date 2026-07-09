import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function UsagePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: usageRecords } = await supabase
    .from("usage_records")
    .select(
      "id, esim_profile_id, subscription_id, data_used_bytes, data_remaining_bytes, recorded_at"
    )
    .eq("user_id", user.id)
    .order("recorded_at", { ascending: false });

  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-24 text-[#070707]">
      <div className="mx-auto max-w-5xl rounded-[32px] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
          Invisible Mobile
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
          Consommation data
        </h1>

        {!usageRecords || usageRecords.length === 0 ? (
          <div className="mt-10 rounded-[28px] bg-[#f4f1e8] p-6">
            <p className="text-2xl font-semibold">
              Aucune consommation disponible
            </p>

            <p className="mt-3 text-black/50">
              Votre consommation apparaîtra ici lorsqu’une eSIM réelle sera active
              et qu’un fournisseur sera connecté à Invisible Mobile.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-4">
            {usageRecords.map((record) => (
              <div
                key={record.id}
                className="rounded-[28px] bg-[#f4f1e8] p-6"
              >
                <p className="text-sm text-black/45">
                  Dernière mesure
                </p>

                <p className="mt-3 text-2xl font-semibold">
                  {record.data_used_bytes} octets utilisés
                </p>

                <p className="mt-2 text-black/50">
                  Data restante :{" "}
                  {record.data_remaining_bytes ?? "Non disponible"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
