import { createClient } from "@/lib/supabase/server";

export default async function PaymentsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: payments } = await supabase
    .from("payments")
    .select(
      "id, provider, provider_payment_id, amount, currency, status, description, paid_at, created_at"
    )
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  const completedPayments =
    payments?.filter((payment) => payment.status === "paid") ?? [];

  const totalPaid = completedPayments.reduce(
    (total, payment) => total + Number(payment.amount),
    0
  );

  const pendingPayments =
    payments?.filter((payment) => payment.status === "pending").length ?? 0;

  function formatAmount(amount: number | string, currency: string) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency,
    }).format(Number(amount));
  }

  function formatDate(date: string | null) {
    if (!date) {
      return "—";
    }

    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  }

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Finance
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Paiements
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Suivez vos transactions, vos règlements et l’activité financière
            liée à vos services Invisible Mobile.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          Infrastructure de paiement sécurisée
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            Total réglé
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {formatAmount(totalPaid, "EUR")}
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            Transactions
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {payments?.length ?? 0}
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            En attente
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {pendingPayments}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-.03em]">
              Historique des transactions
            </h2>

            <p className="mt-2 text-sm text-black/45">
              Activité financière enregistrée sur votre compte.
            </p>
          </div>
        </div>

        {!payments || payments.length === 0 ? (
          <div className="mt-6 rounded-[28px] border border-black/5 bg-[#f4f1e8] p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl">
              €
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
              Aucune transaction
            </h3>

            <p className="mt-3 max-w-xl text-black/50">
              Vos paiements apparaîtront ici après l’achat ou le renouvellement
              d’un service Invisible Mobile.
            </p>
          </div>
        ) : (
          <div className="mt-6 overflow-hidden rounded-[28px] border border-black/5">
            <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr] gap-4 bg-[#f4f1e8] px-6 py-4 text-xs font-semibold uppercase tracking-[.14em] text-black/40 md:grid">
              <span>Transaction</span>
              <span>Date</span>
              <span>Statut</span>
              <span className="text-right">Montant</span>
            </div>

            <div className="divide-y divide-black/5">
              {payments.map((payment) => (
                <div
                  key={payment.id}
                  className="grid gap-4 px-6 py-5 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:items-center"
                >
                  <div>
                    <p className="font-semibold">
                      {payment.description ?? "Service Invisible Mobile"}
                    </p>

                    <p className="mt-1 text-xs uppercase tracking-[.12em] text-black/35">
                      {payment.provider}
                    </p>
                  </div>

                  <p className="text-sm text-black/55">
                    {formatDate(payment.paid_at ?? payment.created_at)}
                  </p>

                  <div>
                    <span className="inline-flex rounded-full bg-[#f4f1e8] px-3 py-1 text-xs font-semibold capitalize text-black/60">
                      {payment.status}
                    </span>
                  </div>

                  <p className="font-semibold md:text-right">
                    {formatAmount(payment.amount, payment.currency)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
