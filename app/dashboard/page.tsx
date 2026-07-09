export default function DashboardPage() {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
        Espace client
      </p>

      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
        Vue d’ensemble
      </h1>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm text-black/45">Statut eSIM</p>
          <p className="mt-3 text-2xl font-semibold">À configurer</p>
        </div>

        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm text-black/45">Data disponible</p>
          <p className="mt-3 text-2xl font-semibold">—</p>
        </div>

        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm text-black/45">AI Operator</p>
          <p className="mt-3 text-2xl font-semibold">Bientôt</p>
        </div>
      </div>
    </>
  );
}
