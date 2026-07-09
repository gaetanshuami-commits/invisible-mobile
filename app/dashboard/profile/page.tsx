"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ProfilePage() {
  const router = useRouter();
  const supabase = createClient();

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUserId(user.id);

      const { data } = await supabase
        .from("profiles")
        .select("email, first_name, last_name, phone")
        .eq("id", user.id)
        .single();

      setEmail(data?.email ?? user.email ?? "");
      setFirstName(data?.first_name ?? "");
      setLastName(data?.last_name ?? "");
      setPhone(data?.phone ?? "");
      setLoading(false);
    }

    loadProfile();
  }, [router, supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage("");

    const { error } = await supabase
      .from("profiles")
      .update({
        first_name: firstName,
        last_name: lastName,
        phone,
        updated_at: new Date().toISOString(),
      })
      .eq("id", userId);

    if (error) {
      setMessage(error.message);
      setSaving(false);
      return;
    }

    setMessage("Profil mis à jour.");
    setSaving(false);
  }

  if (loading) {
    return <p>Chargement du profil...</p>;
  }

  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
        Espace client
      </p>

      <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
        Profil
      </h1>

      <p className="mt-4 text-black/50">{email}</p>

      <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-5">
        <div>
          <label className="text-sm font-semibold">Prénom</label>
          <input
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Nom</label>
          <input
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
          />
        </div>

        <div>
          <label className="text-sm font-semibold">Téléphone</label>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-[#f4f1e8] px-4 py-4 outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-full bg-black px-8 py-4 text-sm font-semibold text-white disabled:opacity-50"
        >
          {saving ? "Enregistrement..." : "Enregistrer"}
        </button>
      </form>

      {message && <p className="mt-5 text-sm text-black/60">{message}</p>}
    </>
  );
}
