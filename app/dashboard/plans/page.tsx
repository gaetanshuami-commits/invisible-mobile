import { createClient } from "@/lib/supabase/server";

export default async function PlansPage() {
  const supabase = await createClient();

  const { data: plans } = await supabase
    .from("plans")
    .select(
      "id, provider, provider_plan_id, name, country_code, region, data_amount_mb, validity_days, price_amount, currency"
    )
    .eq("is_active", true)
    .order("price_amount", { ascending: true });

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
        Espace client
      </p>

      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
        Forfaits
      </h1>

      {!plans || plans.length === 0 ? (
        <div className="mt-10 rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-2xl font-semibold">
            Aucun forfait disponible
          </p>

          <p className="mt-3 text-black/50">
            Les forfaits eSIM apparaîtront ici lorsque le catalogue d’un fournisseur sera connecté à Invisible Mobile.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-[28px] bg-[#f4f1e8] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                {plan.country_code ?? plan.region ?? "International"}
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                {plan.name}
              </h2>

              <p className="mt-4 text-black/50">
                {plan.data_amount_mb
                  ? `${plan.data_amount_mb} MB`
                  : "Data non renseignée"}
              </p>

              <p className="mt-2 text-black/50">
                {plan.validity_days
                  ? `${plan.validity_days} jours`
                  : "Validité non renseignée"}
              </p>

              <p className="mt-6 text-2xl font-semibold">
                {plan.price_amount ?? "—"} {plan.currency}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
