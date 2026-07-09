"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Device = {
  id: string;
  manufacturer: string | null;
  model: string;
  operating_system: string | null;
  operating_system_version: string | null;
  esim_compatible: boolean | null;
  is_primary: boolean;
  status: string;
  last_seen_at: string | null;
};

export default function DevicesPage() {
  const [supabase] = useState(() => createClient());

  const [userId, setUserId] = useState("");
  const [devices, setDevices] = useState<Device[]>([]);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");
  const [operatingSystemVersion, setOperatingSystemVersion] = useState("");
  const [esimCompatible, setEsimCompatible] = useState("");
  const [isPrimary, setIsPrimary] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadDevices = useCallback(
    async (id: string) => {
      const { data, error } = await supabase
        .from("devices")
        .select(
          "id, manufacturer, model, operating_system, operating_system_version, esim_compatible, is_primary, status, last_seen_at"
        )
        .eq("user_id", id)
        .order("is_primary", { ascending: false })
        .order("created_at", { ascending: false });

      if (error) {
        setMessage(error.message);
        setLoading(false);
        return;
      }

      setDevices(data ?? []);
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
      await loadDevices(user.id);
    }

    initialize();
  }, [loadDevices, supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    if (isPrimary) {
      const { error: primaryError } = await supabase
        .from("devices")
        .update({ is_primary: false })
        .eq("user_id", userId);

      if (primaryError) {
        setMessage(primaryError.message);
        setSaving(false);
        return;
      }
    }

    const compatibility =
      esimCompatible === "yes"
        ? true
        : esimCompatible === "no"
          ? false
          : null;

    const { error } = await supabase.from("devices").insert({
      user_id: userId,
      manufacturer: manufacturer.trim() || null,
      model: model.trim(),
      operating_system: operatingSystem.trim() || null,
      operating_system_version: operatingSystemVersion.trim() || null,
      esim_compatible: compatibility,
      is_primary: isPrimary,
    });

    if (error) {
      setMessage(error.message);
      setSaving(false);
      return;
    }

    setManufacturer("");
    setModel("");
    setOperatingSystem("");
    setOperatingSystemVersion("");
    setEsimCompatible("");
    setIsPrimary(false);
    setMessage("Appareil ajouté.");

    await loadDevices(userId);
    setSaving(false);
  }

  function compatibilityLabel(value: boolean | null) {
    if (value === true) return "Compatible eSIM";
    if (value === false) return "Non compatible eSIM";
    return "Compatibilité à vérifier";
  }

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Équipements
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Appareils
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Gérez les appareils associés à votre compte et préparez leur
            utilisation avec les services eSIM Invisible Mobile.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          {devices.length} appareil{devices.length > 1 ? "s" : ""}
        </div>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_1.25fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] bg-[#f4f1e8] p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
            Nouvel appareil
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
            Ajouter un équipement
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm font-semibold">Fabricant</label>
              <input
                value={manufacturer}
                onChange={(event) => setManufacturer(event.target.value)}
                placeholder="Exemple : Apple"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Modèle</label>
              <input
                required
                value={model}
                onChange={(event) => setModel(event.target.value)}
                placeholder="Exemple : iPhone 16 Pro"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">
                  Système
                </label>
                <input
                  value={operatingSystem}
                  onChange={(event) =>
                    setOperatingSystem(event.target.value)
                  }
                  placeholder="Exemple : iOS"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Version
                </label>
                <input
                  value={operatingSystemVersion}
                  onChange={(event) =>
                    setOperatingSystemVersion(event.target.value)
                  }
                  placeholder="Exemple : 18"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Compatibilité eSIM
              </label>

              <select
                value={esimCompatible}
                onChange={(event) => setEsimCompatible(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
              >
                <option value="">À vérifier</option>
                <option value="yes">Compatible</option>
                <option value="no">Non compatible</option>
              </select>
            </div>

            <label className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4">
              <input
                type="checkbox"
                checked={isPrimary}
                onChange={(event) => setIsPrimary(event.target.checked)}
              />

              <span className="text-sm font-semibold">
                Définir comme appareil principal
              </span>
            </label>

            <button
              type="submit"
              disabled={saving || !userId}
              className="w-full rounded-full bg-black px-8 py-4 text-sm font-semibold text-white disabled:opacity-50"
            >
              {saving ? "Ajout en cours..." : "Ajouter l’appareil"}
            </button>
          </div>
        </form>

        <div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
              Mon parc
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
              Appareils enregistrés
            </h2>
          </div>

          {message && (
            <p className="mt-5 text-sm text-black/60">{message}</p>
          )}

          {loading ? (
            <p className="mt-6 text-black/50">Chargement...</p>
          ) : devices.length === 0 ? (
            <div className="mt-6 rounded-[28px] border border-black/5 bg-[#f4f1e8] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl">
                +
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
                Aucun appareil enregistré
              </h3>

              <p className="mt-3 max-w-xl text-black/50">
                Ajoutez un appareil pour préparer la gestion de vos futures
                eSIM Invisible Mobile.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {devices.map((device) => (
                <article
                  key={device.id}
                  className="rounded-[28px] border border-black/5 bg-[#f4f1e8] p-6"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold uppercase tracking-[.14em] text-black/40">
                          {device.manufacturer ?? "Appareil"}
                        </p>

                        {device.is_primary && (
                          <span className="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                            Principal
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
                        {device.model}
                      </h3>

                      <p className="mt-3 text-sm text-black/50">
                        {[device.operating_system, device.operating_system_version]
                          .filter(Boolean)
                          .join(" ") || "Système non renseigné"}
                      </p>
                    </div>

                    <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-black/60">
                      {compatibilityLabel(device.esim_compatible)}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
