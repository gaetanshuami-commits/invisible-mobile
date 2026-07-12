"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type EsimProfile = {
  id: string;
  provider: string | null;
  provider_esim_id: string | null;
  iccid: string | null;
  status: string;
  country_code: string | null;
  activation_date: string | null;
  expiration_date: string | null;
  created_at: string;
};

type EsimOperation = {
  id: string;
  status:
    | "pending"
    | "awaiting_confirmation"
    | "confirmed"
    | "executing"
    | "executed"
    | "failed"
    | "cancelled";
};

type InstallationDetails = {
  providerEsimId: string;
  qrCodeData: string | null;
  activationCode: string | null;
  smdpAddress: string | null;
  matchingId: string | null;
};

type ApiSuccess<T> = {
  data: T;
};

type ApiFailure = {
  error: {
    code: string;
    message: string;
  };
};

type EsimsClientProps = {
  esims: EsimProfile[];
};

async function readApiResponse<T>(
  response: Response
): Promise<T> {
  const payload = (await response.json()) as
    | ApiSuccess<T>
    | ApiFailure;

  if (!response.ok || "error" in payload) {
    throw new Error(
      "error" in payload
        ? payload.error.message
        : "Une erreur inattendue est survenue."
    );
  }

  return payload.data;
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

function statusDescription(status: string) {
  const descriptions: Record<string, string> = {
    pending: "Votre profil eSIM est en cours de préparation.",
    provisioned: "Votre eSIM est prête à être installée ou activée.",
    active: "Votre eSIM est actuellement opérationnelle.",
    suspended: "Le service de cette eSIM est temporairement suspendu.",
    expired: "La période de validité de cette eSIM est terminée.",
    cancelled: "Cette eSIM a été annulée.",
  };

  return (
    descriptions[status] ??
    "Les informations de cette eSIM sont en cours de synchronisation."
  );
}

function maskIccid(iccid: string | null) {
  if (!iccid) {
    return "Non disponible";
  }

  if (iccid.length <= 8) {
    return iccid;
  }

  return `${iccid.slice(0, 4)}••••••••${iccid.slice(-4)}`;
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

export default function EsimsClient({
  esims,
}: EsimsClientProps) {
  const router = useRouter();

  const [selectedEsim, setSelectedEsim] =
    useState<EsimProfile | null>(null);

  const [operation, setOperation] =
    useState<EsimOperation | null>(null);

  const [installation, setInstallation] =
    useState<InstallationDetails | null>(null);

  const [loadingAction, setLoadingAction] =
    useState<string | null>(null);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function prepareActivation(esim: EsimProfile) {
    setSelectedEsim(esim);
    setOperation(null);
    setInstallation(null);
    setMessage("");
    setErrorMessage("");
    setLoadingAction(`activate-${esim.id}`);

    try {
      const response = await fetch("/api/esim/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          esimProfileId: esim.id,
          idempotencyKey:
            `activation-${esim.id}-${crypto.randomUUID()}`,
        }),
      });

      const preparedOperation =
        await readApiResponse<EsimOperation>(response);

      setOperation(preparedOperation);
      setMessage(
        "L’activation est prête. Elle ne sera exécutée qu’après votre confirmation."
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Impossible de préparer l’activation."
      );
    } finally {
      setLoadingAction(null);
    }
  }

  async function confirmActivation() {
    if (!operation) {
      return;
    }

    setLoadingAction("confirm-activation");
    setMessage("");
    setErrorMessage("");

    try {
      const response = await fetch(
        `/api/esim/actions/${operation.id}/confirm`,
        {
          method: "POST",
        }
      );

      const executedOperation =
        await readApiResponse<EsimOperation>(response);

      setOperation(executedOperation);

      if (executedOperation.status === "executed") {
        setMessage("Votre eSIM a été activée.");
        router.refresh();
      } else {
        setMessage(
          `État de l’opération : ${executedOperation.status}.`
        );
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "L’activation n’a pas pu être exécutée."
      );
    } finally {
      setLoadingAction(null);
    }
  }

  async function loadInstallation(esim: EsimProfile) {
    setSelectedEsim(esim);
    setOperation(null);
    setInstallation(null);
    setMessage("");
    setErrorMessage("");
    setLoadingAction(`installation-${esim.id}`);

    try {
      if (!esim.provider_esim_id) {
        throw new Error(
          "Les informations fournisseur de cette eSIM ne sont pas encore disponibles."
        );
      }

      const response = await fetch(
        `/api/esim/installation/${encodeURIComponent(
          esim.provider_esim_id
        )}`
      );

      const details =
        await readApiResponse<InstallationDetails>(response);

      setInstallation(details);
      setMessage(
        "Les informations d’installation ont été récupérées de manière sécurisée."
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Impossible de récupérer les informations d’installation."
      );
    } finally {
      setLoadingAction(null);
    }
  }

  function closePanel() {
    if (loadingAction) {
      return;
    }

    setSelectedEsim(null);
    setOperation(null);
    setInstallation(null);
    setMessage("");
    setErrorMessage("");
  }

  if (esims.length === 0) {
    return (
      <div className="mt-10 rounded-[28px] bg-[#f4f1e8] p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-semibold">
          +
        </div>

        <h2 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
          Aucune eSIM disponible
        </h2>

        <p className="mt-3 max-w-xl text-black/50">
          Vos eSIM apparaîtront ici après la validation d’une commande auprès
          d’un fournisseur connecté à Invisible Mobile.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 grid gap-5 xl:grid-cols-2">
        {esims.map((esim) => (
          <article
            key={esim.id}
            className="rounded-[28px] border border-black/5 bg-[#f4f1e8] p-6"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                  {esim.country_code ?? "International"}
                </p>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
                  {statusLabel(esim.status)}
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-black/50">
                  {statusDescription(esim.status)}
                </p>
              </div>

              <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[.1em] text-black/50">
                {esim.provider ?? "Fournisseur"}
              </span>
            </div>

            <div className="mt-7 grid gap-4 rounded-[22px] bg-white p-5 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                  ICCID
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {maskIccid(esim.iccid)}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                  Activation
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {formatDate(esim.activation_date)}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                  Expiration
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {formatDate(esim.expiration_date)}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                  Création
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {formatDate(esim.created_at)}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {esim.status !== "active" && (
                <button
                  type="button"
                  disabled={loadingAction !== null}
                  onClick={() => prepareActivation(esim)}
                  className="flex-1 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/80 disabled:opacity-40"
                >
                  {loadingAction === `activate-${esim.id}`
                    ? "Préparation..."
                    : "Activer"}
                </button>
              )}

              <button
                type="button"
                disabled={loadingAction !== null}
                onClick={() => loadInstallation(esim)}
                className="flex-1 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white disabled:opacity-40"
              >
                {loadingAction === `installation-${esim.id}`
                  ? "Chargement..."
                  : "Installer"}
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedEsim && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-5 py-8 backdrop-blur-sm">
          <div className="max-h-full w-full max-w-xl overflow-y-auto rounded-[32px] bg-white p-7 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.18em] text-black/40">
                  Gestion eSIM
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">
                  {selectedEsim.country_code ?? "eSIM internationale"}
                </h2>
              </div>

              <button
                type="button"
                onClick={closePanel}
                disabled={loadingAction !== null}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f1e8] text-xl disabled:opacity-40"
                aria-label="Fermer"
              >
                ×
              </button>
            </div>

            {message && (
              <div className="mt-7 rounded-2xl border border-black/10 px-4 py-4 text-sm leading-6 text-black/60">
                {message}
              </div>
            )}

            {errorMessage && (
              <div className="mt-7 rounded-2xl bg-[#f4f1e8] px-4 py-4 text-sm leading-6 text-black/70">
                {errorMessage}
              </div>
            )}

            {operation?.status === "awaiting_confirmation" && (
              <button
                type="button"
                onClick={confirmActivation}
                disabled={loadingAction !== null}
                className="mt-7 w-full rounded-full bg-black px-6 py-4 text-sm font-semibold text-white disabled:opacity-40"
              >
                {loadingAction === "confirm-activation"
                  ? "Activation en cours..."
                  : "Confirmer l’activation"}
              </button>
            )}

            {installation && (
              <div className="mt-7 space-y-4 rounded-[24px] bg-[#f4f1e8] p-6">
                <h3 className="text-xl font-semibold">
                  Informations d’installation
                </h3>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                    Adresse SM-DP+
                  </p>
                  <p className="mt-2 break-all text-sm font-semibold">
                    {installation.smdpAddress ?? "Non disponible"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                    Code d’activation
                  </p>
                  <p className="mt-2 break-all text-sm font-semibold">
                    {installation.activationCode ?? "Non disponible"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                    Matching ID
                  </p>
                  <p className="mt-2 break-all text-sm font-semibold">
                    {installation.matchingId ?? "Non disponible"}
                  </p>
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={closePanel}
              disabled={loadingAction !== null}
              className="mt-7 w-full rounded-full border border-black/10 px-6 py-4 text-sm font-semibold disabled:opacity-40"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
