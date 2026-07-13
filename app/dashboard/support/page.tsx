"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type SupportTicket = {
  id: string;
  subject: string;
  category: string;
  priority: string;
  message: string;
  status: string;
  resolved_at: string | null;
  created_at: string;
};

function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    general: "Question générale",
    esim: "eSIM",
    activation: "Activation",
    usage: "Consommation",
    billing: "Paiement et facturation",
    device: "Appareil",
    account: "Compte",
  };

  return labels[category] ?? category;
}

function priorityLabel(priority: string) {
  const labels: Record<string, string> = {
    low: "Faible",
    normal: "Normale",
    high: "Haute",
    urgent: "Urgente",
  };

  return labels[priority] ?? priority;
}

function statusLabel(status: string) {
  const labels: Record<string, string> = {
    open: "Ouvert",
    in_progress: "En cours",
    waiting_customer: "Votre réponse attendue",
    resolved: "Résolu",
    closed: "Fermé",
  };

  return labels[status] ?? status;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export default function SupportPage() {
  const [supabase] = useState(() => createClient());

  const [userId, setUserId] = useState("");
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("general");
  const [priority, setPriority] = useState("normal");
  const [messageBody, setMessageBody] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const loadTickets = useCallback(
    async (id: string) => {
      const { data, error } = await supabase
        .from("support_tickets")
        .select(
          "id, subject, category, priority, message, status, resolved_at, created_at"
        )
        .eq("user_id", id)
        .order("created_at", { ascending: false });

      if (error) {
        setErrorMessage(error.message);
        setLoading(false);
        return;
      }

      setTickets(data ?? []);
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
      await loadTickets(user.id);
    }

    initialize();
  }, [loadTickets, supabase]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!userId || !subject.trim() || !messageBody.trim()) {
      return;
    }

    setSaving(true);
    setFeedback("");
    setErrorMessage("");

    const { error } = await supabase.from("support_tickets").insert({
      user_id: userId,
      subject: subject.trim(),
      category,
      priority,
      message: messageBody.trim(),
    });

    if (error) {
      setErrorMessage(error.message);
      setSaving(false);
      return;
    }

    setSubject("");
    setCategory("general");
    setPriority("normal");
    setMessageBody("");
    setFeedback("Votre demande a été transmise.");

    await loadTickets(userId);
    setSaving(false);
  }

  const openTickets = tickets.filter(
    (ticket) =>
      ticket.status === "open" ||
      ticket.status === "in_progress" ||
      ticket.status === "waiting_customer"
  ).length;

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Assistance
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Support
          </h1>

          <p className="mt-4 max-w-2xl text-black/50">
            Transmettez une demande et suivez son traitement depuis votre
            espace client sécurisé.
          </p>
        </div>

        <div className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-black/50">
          {openTickets} demande{openTickets > 1 ? "s" : ""} en cours
        </div>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-[28px] bg-[#f4f1e8] p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
            Nouvelle demande
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
            Contacter l’assistance
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm font-semibold">Sujet</label>
              <input
                required
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="Décrivez brièvement votre demande"
                className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="text-sm font-semibold">Catégorie</label>
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
                >
                  <option value="general">Question générale</option>
                  <option value="esim">eSIM</option>
                  <option value="activation">Activation</option>
                  <option value="usage">Consommation</option>
                  <option value="billing">Paiement et facturation</option>
                  <option value="device">Appareil</option>
                  <option value="account">Compte</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold">Priorité</label>
                <select
                  value={priority}
                  onChange={(event) => setPriority(event.target.value)}
                  className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
                >
                  <option value="low">Faible</option>
                  <option value="normal">Normale</option>
                  <option value="high">Haute</option>
                  <option value="urgent">Urgente</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">Message</label>
              <textarea
                required
                rows={7}
                value={messageBody}
                onChange={(event) => setMessageBody(event.target.value)}
                placeholder="Donnez les informations nécessaires pour comprendre votre demande."
                className="mt-2 w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-4 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={saving || !userId}
              className="w-full rounded-full bg-black px-8 py-4 text-sm font-semibold text-white disabled:opacity-50"
            >
              {saving ? "Envoi en cours..." : "Envoyer la demande"}
            </button>
          </div>
        </form>

        <section>
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
            Suivi
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
            Mes demandes
          </h2>

          {feedback && (
            <div className="mt-5 rounded-2xl border border-black/10 px-4 py-4 text-sm text-black/60">
              {feedback}
            </div>
          )}

          {errorMessage && (
            <div className="mt-5 rounded-2xl bg-[#f4f1e8] px-4 py-4 text-sm text-black/70">
              {errorMessage}
            </div>
          )}

          {loading ? (
            <p className="mt-6 text-black/50">Chargement...</p>
          ) : tickets.length === 0 ? (
            <div className="mt-6 rounded-[28px] bg-[#f4f1e8] p-8">
              <h3 className="text-2xl font-semibold">
                Aucune demande envoyée
              </h3>

              <p className="mt-3 text-black/50">
                Vos échanges avec l’assistance apparaîtront ici.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {tickets.map((ticket) => (
                <article
                  key={ticket.id}
                  className="rounded-[28px] border border-black/5 bg-[#f4f1e8] p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black/60">
                      {statusLabel(ticket.status)}
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                      Priorité {priorityLabel(ticket.priority)}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {ticket.subject}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-black/40">
                    {categoryLabel(ticket.category)}
                  </p>

                  <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-black/60">
                    {ticket.message}
                  </p>

                  <p className="mt-5 text-xs text-black/35">
                    {formatDate(ticket.created_at)}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
