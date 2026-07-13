"use client";

import Link from "next/link";
import {
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type ProfileRecord = {
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  role: string;
  created_at: string;
};

function formatDate(date: string | null) {
  if (!date) {
    return "Non renseignée";
  }

  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function roleLabel(role: string) {
  const labels: Record<string, string> = {
    customer: "Client",
    admin: "Administrateur",
    support: "Support",
  };

  return labels[role] ?? role;
}

export default function ProfilePage() {
  const router = useRouter();
  const [supabase] = useState(() => createClient());

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("customer");
  const [createdAt, setCreatedAt] = useState<string | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !user) {
        router.replace("/login");
        return;
      }

      setUserId(user.id);

      const { data, error } = await supabase
        .from("profiles")
        .select(
          "email, first_name, last_name, phone, role, created_at"
        )
        .eq("id", user.id)
        .single<ProfileRecord>();

      if (error) {
        setEmail(user.email ?? "");
        setErrorMessage(
          "Le profil n’a pas pu être chargé complètement."
        );
        setLoading(false);
        return;
      }

      setEmail(data.email ?? user.email ?? "");
      setFirstName(data.first_name ?? "");
      setLastName(data.last_name ?? "");
      setPhone(data.phone ?? "");
      setRole(data.role ?? "customer");
      setCreatedAt(data.created_at ?? null);
      setLoading(false);
    }

    loadProfile();
  }, [router, supabase]);

  const initials = useMemo(() => {
    const firstInitial = firstName.trim().charAt(0);
    const lastInitial = lastName.trim().charAt(0);

    const value = `${firstInitial}${lastInitial}`.toUpperCase();

    return value || email.charAt(0).toUpperCase() || "IM";
  }, [email, firstName, lastName]);

  const displayName = useMemo(() => {
    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim();

    return fullName || "Utilisateur Invisible Mobile";
  }, [firstName, lastName]);

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

    const normalizedFirstName = firstName.trim();
    const normalizedLastName = lastName.trim();
    const normalizedPhone = phone.trim();

    const { error } = await supabase
      .from("profiles")
      .update({
        first_name: normalizedFirstName || null,
        last_name: normalizedLastName || null,
        phone: normalizedPhone || null,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);

    if (error) {
      setErrorMessage(error.message);
      setSaving(false);
      return;
    }

    setFirstName(normalizedFirstName);
    setLastName(normalizedLastName);
    setPhone(normalizedPhone);
    setMessage("Votre profil a été mis à jour.");
    setSaving(false);

    router.refresh();
  }

  if (loading) {
    return (
      <div className="rounded-[28px] bg-[#f4f1e8] p-8">
        <p className="text-black/50">
          Chargement du profil...
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Compte
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Profil
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Gérez vos informations personnelles et accédez aux
            options de sécurité de votre compte.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          {roleLabel(role)}
        </div>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
        <aside className="space-y-6">
          <section className="rounded-[28px] bg-black p-7 text-white">
            <div className="flex h-20 w-20 items-center justify-center rounded-[24px] bg-white text-2xl font-semibold text-black">
              {initials}
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
              {displayName}
            </h2>

            <p className="mt-2 break-all text-sm text-white/50">
              {email}
            </p>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[.14em] text-white/35">
                Membre depuis
              </p>

              <p className="mt-2 font-semibold">
                {formatDate(createdAt)}
              </p>
            </div>
          </section>

          <section className="rounded-[28px] bg-[#f4f1e8] p-6">
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
              Sécurité
            </p>

            <h2 className="mt-3 text-xl font-semibold">
              Mot de passe
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Utilisez le parcours sécurisé de réinitialisation pour
              modifier votre mot de passe.
            </p>

            <Link
              href="/forgot-password"
              className="mt-6 inline-flex rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
            >
              Modifier le mot de passe
            </Link>
          </section>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] border border-black/5 p-6 sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
            Informations personnelles
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
            Vos coordonnées
          </h2>

          <div className="mt-7 space-y-5">
            <div>
              <label className="text-sm font-semibold">
                Adresse email
              </label>

              <input
                type="email"
                value={email}
                readOnly
                className="mt-2 w-full cursor-not-allowed rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 text-black/50 outline-none"
              />

              <p className="mt-2 text-xs text-black/35">
                L’adresse email est liée à votre compte sécurisé.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">
                  Prénom
                </label>

                <input
                  value={firstName}
                  onChange={(event) =>
                    setFirstName(event.target.value)
                  }
                  autoComplete="given-name"
                  placeholder="Votre prénom"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  Nom
                </label>

                <input
                  value={lastName}
                  onChange={(event) =>
                    setLastName(event.target.value)
                  }
                  autoComplete="family-name"
                  placeholder="Votre nom"
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">
                Téléphone
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
                autoComplete="tel"
                placeholder="+33 6 00 00 00 00"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
              />
            </div>

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
              {saving
                ? "Enregistrement..."
                : "Enregistrer les modifications"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
