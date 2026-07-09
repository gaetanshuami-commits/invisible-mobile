"use client";

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

export default function TripsPage() {
  const [supabase] = useState(() => createClient());

  const [userId, setUserId] = useState("");
  const [trips, setTrips] = useState<Trip[]>([]);
  const [destinationName, setDestinationName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadTrips = useCallback(
    async (id: string) => {
      const { data, error } = await supabase
        .from("trips")
        .select(
          "id, destination_country_code, destination_name, departure_date, return_date, status"
        )
        .eq("user_id", id)
        .order("departure_date", { ascending: true });

      if (error) {
        setMessage(error.message);
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
        setLoading(false);
        return;
      }

      setUserId(user.id);
      await loadTrips(user.id);
    }

    initialize();
  }, [loadTrips, supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const { error } = await supabase.from("trips").insert({
      user_id: userId,
      destination_country_code: countryCode.trim().toUpperCase(),
      destination_name: destinationName.trim(),
      departure_date: departureDate || null,
      return_date: returnDate || null,
    });

    if (error) {
      setMessage(error.message);
      setSaving(false);
      return;
    }

    setDestinationName("");
    setCountryCode("");
    setDepartureDate("");
    setReturnDate("");
    setMessage("Voyage ajouté.");

    await loadTrips(userId);
    setSaving(false);
  }

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
        Espace client
      </p>

      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
        Voyages
      </h1>

      <p className="mt-4 max-w-2xl text-black/50">
        Préparez vos destinations pour retrouver plus tard les forfaits eSIM
        adaptés à vos voyages.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid gap-5 rounded-[28px] bg-[#f4f1e8] p-6 md:grid-cols-2"
      >
        <div>
          <label className="text-sm font-semibold">Destination</label>
          <input
            required
            value={destinationName}
            onChange={(event) => setDestinationName(event.target.value)}
            placeholder="Exemple : Japon"
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Code pays</label>
          <input
            required
            maxLength={2}
            value={countryCode}
            onChange={(event) => setCountryCode(event.target.value)}
            placeholder="Exemple : JP"
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 uppercase outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Date de départ</label>
          <input
            type="date"
            value={departureDate}
            onChange={(event) => setDepartureDate(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Date de retour</label>
          <input
            type="date"
            value={returnDate}
            onChange={(event) => setReturnDate(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={saving || !userId}
          className="rounded-full bg-black px-8 py-4 text-sm font-semibold text-white disabled:opacity-50 md:col-span-2"
        >
          {saving ? "Ajout..." : "Ajouter le voyage"}
        </button>
      </form>

      {message && (
        <p className="mt-5 text-sm text-black/60">{message}</p>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Mes voyages</h2>

        {loading ? (
          <p className="mt-5 text-black/50">Chargement...</p>
        ) : trips.length === 0 ? (
          <div className="mt-5 rounded-[28px] bg-[#f4f1e8] p-6">
            <p className="text-xl font-semibold">Aucun voyage enregistré</p>
          </div>
        ) : (
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {trips.map((trip) => (
              <div
                key={trip.id}
                className="rounded-[28px] bg-[#f4f1e8] p-6"
              >
                <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                  {trip.destination_country_code}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {trip.destination_name ?? "Destination"}
                </h3>

                <p className="mt-4 text-black/50">
                  Départ : {trip.departure_date ?? "Non renseigné"}
                </p>

                <p className="mt-2 text-black/50">
                  Retour : {trip.return_date ?? "Non renseigné"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
