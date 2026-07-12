import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

type UsageRecord = {
  data_used_bytes: number | string;
  data_remaining_bytes: number | string | null;
  recorded_at: string;
  esim_profile_id: string;
};

type EsimOperation = {
  id: string;
  operation_type: string;
  status: string;
  created_at: string;
};

function formatBytes(value: number | string | null) {
  if (value === null) {
    return "—";
  }

  const bytes = Number(value);

  if (!Number.isFinite(bytes) || bytes < 0) {
    return "—";
  }

  if (bytes === 0) {
    return "0 Mo";
  }

  const megabytes = bytes / 1024 / 1024;
  const gigabytes = megabytes / 1024;

  if (gigabytes >= 1) {
    return `${gigabytes.toFixed(gigabytes >= 10 ? 1 : 2)} Go`;
  }

  if (megabytes >= 1) {
    return `${megabytes.toFixed(megabytes >= 10 ? 0 : 1)} Mo`;
  }

  return `${Math.max(1, Math.round(bytes / 1024))} Ko`;
}

function formatDate(date: string | null) {
  if (!date) {
    return "Non renseignée";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function formatDateTime(date: string | null) {
  if (!date) {
    return "Aucune synchronisation";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function operationLabel(type: string) {
  const labels: Record<string, string> = {
    purchase: "Achat eSIM",
    activation: "Activation",
    top_up: "Recharge",
  };

  return labels[type] ?? type;
}

function operationStatusLabel(status: string) {
  const labels: Record<string, string> = {
    pending: "En préparation",
    awaiting_confirmation: "Confirmation requise",
    confirmed: "Confirmée",
    executing: "En cours",
    executed: "Terminée",
    failed: "Échec",
    cancelled: "Annulée",
  };

  return labels[status] ?? status;
}

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [
    esimsResult,
    usageResult,
    tripsResult,
    devicesResult,
    operationsResult,
  ] = await Promise.all([
    supabase
      .from("esim_profiles")
      .select(
        "id, status, country_code, provider, activation_date, expiration_date"
      )
      .eq("user_id", user!.id)
      .order("created_at", { ascending: false }),

    supabase
      .from("usage_records")
      .select(
        "data_used_bytes, data_remaining_bytes, recorded_at, esim_profile_id"
      )
      .eq("user_id", user!.id)
      .order("recorded_at", { ascending: false }),

    supabase
      .from("trips")
      .select(
        "id, destination_country_code, destination_name, departure_date, return_date, status"
      )
      .eq("user_id", user!.id)
      .gte("return_date", new Date().toISOString().slice(0, 10))
      .order("departure_date", { ascending: true })
      .limit(1),

    supabase
      .from("devices")
      .select(
        "id, manufacturer, model, operating_system, esim_compatible, is_primary, status"
      )
      .eq("user_id", user!.id)
      .order("is_primary", { ascending: false }),

    supabase
      .from("esim_operations")
      .select(
        "id, operation_type, status, created_at"
      )
      .eq("user_id", user!.id)
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

  const esims = esimsResult.data ?? [];
  const usageRecords = (usageResult.data ?? []) as UsageRecord[];
  const trips = tripsResult.data ?? [];
  const devices = devicesResult.data ?? [];
  const operations =
    (operationsResult.data ?? []) as EsimOperation[];

  const hasDataError = Boolean(
    esimsResult.error ||
      usageResult.error ||
      tripsResult.error ||
      devicesResult.error ||
      operationsResult.error
  );

  const activeEsims = esims.filter(
    (esim) => esim.status === "active"
  ).length;

  const pendingEsims = esims.filter(
    (esim) =>
      esim.status === "pending" ||
      esim.status === "provisioned"
  ).length;

  const latestUsageByEsim = new Map<string, UsageRecord>();

  for (const record of usageRecords) {
    if (!latestUsageByEsim.has(record.esim_profile_id)) {
      latestUsageByEsim.set(
        record.esim_profile_id,
        record
      );
    }
  }

  const totalUsed = usageRecords.reduce(
    (total, record) =>
      total + Number(record.data_used_bytes ?? 0),
    0
  );

  const totalRemaining = Array.from(
    latestUsageByEsim.values()
  ).reduce(
    (total, record) =>
      total + Number(record.data_remaining_bytes ?? 0),
    0
  );

  const latestUsageDate =
    usageRecords[0]?.recorded_at ?? null;

  const nextTrip = trips[0] ?? null;

  const primaryDevice =
    devices.find((device) => device.is_primary) ??
    devices[0] ??
    null;

  const pendingOperations = operations.filter(
    (operation) =>
      operation.status === "pending" ||
      operation.status === "awaiting_confirmation" ||
      operation.status === "executing"
  ).length;

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Espace client
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Vue d’ensemble
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Pilotez votre connectivité, vos voyages et vos équipements depuis
            un seul espace sécurisé.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          Dernière synchronisation : {formatDateTime(latestUsageDate)}
        </div>
      </div>

      {hasDataError && (
        <div className="mt-8 rounded-[24px] bg-[#f4f1e8] px-5 py-4 text-sm leading-6 text-black/60">
          Certaines informations n’ont pas pu être actualisées. Les données
          disponibles restent affichées.
        </div>
      )}

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Link
          href="/dashboard/esims"
          className="rounded-[28px] bg-[#f4f1e8] p-6 transition hover:-translate-y-1"
        >
          <p className="text-sm font-medium text-black/45">
            eSIM actives
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {activeEsims}
          </p>

          <p className="mt-3 text-sm text-black/40">
            {pendingEsims} en préparation
          </p>
        </Link>

        <Link
          href="/dashboard/usage"
          className="rounded-[28px] bg-[#f4f1e8] p-6 transition hover:-translate-y-1"
        >
          <p className="text-sm font-medium text-black/45">
            Data utilisée
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {formatBytes(totalUsed)}
          </p>

          <p className="mt-3 text-sm text-black/40">
            {usageRecords.length > 0
              ? `${formatBytes(totalRemaining)} restants`
              : "Aucun relevé"}
          </p>
        </Link>

        <Link
          href="/dashboard/devices"
          className="rounded-[28px] bg-[#f4f1e8] p-6 transition hover:-translate-y-1"
        >
          <p className="text-sm font-medium text-black/45">
            Appareils
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {devices.length}
          </p>

          <p className="mt-3 truncate text-sm text-black/40">
            {primaryDevice
              ? `${primaryDevice.manufacturer ?? ""} ${primaryDevice.model}`.trim()
              : "Aucun appareil principal"}
          </p>
        </Link>

        <Link
          href="/dashboard/ai-operator"
          className="rounded-[28px] bg-black p-6 text-white transition hover:-translate-y-1"
        >
          <p className="text-sm font-medium text-white/45">
            Opérations en attente
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {pendingOperations}
          </p>

          <p className="mt-3 text-sm text-white/45">
            Contrôle et confirmation
          </p>
        </Link>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[28px] border border-black/5 p-6">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                Mobilité
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
                Prochain voyage
              </h2>
            </div>

            <Link
              href="/dashboard/trips"
              className="rounded-full bg-[#f4f1e8] px-4 py-2 text-xs font-semibold"
            >
              Voir les voyages
            </Link>
          </div>

          {nextTrip ? (
            <div className="mt-8 rounded-[24px] bg-[#f4f1e8] p-6">
              <p className="text-sm font-semibold uppercase tracking-[.14em] text-black/40">
                {nextTrip.destination_country_code}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-.04em]">
                {nextTrip.destination_name ?? "Destination"}
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                    Départ
                  </p>

                  <p className="mt-2 font-semibold">
                    {formatDate(nextTrip.departure_date)}
                  </p>
                </div>

                <div className="rounded-[20px] bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                    Retour
                  </p>

                  <p className="mt-2 font-semibold">
                    {formatDate(nextTrip.return_date)}
                  </p>
                </div>
              </div>

              <Link
                href="/dashboard/plans"
                className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                Voir les forfaits
              </Link>
            </div>
          ) : (
            <div className="mt-8 rounded-[24px] bg-[#f4f1e8] p-6">
              <h3 className="text-xl font-semibold">
                Aucun voyage à venir
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Ajoutez une destination pour préparer votre connectivité avant
                votre départ.
              </p>

              <Link
                href="/dashboard/trips"
                className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                Préparer un voyage
              </Link>
            </div>
          )}
        </section>

        <section className="rounded-[28px] bg-[#f4f1e8] p-6">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                Activité
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
                Opérations récentes
              </h2>
            </div>

            <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black/45">
              {operations.length}
            </span>
          </div>

          {operations.length === 0 ? (
            <div className="mt-8 rounded-[24px] bg-white p-6">
              <h3 className="text-lg font-semibold">
                Aucune opération récente
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Les achats, activations et recharges apparaîtront ici.
              </p>
            </div>
          ) : (
            <div className="mt-8 space-y-3">
              {operations.map((operation) => (
                <article
                  key={operation.id}
                  className="flex items-center justify-between gap-4 rounded-[20px] bg-white p-4"
                >
                  <div>
                    <p className="font-semibold">
                      {operationLabel(operation.operation_type)}
                    </p>

                    <p className="mt-1 text-xs text-black/35">
                      {formatDateTime(operation.created_at)}
                    </p>
                  </div>

                  <span className="rounded-full bg-[#f4f1e8] px-3 py-1 text-xs font-semibold text-black/55">
                    {operationStatusLabel(operation.status)}
                  </span>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      <section className="mt-6 rounded-[28px] bg-black p-7 text-white">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-white/40">
              Accès rapide
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
              Gérez votre connectivité
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard/plans"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
            >
              Choisir un forfait
            </Link>

            <Link
              href="/dashboard/esims"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold"
            >
              Gérer mes eSIM
            </Link>

            <Link
              href="/dashboard/support"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold"
            >
              Obtenir de l’aide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
