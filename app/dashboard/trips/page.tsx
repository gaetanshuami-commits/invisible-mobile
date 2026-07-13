"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Trip = {
  id: string;
  destination_country_code: string;
  destination_name: string | null;
  departure_date: string | null;
  return_date: string | null;
  status: string;
};

type TripStatus = "planned" | "ongoing" | "completed";

function currentDate() {
  return new Date().toISOString().slice(0, 10);
}

function calculateTripStatus(
  departureDate: string | null,
  returnDate: string | null
): TripStatus {
  const today = currentDate();

  if (returnDate && returnDate < today) {
    return "completed";
  }

  if (
    departureDate &&
    departureDate <= today &&
    (!returnDate || returnDate >= today)
  ) {
    return "ongoing";
  }

  return "planned";
}

function statusLabel(status: TripStatus) {
  const labels: Record<TripStatus, string> = {
    planned: "À venir",
    ongoing: "En cours",
    completed: "Terminé",
  };

  return labels[status];
}

function formatDate(value: string | null) {
  if (!value) {
    return "Non renseignée";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

export default function TripsPage() {
  const [supabase] = useState(() => createClient());

  const [userId, setUserId] = useState("");
  const [trips, setTrips] = useState<Trip[]>([]);
  const [editingTripId, setEditingTripId] = useState<string | null>(null);

  const [destinationName, setDestinationName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [actionTripId, setActionTripId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loadTrips = useCallback(
    async (id: string) => {
      const { data, error } = await supabase
        .from("trips")
        .select(
          "id, destination_country_code, destination_name, departure_date, return_date, status"
        )
        .eq("user_id", id)
        .order("departure_date", {
          ascending: true,
          nullsFirst: false,
        });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      setTrips(data ?? []);
      setLoading(false);
    },
    [supabase]
  );

  useEffect(() => {
    async function initialize() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setErrorMessage("Votre session n’est plus disponible.");
        setLoading(false);
        return;
      }

      setUserId(user.id);
      await loadTrips(user.id);
    }

    initialize();
  }, [loadTrips, supabase]);

  function resetForm() {
    setEditingTripId(null);
    setDestinationName("");
    setCountryCode("");
    setDepartureDate("");
    setReturnDate("");
  }

  function startEditing(trip: Trip) {
    setEditingTripId(trip.id);
    setDestinationName(trip.destination_name ?? "");
    setCountryCode(trip.destination_country_code);
    setDepartureDate(trip.departure_date ?? "");
    setReturnDate(trip.return_date ?? "");
    setMessage("");
    setErrorMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function validateForm() {
    const normalizedCountryCode = countryCode.trim().toUpperCase();

    if (!destinationName.trim()) {
      return "La destination est obligatoire.";
    }

    if (!/^[A-Z]{2}$/.test(normalizedCountryCode)) {
      return "Le code pays doit contenir exactement deux lettres.";
    }

    if (
      departureDate &&
      returnDate &&
      returnDate < departureDate
    ) {
      return "La date de retour ne peut pas précéder la date de départ.";
    }

    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setErrorMessage(validationError);
      setMessage("");
      return;
    }

    if (!userId) {
      setErrorMessage("Votre session n’est plus disponible.");
      return;
    }

    setSaving(true);
    setMessage("");
    setErrorMessage("");

    const normalizedCountryCode =
      countryCode.trim().toUpperCase();

    const tripStatus = calculateTripStatus(
      departureDate || null,
      returnDate || null
    );

    const values = {
      destination_country_code: normalizedCountryCode,
      destination_name: destinationName.trim(),
      departure_date: departureDate || null,
      return_date: returnDate || null,
      status: tripStatus,
      updated_at: new Date().toISOString(),
    };

    const { error } = editingTripId
      ? await supabase
          .from("trips")
          .update(values)
          .eq("id", editingTripId)
          .eq("user_id", userId)
      : await supabase.from("trips").insert({
          ...values,
          user_id: userId,
        });

    if (error) {
      setErrorMessage(error.message);
      setSaving(false);
      return;
    }

    setMessage(
      editingTripId
        ? "Voyage modifié avec succès."
        : "Voyage ajouté avec succès."
    );

    resetForm();
    await loadTrips(userId);
    setSaving(false);
  }

  async function handleDelete(trip: Trip) {
    if (!userId) {
      return;
    }

    const confirmed = window.confirm(
      `Supprimer le voyage vers ${
        trip.destination_name ?? trip.destination_country_code
      } ?`
    );

    if (!confirmed) {
      return;
    }

    setActionTripId(trip.id);
    setMessage("");
    setErrorMessage("");

    const { error } = await supabase
      .from("trips")
      .delete()
      .eq("id", trip.id)
      .eq("user_id", userId);

    if (error) {
      setErrorMessage(error.message);
      setActionTripId(null);
      return;
    }

    if (editingTripId === trip.id) {
      resetForm();
    }

    setMessage("Voyage supprimé.");
    await loadTrips(userId);
    setActionTripId(null);
  }

  const upcomingTrips = trips.filter(
    (trip) =>
      calculateTripStatus(
        trip.departure_date,
        trip.return_date
      ) === "planned"
  ).length;

  const ongoingTrips = trips.filter(
    (trip) =>
      calculateTripStatus(
        trip.departure_date,
        trip.return_date
      ) === "ongoing"
  ).length;

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Mobilité
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Voyages
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Organisez vos destinations et préparez votre connectivité eSIM
            avant chaque départ.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
            {upcomingTrips} à venir
          </div>

          <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
            {ongoingTrips} en cours
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_1.25fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] bg-[#f4f1e8] p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
            {editingTripId ? "Modification" : "Nouveau voyage"}
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
            {editingTripId
              ? "Modifier le voyage"
              : "Préparer une destination"}
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm font-semibold">
                Destination
              </label>

              <input
                required
                value={destinationName}
                onChange={(event) =>
                  setDestinationName(event.target.value)
                }
                placeholder="Exemple : Japon"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">
                Code pays
              </label>

              <input
                required
                maxLength={2}
                value={countryCode}
                onChange={(event) =>
                  setCountryCode(event.target.value)
                }
                placeholder="Exemple : JP"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 uppercase outline-none"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">
                  Date de départ
                </label>

                <input
                  type="date"
                  value={departureDate}
                  onChange={(event) =>
                    setDepartureDate(event.target.value)
                  }
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Date de retour
                </label>

                <input
                  type="date"
                  min={departureDate || undefined}
                  value={returnDate}
                  onChange={(event) =>
                    setReturnDate(event.target.value)
                  }
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={saving || !userId}
              className="w-full rounded-full bg-black px-8 py-4 text-sm font-semibold text-white disabled:opacity-50"
            >
              {saving
                ? "Enregistrement..."
                : editingTripId
                  ? "Enregistrer les modifications"
                  : "Ajouter le voyage"}
            </button>

            {editingTripId && (
              <button
                type="button"
                onClick={resetForm}
                disabled={saving}
                className="w-full rounded-full border border-black/10 bg-white px-8 py-4 text-sm font-semibold disabled:opacity-50"
              >
                Annuler la modification
              </button>
            )}
          </div>
        </form>

        <section>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
              Mes destinations
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
              Voyages enregistrés
            </h2>
          </div>

          {message && (
            <div className="mt-5 rounded-2xl border border-black/10 px-4 py-4 text-sm text-black/60">
              {message}
            </div>
          )}

          {errorMessage && (
            <div className="mt-5 rounded-2xl bg-[#f4f1e8] px-4 py-4 text-sm text-black/70">
              {errorMessage}
            </div>
          )}

          {loading ? (
            <p className="mt-6 text-black/50">
              Chargement...
            </p>
          ) : trips.length === 0 ? (
            <div className="mt-6 rounded-[28px] bg-[#f4f1e8] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-semibold">
                +
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
                Aucun voyage enregistré
              </h3>

              <p className="mt-3 max-w-xl text-black/50">
                Ajoutez votre prochaine destination pour préparer votre
                connectivité.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {trips.map((trip) => {
                const calculatedStatus =
                  calculateTripStatus(
                    trip.departure_date,
                    trip.return_date
                  );

                const actionLoading =
                  actionTripId === trip.id;

                return (
                  <article
                    key={trip.id}
                    className="rounded-[28px] border border-black/5 bg-[#f4f1e8] p-6"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                            {trip.destination_country_code}
                          </p>

                          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black/55">
                            {statusLabel(calculatedStatus)}
                          </span>
                        </div>

                        <h3 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
                          {trip.destination_name ??
                            "Destination"}
                        </h3>
                      </div>

                      <Link
                        href="/dashboard/plans"
                        className="inline-flex rounded-full bg-black px-4 py-2 text-xs font-semibold text-white"
                      >
                        Voir les forfaits
                      </Link>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                          Départ
                        </p>

                        <p className="mt-2 font-semibold">
                          {formatDate(
                            trip.departure_date
                          )}
                        </p>
                      </div>

                      <div className="rounded-[20px] bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                          Retour
                        </p>

                        <p className="mt-2 font-semibold">
                          {formatDate(
                            trip.return_date
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3 border-t border-black/5 pt-5">
                      <button
                        type="button"
                        onClick={() => startEditing(trip)}
                        disabled={actionLoading || saving}
                        className="rounded-full bg-white px-5 py-3 text-xs font-semibold disabled:opacity-50"
                      >
                        Modifier
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(trip)}
                        disabled={actionLoading || saving}
                        className="rounded-full border border-black/10 px-5 py-3 text-xs font-semibold text-black/50 disabled:opacity-50"
                      >
                        {actionLoading
                          ? "Suppression..."
                          : "Supprimer"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
