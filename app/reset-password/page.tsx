"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const supabase = createClient();

  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (password !== confirmation) {
      setMessage("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("Votre mot de passe a été mis à jour.");

    await supabase.auth.signOut();

    router.push("/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-24 text-[#070707]">
      <div className="mx-auto max-w-md rounded-[32px] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
          Invisible Mobile
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-.06em]">
          Nouveau mot de passe
        </h1>

        <p className="mt-4 text-black/50">
          Choisissez un nouveau mot de passe pour votre compte.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="password" className="text-sm font-semibold">
              Nouveau mot de passe
            </label>

            <input
              id="password"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
            />
          </div>

          <div>
            <label htmlFor="confirmation" className="text-sm font-semibold">
              Confirmer le mot de passe
            </label>

            <input
              id="confirmation"
              type="password"
              required
              minLength={8}
              autoComplete="new-password"
              value={confirmation}
              onChange={(event) => setConfirmation(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-black px-8 py-4 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? "Mise à jour..." : "Modifier mon mot de passe"}
          </button>
        </form>

        {message && (
          <p className="mt-5 text-sm leading-6 text-black/60">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
