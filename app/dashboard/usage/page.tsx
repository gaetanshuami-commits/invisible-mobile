import { createClient } from "@/lib/supabase/server";

type UsageRecord = {
  id: string;
  esim_profile_id: string;
  subscription_id: string | null;
  data_used_bytes: number | string;
  data_remaining_bytes: number | string | null;
  recorded_at: string;
};

type EsimProfile = {
  id: string;
  provider: string | null;
  iccid: string | null;
  status: string;
  country_code: string | null;
};

function formatBytes(value: number | string | null) {
  if (value === null) {
    return "Non disponible";
  }

  const bytes = Number(value);

  if (!Number.isFinite(bytes) || bytes < 0) {
    return "Non disponible";
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

  return `${Math.round(bytes / 1024)} Ko`;
}

function formatDate(date: string | null) {
  if (!date) {
    return "Aucune synchronisation";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

function maskIccid(iccid: string | null) {
  if (!iccid) {
    return "ICCID indisponible";
  }

  if (iccid.length <= 8) {
    return iccid;
  }

  return `${iccid.slice(0, 4)}••••••••${iccid.slice(-4)}`;
}

function statusLabel(status: string) {
  const labels: Record<string, string> = {
    pending: "En préparation",
    provisioned: "Provisionnée",
    active: "Active",
    suspended: "Suspendue",
    expired: "Expirée",
    cancelled: "Annulée",
    unknown: "Statut inconnu",
  };

  return labels[status] ?? status;
}

export default async function UsagePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [
    { data: usageRecords, error: usageError },
    { data: esimProfiles, error: esimError },
  ] = await Promise.all([
    supabase
      .from("usage_records")
      .select(
        "id, esim_profile_id, subscription_id, data_used_bytes, data_remaining_bytes, recorded_at"
      )
      .eq("user_id", user!.id)
      .order("recorded_at", {
        ascending: false,
      }),

    supabase
      .from("esim_profiles")
      .select(
        "id, provider, iccid, status, country_code"
      )
      .eq("user_id", user!.id),
  ]);

  const records = (usageRecords ?? []) as UsageRecord[];
  const profiles = (esimProfiles ?? []) as EsimProfile[];

  const profilesById = new Map(
    profiles.map((profile) => [profile.id, profile])
  );

  const totalUsed = records.reduce(
    (total, record) =>
      total + Number(record.data_used_bytes ?? 0),
    0
  );

  const latestRecordByEsim = new Map<string, UsageRecord>();

  for (const record of records) {
    if (!latestRecordByEsim.has(record.esim_profile_id)) {
      latestRecordByEsim.set(
        record.esim_profile_id,
        record
      );
    }
  }

  const totalRemaining = Array.from(
    latestRecordByEsim.values()
  ).reduce(
    (total, record) =>
      total + Number(record.data_remaining_bytes ?? 0),
    0
  );

  const lastSync =
    records.length > 0
      ? records[0].recorded_at
      : null;

  const hasError = Boolean(
    usageError || esimError
  );

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Connectivité
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Consommation data
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Suivez l’utilisation de vos eSIM, leur volume restant et les
            dernières données synchronisées par le fournisseur.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          Dernière mise à jour : {formatDate(lastSync)}
        </div>
      </div>

      {hasError ? (
        <div className="mt-10 rounded-[28px] bg-[#f4f1e8] p-8">
          <h2 className="text-2xl font-semibold">
            Données temporairement indisponibles
          </h2>

          <p className="mt-3 max-w-xl text-black/50">
            La consommation n’a pas pu être chargée. Réessayez ultérieurement.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] bg-[#f4f1e8] p-6">
              <p className="text-sm font-medium text-black/45">
                Data utilisée
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
                {formatBytes(totalUsed)}
              </p>

              <p className="mt-3 text-sm text-black/40">
                Total cumulé des relevés
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f4f1e8] p-6">
              <p className="text-sm font-medium text-black/45">
                Data restante
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
                {records.length > 0
                  ? formatBytes(totalRemaining)
                  : "—"}
              </p>

              <p className="mt-3 text-sm text-black/40">
                Dernier état connu par eSIM
              </p>
            </div>

            <div className="rounded-[28px] bg-[#f4f1e8] p-6">
              <p className="text-sm font-medium text-black/45">
                Relevés disponibles
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
                {records.length}
              </p>

              <p className="mt-3 text-sm text-black/40">
                Historique synchronisé
              </p>
            </div>
          </div>

          {records.length === 0 ? (
            <div className="mt-10 rounded-[28px] border border-black/5 bg-[#f4f1e8] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-semibold">
                0
              </div>

              <h2 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
                Aucune consommation disponible
              </h2>

              <p className="mt-3 max-w-xl text-black/50">
                Vos données apparaîtront ici lorsqu’une eSIM réelle sera active
                et que le fournisseur aura synchronisé son premier relevé.
              </p>
            </div>
          ) : (
            <div className="mt-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                  Détail
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
                  Consommation par eSIM
                </h2>
              </div>

              <div className="mt-6 space-y-4">
                {Array.from(latestRecordByEsim.entries()).map(
                  ([esimProfileId, record]) => {
                    const profile =
                      profilesById.get(esimProfileId);

                    const used = Number(
                      record.data_used_bytes ?? 0
                    );

                    const remaining =
                      record.data_remaining_bytes === null
                        ? null
                        : Number(
                            record.data_remaining_bytes
                          );

                    const total =
                      remaining === null
                        ? null
                        : used + remaining;

                    const percentage =
                      total && total > 0
                        ? Math.min(
                            100,
                            Math.round(
                              (used / total) * 100
                            )
                          )
                        : 0;

                    return (
                      <article
                        key={record.id}
                        className="rounded-[28px] border border-black/5 bg-[#f4f1e8] p-6"
                      >
                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                              {profile?.country_code ??
                                "International"}
                            </p>

                            <h3 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
                              {profile
                                ? statusLabel(profile.status)
                                : "eSIM"}
                            </h3>

                            <p className="mt-2 text-sm text-black/45">
                              {maskIccid(
                                profile?.iccid ?? null
                              )}
                            </p>
                          </div>

                          <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[.1em] text-black/45">
                            {profile?.provider ??
                              "Fournisseur"}
                          </div>
                        </div>

                        <div className="mt-7 grid gap-4 sm:grid-cols-3">
                          <div className="rounded-[20px] bg-white p-4">
                            <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                              Utilisé
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                              {formatBytes(used)}
                            </p>
                          </div>

                          <div className="rounded-[20px] bg-white p-4">
                            <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                              Restant
                            </p>

                            <p className="mt-2 text-lg font-semibold">
                              {formatBytes(remaining)}
                            </p>
                          </div>

                          <div className="rounded-[20px] bg-white p-4">
                            <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                              Synchronisé
                            </p>

                            <p className="mt-2 text-sm font-semibold">
                              {formatDate(
                                record.recorded_at
                              )}
                            </p>
                          </div>
                        </div>

                        {total !== null && (
                          <div className="mt-6">
                            <div className="flex items-center justify-between text-xs font-semibold text-black/45">
                              <span>Utilisation</span>
                              <span>{percentage}%</span>
                            </div>

                            <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/10">
                              <div
                                className="h-full rounded-full bg-black"
                                style={{
                                  width: `${percentage}%`,
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
