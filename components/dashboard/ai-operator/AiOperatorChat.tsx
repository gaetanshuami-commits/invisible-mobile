"use client";

import {
  FormEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  created_at: string;
};

type AiOperatorChatProps = {
  initialMessages: ChatMessage[];
  initialConversationId: string | null;
  initialLanguage: string;
};

const statusTranslations: Record<string, string> = {
  planned: "À venir",
  ongoing: "En cours",
  completed: "Terminé",
  active: "Actif",
  pending: "En préparation",
  suspended: "Suspendu",
  expired: "Expiré",
  cancelled: "Annulé",
  provisioned: "Prête",
};

function cleanAssistantLine(value: string) {
  return value
    .replace(/\*\*/g, "")
    .replace(/^#{1,6}\s*/, "")
    .replace(/^[-*]\s+/, "• ")
    .replace(/\bplanned\b/gi, statusTranslations.planned)
    .replace(/\bongoing\b/gi, statusTranslations.ongoing)
    .replace(/\bcompleted\b/gi, statusTranslations.completed)
    .replace(/\bactive\b/gi, statusTranslations.active)
    .replace(/\bpending\b/gi, statusTranslations.pending)
    .replace(/\bsuspended\b/gi, statusTranslations.suspended)
    .replace(/\bexpired\b/gi, statusTranslations.expired)
    .replace(/\bcancelled\b/gi, statusTranslations.cancelled)
    .replace(/\bprovisioned\b/gi, statusTranslations.provisioned)
    .trim();
}

function isSectionTitle(line: string) {
  if (!line || line.startsWith("•")) {
    return false;
  }

  const normalized = line.replace(/:$/, "").toLowerCase();

  const knownTitles = [
    "vos appareils",
    "appareils enregistrés",
    "vos voyages",
    "voyages enregistrés",
    "votre connectivité",
    "connectivité",
    "votre compte",
    "situation actuelle",
    "couverture",
    "recommandation",
    "prochaine étape",
  ];

  return (
    knownTitles.includes(normalized) ||
    (line.endsWith(":") && line.length <= 55)
  );
}

function formatAssistantContent(content: string): ReactNode {
  const lines = content
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map(cleanAssistantLine)
    .filter(Boolean);

  if (lines.length === 0) {
    return null;
  }

  return (
    <div className="space-y-3">
      {lines.map((line, index) => {
        if (isSectionTitle(line)) {
          return (
            <p
              key={`${line}-${index}`}
              className="pt-2 text-sm font-semibold tracking-[-.01em] text-black"
            >
              {line.replace(/:$/, "")}
            </p>
          );
        }

        if (line.startsWith("•")) {
          return (
            <div
              key={`${line}-${index}`}
              className="flex gap-3 text-sm leading-6 text-black/65"
            >
              <span
                aria-hidden="true"
                className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-black"
              />

              <span>{line.replace(/^•\s*/, "")}</span>
            </div>
          );
        }

        return (
          <p
            key={`${line}-${index}`}
            className="text-sm leading-6 text-black/70"
          >
            {line}
          </p>
        );
      })}
    </div>
  );
}

export default function AiOperatorChat({
  initialMessages,
  initialConversationId,
  initialLanguage,
}: AiOperatorChatProps) {
  const [messages, setMessages] =
    useState<ChatMessage[]>(initialMessages);

  const [conversationId, setConversationId] =
    useState<string | null>(initialConversationId);

  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState(initialLanguage);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [messages, sending]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const normalizedMessage = message.trim();

    if (!normalizedMessage || sending) {
      return;
    }

    const temporaryUserMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: normalizedMessage,
      created_at: new Date().toISOString(),
    };

    setMessages((current) => [
      ...current,
      temporaryUserMessage,
    ]);

    setMessage("");
    setSending(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/ai-operator/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: normalizedMessage,
          conversationId,
          language,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ?? "Impossible d’obtenir une réponse."
        );
      }

      setConversationId(data.conversationId);

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.message,
          created_at: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Le service est momentanément indisponible."
      );
    } finally {
      setSending(false);
    }
  }

  function startNewConversation() {
    if (sending) {
      return;
    }

    setConversationId(null);
    setMessages([]);
    setMessage("");
    setErrorMessage("");
  }

  return (
    <section className="rounded-[28px] border border-black/5 p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
            Opérateur privé
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
            Votre ligne intelligente
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            disabled={sending}
            aria-label="Langue de réponse"
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/60 outline-none disabled:opacity-50"
          >
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
            <option value="it">Italiano</option>
            <option value="pt">Português</option>
            <option value="ar">العربية</option>
            <option value="sw">Kiswahili</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="ko">한국어</option>
          </select>

          <button
          type="button"
          onClick={startNewConversation}
          disabled={sending}
          className="rounded-full bg-[#f4f1e8] px-4 py-2 text-xs font-semibold text-black/60 disabled:opacity-50"
        >
          Nouvelle demande
          </button>
        </div>
      </div>

      <div className="mt-8 max-h-[620px] min-h-[360px] space-y-4 overflow-y-auto pr-1">
        {messages.length === 0 ? (
          <div className="rounded-[24px] bg-[#f4f1e8] p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-semibold">
              IM
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
              Votre compte, en un message
            </h3>

            <p className="mt-3 max-w-xl text-black/50">
              Consultez vos appareils, vos voyages, vos eSIM et les
              informations disponibles dans votre espace Invisible Mobile.
            </p>
          </div>
        ) : (
          messages.map((entry) => (
            <article
              key={entry.id}
              className={
                entry.role === "user"
                  ? "ml-auto max-w-[85%] rounded-[24px] bg-black p-5 text-white"
                  : "mr-auto max-w-[92%] rounded-[24px] border border-black/5 bg-[#f4f1e8] p-5"
              }
            >
              <p
                className={
                  entry.role === "user"
                    ? "text-xs font-semibold uppercase tracking-[.14em] text-white/40"
                    : "text-xs font-semibold uppercase tracking-[.14em] text-black/35"
                }
              >
                {entry.role === "user"
                  ? "Votre demande"
                  : "Invisible Mobile"}
              </p>

              {entry.role === "user" ? (
                <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-white/80">
                  {entry.content}
                </p>
              ) : (
                <div className="mt-4">
                  {formatAssistantContent(entry.content)}
                </div>
              )}
            </article>
          ))
        )}

        {sending && (
          <div className="mr-auto max-w-[92%] rounded-[24px] border border-black/5 bg-[#f4f1e8] p-5">
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-black/35">
              Invisible Mobile
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-black" />

              <p className="text-sm text-black/50">
                Vérification de votre compte
              </p>
            </div>
          </div>
        )}

        <div ref={endRef} />
      </div>

      {errorMessage && (
        <div className="mt-5 rounded-2xl bg-[#f4f1e8] px-4 py-4 text-sm text-black/70">
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-3 sm:flex-row"
      >
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          maxLength={4000}
          rows={3}
          placeholder="Écrivez votre demande..."
          className="min-h-[96px] flex-1 resize-none rounded-[22px] border border-black/10 bg-[#f4f1e8] px-5 py-4 text-sm outline-none"
        />

        <button
          type="submit"
          disabled={sending || !message.trim()}
          className="rounded-[22px] bg-black px-7 py-4 text-sm font-semibold text-white disabled:opacity-40"
        >
          {sending ? "Vérification" : "Envoyer"}
        </button>
      </form>

      <p className="mt-3 text-xs leading-5 text-black/35">
        Invisible Mobile utilise uniquement les informations disponibles
        dans votre espace client. Aucune opération sensible n’est exécutée
        sans confirmation.
      </p>
    </section>
  );
}
