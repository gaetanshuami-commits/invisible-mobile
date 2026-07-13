"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type UserSettings = {
  language: string;
  timezone: string;
  service_notifications: boolean;
  security_notifications: boolean;
  marketing_notifications: boolean;
  data_saver_enabled: boolean;
};

const defaultSettings: UserSettings = {
  language: "fr",
  timezone: "Europe/Paris",
  service_notifications: true,
  security_notifications: true,
  marketing_notifications: false,
  data_saver_enabled: false,
};

export default function SettingsPage() {
  const [supabase] = useState(() => createClient());

  const [userId, setUserId] = useState("");
  const [settings, setSettings] =
    useState<UserSettings>(defaultSettings);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loadSettings = useCallback(
    async (id: string) => {
      const { data, error } = await supabase
        .from("user_settings")
        .select(
          "language, timezone, service_notifications, security_notifications, marketing_notifications, data_saver_enabled"
        )
        .eq("user_id", id)
        .maybeSingle();

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      if (data) {
        setSettings(data);
      }

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
      await loadSettings(user.id);
    }

    initialize();
  }, [loadSettings, supabase]);

  function updateSetting<K extends keyof UserSettings>(
    key: K,
    value: UserSettings[K]
  ) {
    setSettings((current) => ({
      ...current,
      [key]: value,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!userId) {
      return;
    }

    setSaving(true);
    setMessage("");
    setErrorMessage("");

    const { error } = await supabase
      .from("user_settings")
      .upsert(
        {
          user_id: userId,
          ...settings,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "user_id",
        }
      );

    if (error) {
      setErrorMessage(error.message);
      setSaving(false);
      return;
    }

    setMessage("Vos paramètres ont été enregistrés.");
    setSaving(false);
  }

  if (loading) {
    return <p className="text-black/50">Chargement des paramètres...</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Préférences
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Paramètres
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Personnalisez votre expérience Invisible Mobile et choisissez les
            communications que vous souhaitez recevoir.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6"
      >
        <section className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
            Général
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
            Langue et région
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold">
                Langue de l’interface
              </label>

              <select
                value={settings.language}
                onChange={(event) =>
                  updateSetting("language", event.target.value)
                }
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
              >
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Fuseau horaire
              </label>

              <select
                value={settings.timezone}
                onChange={(event) =>
                  updateSetting("timezone", event.target.value)
                }
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
              >
                <option value="Europe/Paris">Paris</option>
                <option value="Europe/London">Londres</option>
                <option value="America/New_York">New York</option>
                <option value="America/Los_Angeles">Los Angeles</option>
                <option value="Africa/Kinshasa">Kinshasa</option>
                <option value="Asia/Dubai">Dubaï</option>
                <option value="Asia/Tokyo">Tokyo</option>
              </select>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-black/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
            Communications
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
            Notifications
          </h2>

          <div className="mt-6 space-y-4">
            <label className="flex items-start justify-between gap-6 rounded-[22px] bg-[#f4f1e8] p-5">
              <div>
                <p className="font-semibold">Notifications de service</p>
                <p className="mt-2 text-sm leading-6 text-black/50">
                  Activation, consommation, expiration et incidents liés aux eSIM.
                </p>
              </div>

              <input
                type="checkbox"
                checked={settings.service_notifications}
                onChange={(event) =>
                  updateSetting(
                    "service_notifications",
                    event.target.checked
                  )
                }
              />
            </label>

            <label className="flex items-start justify-between gap-6 rounded-[22px] bg-[#f4f1e8] p-5">
              <div>
                <p className="font-semibold">Alertes de sécurité</p>
                <p className="mt-2 text-sm leading-6 text-black/50">
                  Connexions, changements sensibles et protection du compte.
                </p>
              </div>

              <input
                type="checkbox"
                checked={settings.security_notifications}
                onChange={(event) =>
                  updateSetting(
                    "security_notifications",
                    event.target.checked
                  )
                }
              />
            </label>

            <label className="flex items-start justify-between gap-6 rounded-[22px] bg-[#f4f1e8] p-5">
              <div>
                <p className="font-semibold">Actualités et offres</p>
                <p className="mt-2 text-sm leading-6 text-black/50">
                  Nouveaux forfaits, destinations et informations commerciales.
                </p>
              </div>

              <input
                type="checkbox"
                checked={settings.marketing_notifications}
                onChange={(event) =>
                  updateSetting(
                    "marketing_notifications",
                    event.target.checked
                  )
                }
              />
            </label>
          </div>
        </section>

        <section className="rounded-[28px] bg-black p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-white/40">
            Connectivité
          </p>

          <div className="mt-5 flex items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-.03em]">
                Économie de données
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
                Réduisez les synchronisations non essentielles lorsque vous
                utilisez une connexion mobile limitée.
              </p>
            </div>

            <input
              type="checkbox"
              checked={settings.data_saver_enabled}
              onChange={(event) =>
                updateSetting(
                  "data_saver_enabled",
                  event.target.checked
                )
              }
            />
          </div>
        </section>

        {message && (
          <div className="rounded-2xl border border-black/10 px-4 py-4 text-sm text-black/60">
            {message}
          </div>
        )}

        {errorMessage && (
          <div className="rounded-2xl bg-[#f4f1e8] px-4 py-4 text-sm text-black/70">
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={saving || !userId}
          className="w-full rounded-full bg-black px-8 py-4 text-sm font-semibold text-white disabled:opacity-50"
        >
          {saving ? "Enregistrement..." : "Enregistrer les paramètres"}
        </button>
      </form>
    </>
  );
}
