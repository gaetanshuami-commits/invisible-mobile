"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Plan = {
  id: string;
  provider: string;
  provider_plan_id: string;
  name: string;
  country_code: string | null;
  region: string | null;
  data_amount_mb: number | null;
  validity_days: number | null;
  price_amount: number | string | null;
  currency: string;
};

type EsimOperation = {
  id: string;
  operation_type: "purchase" | "activation" | "top_up";
  status:
    | "pending"
    | "awaiting_confirmation"
    | "confirmed"
    | "executing"
    | "executed"
    | "failed"
    | "cancelled";
  confirmation_required: boolean;
  plan_id: string | null;
  esim_profile_id: string | null;
  error_code?: string | null;
  error_message?: string | null;
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

type PlansPurchaseClientProps = {
  plans: Plan[];
};

function formatDataAmount(value: number | null) {
  if (value === null) {
    return "Data non renseignée";
  }

  if (value >= 1024) {
    const gigabytes = value / 1024;

    return `${Number.isInteger(gigabytes) ? gigabytes : gigabytes.toFixed(1)} Go`;
  }

  return `${value} Mo`;
}

function formatAmount(
  amount: number | string | null,
  currency: string
) {
  if (amount === null) {
    return "Prix indisponible";
  }

  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
  }).format(Number(amount));
}

async function readApiResponse<T>(
  response: Response
): Promise<T> {
  const payload = (await response.json()) as
    | ApiSuccess<T>
    | ApiFailure;

  if (
    !response.ok ||
    "error" in payload
  ) {
    const message =
      "error" in payload
        ? payload.error.message
        : "Une erreur inattendue est survenue.";

    throw new Error(message);
  }

  return payload.data;
}

export default function PlansPurchaseClient({
  plans,
}: PlansPurchaseClientProps) {
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] =
    useState<Plan | null>(null);

  const [operation, setOperation] =
    useState<EsimOperation | null>(null);

  const [preparingPlanId, setPreparingPlanId] =
    useState<string | null>(null);

  const [confirming, setConfirming] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [errorMessage, setErrorMessage] =
    useState("");

  async function preparePurchase(plan: Plan) {
    setPreparingPlanId(plan.id);
    setSelectedPlan(plan);
    setOperation(null);
    setMessage("");
    setErrorMessage("");

    try {
      const idempotencyKey =
        `purchase-${plan.id}-${crypto.randomUUID()}`;

      const response = await fetch(
        "/api/esim/purchase",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            planId: plan.id,
            idempotencyKey,
          }),
        }
      );

      const preparedOperation =
        await readApiResponse<EsimOperation>(
          response
        );

      setOperation(preparedOperation);

      setMessage(
        "L’opération est prête. Aucun achat ne sera exécuté sans votre confirmation."
      );
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Impossible de préparer l’achat."
      );
    } finally {
      setPreparingPlanId(null);
    }
  }

  async function confirmPurchase() {
    if (!operation) {
      return;
    }

    setConfirming(true);
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
        await readApiResponse<EsimOperation>(
          response
        );

      setOperation(executedOperation);

      if (
        executedOperation.status ===
        "executed"
      ) {
        setMessage(
          "Votre eSIM a été commandée avec succès."
        );

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
          : "L’opération n’a pas pu être exécutée."
      );

      setOperation((currentOperation) =>
        currentOperation
          ? {
              ...currentOperation,
              status: "failed",
            }
          : currentOperation
      );
    } finally {
      setConfirming(false);
    }
  }

  function closeConfirmation() {
    if (confirming) {
      return;
    }

    setSelectedPlan(null);
    setOperation(null);
    setMessage("");
    setErrorMessage("");
  }

  return (
    <>
      {plans.length === 0 ? (
        <div className="mt-10 rounded-[28px] bg-[#f4f1e8] p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-semibold">
            +
          </div>

          <h2 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
            Aucun forfait disponible
          </h2>

          <p className="mt-3 max-w-xl text-black/50">
            Le catalogue apparaîtra ici lorsque les offres réelles d’un
            fournisseur eSIM seront synchronisées avec Invisible Mobile.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className="flex min-h-[320px] flex-col rounded-[28px] border border-black/5 bg-[#f4f1e8] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                  {plan.country_code ??
                    plan.region ??
                    "International"}
                </p>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[.1em] text-black/40">
                  {plan.provider}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-semibold tracking-[-.03em]">
                {plan.name}
              </h2>

              <div className="mt-6 space-y-3 text-sm text-black/55">
                <div className="flex items-center justify-between gap-4">
                  <span>Data</span>
                  <span className="font-semibold text-black">
                    {formatDataAmount(
                      plan.data_amount_mb
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span>Validité</span>
                  <span className="font-semibold text-black">
                    {plan.validity_days
                      ? `${plan.validity_days} jours`
                      : "Non renseignée"}
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <p className="text-3xl font-semibold tracking-[-.04em]">
                  {formatAmount(
                    plan.price_amount,
                    plan.currency
                  )}
                </p>

                <button
                  type="button"
                  disabled={
                    preparingPlanId !== null
                  }
                  onClick={() =>
                    preparePurchase(plan)
                  }
                  className="mt-5 w-full rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {preparingPlanId === plan.id
                    ? "Préparation..."
                    : "Choisir ce forfait"}
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-5 py-8 backdrop-blur-sm">
          <div className="max-h-full w-full max-w-xl overflow-y-auto rounded-[32px] bg-white p-7 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[.18em] text-black/40">
                  Confirmation sécurisée
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">
                  Confirmer votre choix
                </h2>
              </div>

              <button
                type="button"
                onClick={closeConfirmation}
                disabled={confirming}
                aria-label="Fermer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f1e8] text-xl disabled:opacity-40"
              >
                ×
              </button>
            </div>

            <div className="mt-8 rounded-[24px] bg-[#f4f1e8] p-6">
              <p className="text-sm font-semibold uppercase tracking-[.14em] text-black/40">
                {selectedPlan.country_code ??
                  selectedPlan.region ??
                  "International"}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                {selectedPlan.name}
              </h3>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-black/45">
                    Data
                  </span>

                  <span className="font-semibold">
                    {formatDataAmount(
                      selectedPlan.data_amount_mb
                    )}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-black/45">
                    Validité
                  </span>

                  <span className="font-semibold">
                    {selectedPlan.validity_days
                      ? `${selectedPlan.validity_days} jours`
                      : "Non renseignée"}
                  </span>
                </div>

                <div className="flex justify-between gap-4 border-t border-black/10 pt-4">
                  <span className="font-semibold">
                    Total
                  </span>

                  <span className="text-xl font-semibold">
                    {formatAmount(
                      selectedPlan.price_amount,
                      selectedPlan.currency
                    )}
                  </span>
                </div>
              </div>
            </div>

            {message && (
              <div className="mt-5 rounded-2xl border border-black/10 px-4 py-4 text-sm leading-6 text-black/60">
                {message}
              </div>
            )}

            {errorMessage && (
              <div className="mt-5 rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 text-sm leading-6 text-black/70">
                {errorMessage}
              </div>
            )}

            <div className="mt-7">
              {!operation ? (
                <div className="rounded-full bg-black/5 px-6 py-4 text-center text-sm font-semibold text-black/40">
                  Préparation sécurisée en cours
                </div>
              ) : operation.status ===
                "awaiting_confirmation" ? (
                <button
                  type="button"
                  onClick={confirmPurchase}
                  disabled={confirming}
                  className="w-full rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition hover:bg-black/80 disabled:opacity-40"
                >
                  {confirming
                    ? "Confirmation en cours..."
                    : "Confirmer et continuer"}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={closeConfirmation}
                  disabled={confirming}
                  className="w-full rounded-full border border-black/10 px-6 py-4 text-sm font-semibold"
                >
                  Fermer
                </button>
              )}
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-black/35">
              Toute opération sensible est journalisée et nécessite une
              confirmation explicite.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
