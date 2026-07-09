import { createClient } from "@/lib/supabase/server";

export default async function InvoicesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: invoices } = await supabase
    .from("invoices")
    .select(
      "id, provider, provider_invoice_id, invoice_number, amount_due, amount_paid, currency, status, hosted_invoice_url, invoice_pdf_url, issued_at, paid_at, created_at"
    )
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  const paidInvoices =
    invoices?.filter((invoice) => invoice.status === "paid") ?? [];

  const openInvoices =
    invoices?.filter(
      (invoice) =>
        invoice.status === "open" || invoice.status === "pending"
    ).length ?? 0;

  const totalPaid = paidInvoices.reduce(
    (total, invoice) => total + Number(invoice.amount_paid ?? 0),
    0
  );

  function formatAmount(
    amount: number | string | null,
    currency: string
  ) {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency,
    }).format(Number(amount ?? 0));
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
            Facturation
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Factures
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Consultez vos documents de facturation et suivez leur statut depuis
            votre espace Invisible Mobile.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          Documents sécurisés
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            Total facturé
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {formatAmount(totalPaid, "EUR")}
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            Factures
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {invoices?.length ?? 0}
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            En attente
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {openInvoices}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold tracking-[-.03em]">
          Historique des factures
        </h2>

        <p className="mt-2 text-sm text-black/45">
          Retrouvez l’ensemble des documents associés à votre compte.
        </p>

        {!invoices || invoices.length === 0 ? (
          <div className="mt-6 rounded-[28px] border border-black/5 bg-[#f4f1e8] p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl">
              #
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
              Aucune facture disponible
            </h3>

            <p className="mt-3 max-w-xl text-black/50">
              Vos factures apparaîtront automatiquement ici après vos achats et
              renouvellements Invisible Mobile.
            </p>
          </div>
        ) : (
          <div className="mt-6 overflow-hidden rounded-[28px] border border-black/5">
            <div className="hidden grid-cols-[1.4fr_1fr_1fr_1fr_120px] gap-4 bg-[#f4f1e8] px-6 py-4 text-xs font-semibold uppercase tracking-[.14em] text-black/40 lg:grid">
              <span>Facture</span>
              <span>Date</span>
              <span>Statut</span>
              <span>Montant</span>
              <span className="text-right">Document</span>
            </div>

            <div className="divide-y divide-black/5">
              {invoices.map((invoice) => {
                const documentUrl =
                  invoice.invoice_pdf_url ?? invoice.hosted_invoice_url;

                return (
                  <div
                    key={invoice.id}
                    className="grid gap-4 px-6 py-5 lg:grid-cols-[1.4fr_1fr_1fr_1fr_120px] lg:items-center"
                  >
                    <div>
                      <p className="font-semibold">
                        {invoice.invoice_number ?? "Facture Invisible Mobile"}
                      </p>

                      <p className="mt-1 text-xs uppercase tracking-[.12em] text-black/35">
                        {invoice.provider}
                      </p>
                    </div>

                    <p className="text-sm text-black/55">
                      {formatDate(invoice.issued_at ?? invoice.created_at)}
                    </p>

                    <div>
                      <span className="inline-flex rounded-full bg-[#f4f1e8] px-3 py-1 text-xs font-semibold capitalize text-black/60">
                        {invoice.status}
                      </span>
                    </div>

                    <p className="font-semibold">
                      {formatAmount(invoice.amount_due, invoice.currency)}
                    </p>

                    <div className="lg:text-right">
                      {documentUrl ? (
                        <a
                          href={documentUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-full border border-black/10 px-4 py-2 text-xs font-semibold transition hover:bg-black hover:text-white"
                        >
                          Consulter
                        </a>
                      ) : (
                        <span className="text-sm text-black/30">—</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
