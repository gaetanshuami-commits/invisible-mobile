"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("Si ce compte existe, un e-mail de récupération vient d’être envoyé.");
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-24 text-[#070707]">
      <div className="mx-auto max-w-md rounded-[32px] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
          Invisible Mobile
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-.06em]">
          Mot de passe oublié
        </h1>

        <p className="mt-4 text-black/50">
          Entrez votre e-mail pour recevoir un lien de récupération.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Adresse e-mail
            </label>

            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-black px-8 py-4 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? "Envoi..." : "Envoyer le lien"}
          </button>
        </form>

        {message && <p className="mt-5 text-sm leading-6 text-black/60">{message}</p>}

        <button
          type="button"
          onClick={() => router.push("/login")}
          className="mt-6 text-sm font-semibold text-black/60"
        >
          Retour à la connexion
        </button>
      </div>
    </main>
  );
}
