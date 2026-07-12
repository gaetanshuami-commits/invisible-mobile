import { createClient } from "@/lib/supabase/server";
import PlansPurchaseClient from "@/components/dashboard/plans/PlansPurchaseClient";

export default async function PlansPage() {
  const supabase = await createClient();

  const { data: plans, error } = await supabase
    .from("plans")
    .select(
      "id, provider, provider_plan_id, name, country_code, region, data_amount_mb, validity_days, price_amount, currency"
    )
    .eq("is_active", true)
    .order("price_amount", {
      ascending: true,
    });

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Connectivité
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Forfaits
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Choisissez une offre adaptée à votre destination. Toute commande
            est préparée puis soumise à votre confirmation avant exécution.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          {plans?.length ?? 0} offre
          {(plans?.length ?? 0) > 1
            ? "s"
            : ""}
        </div>
      </div>

      {error ? (
        <div className="mt-10 rounded-[28px] bg-[#f4f1e8] p-8">
          <h2 className="text-2xl font-semibold">
            Catalogue indisponible
          </h2>

          <p className="mt-3 max-w-xl text-black/50">
            Le catalogue n’a pas pu être chargé. Réessayez ultérieurement.
          </p>
        </div>
      ) : (
        <PlansPurchaseClient
          plans={plans ?? []}
        />
      )}
    </>
  );
}
