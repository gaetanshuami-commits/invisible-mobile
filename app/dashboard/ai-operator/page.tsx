import { createClient } from "@/lib/supabase/server";

export default async function AiOperatorPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [{ data: logs }, { data: actions }] = await Promise.all([
    supabase
      .from("ai_operator_logs")
      .select(
        "id, conversation_id, role, content, model, latency_ms, created_at"
      )
      .eq("user_id", user!.id)
      .order("created_at", { ascending: false })
      .limit(20),

    supabase
      .from("ai_operator_actions")
      .select(
        "id, action_type, title, description, risk_level, status, confirmation_required, confirmed_at, executed_at, failed_at, created_at"
      )
      .eq("user_id", user!.id)
      .order("created_at", { ascending: false })
      .limit(20),
  ]);

  const pendingActions =
    actions?.filter(
      (action) =>
        action.status === "pending" ||
        action.status === "awaiting_confirmation"
    ).length ?? 0;

  const executedActions =
    actions?.filter((action) => action.status === "executed").length ?? 0;

  function formatDate(date: string | null) {
    if (!date) {
      return "—";
    }

    return new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  }

  function statusLabel(status: string) {
    const labels: Record<string, string> = {
      pending: "En préparation",
      awaiting_confirmation: "Confirmation requise",
      confirmed: "Confirmée",
      executing: "Exécution en cours",
      executed: "Exécutée",
      failed: "Échec",
      cancelled: "Annulée",
    };

    return labels[status] ?? status;
  }

  return (
    <>
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Intelligence opérationnelle
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            AI Operator
          </h1>

          <p className="mt-4 max-w-3xl text-black/50">
            Une interface conçue pour assister la gestion de vos services,
            analyser votre contexte et préparer des actions contrôlées.
          </p>
        </div>

        <div className="inline-flex items-center gap-3 rounded-full border border-black/10 px-5 py-3">
          <span className="h-2 w-2 rounded-full bg-black/30" />

          <span className="text-sm font-semibold text-black/50">
            Moteur IA non connecté
          </span>
        </div>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            Conversations
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {logs?.length ?? 0}
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            Confirmations requises
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {pendingActions}
          </p>
        </div>

        <div className="rounded-[28px] bg-[#f4f1e8] p-6">
          <p className="text-sm font-medium text-black/45">
            Actions exécutées
          </p>

          <p className="mt-4 text-3xl font-semibold tracking-[-.04em]">
            {executedActions}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-[1.25fr_1fr]">
        <section className="rounded-[28px] border border-black/5 p-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
                Assistant
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
                Espace de conversation
              </h2>
            </div>

            <span className="rounded-full bg-[#f4f1e8] px-4 py-2 text-xs font-semibold text-black/50">
              Lecture seule
            </span>
          </div>

          {!logs || logs.length === 0 ? (
            <div className="mt-8 rounded-[24px] bg-[#f4f1e8] p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-semibold">
                AI
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-.03em]">
                Votre opérateur intelligent se prépare
              </h3>

              <p className="mt-3 max-w-xl text-black/50">
                L’interface est prête à recevoir le futur moteur IA sécurisé
                d’Invisible Mobile. Aucune réponse ou action fictive n’est
                générée.
              </p>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {logs.map((log) => (
                <article
                  key={log.id}
                  className="rounded-[24px] bg-[#f4f1e8] p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[.14em] text-black/40">
                      {log.role}
                    </p>

                    <p className="text-xs text-black/35">
                      {formatDate(log.created_at)}
                    </p>
                  </div>

                  <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-black/70">
                    {log.content}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>

        <section className="rounded-[28px] bg-[#f4f1e8] p-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[.16em] text-black/40">
              Contrôle
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-[-.03em]">
              Actions proposées
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Les futures opérations sensibles devront être contrôlées avant
              leur exécution.
            </p>
          </div>

          {!actions || actions.length === 0 ? (
            <div className="mt-8 rounded-[24px] bg-white p-6">
              <p className="text-lg font-semibold">
                Aucune action en attente
              </p>

              <p className="mt-3 text-sm leading-6 text-black/50">
                Les recommandations et demandes de confirmation apparaîtront
                ici lorsqu’un moteur IA sécurisé sera connecté.
              </p>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {actions.map((action) => (
                <article
                  key={action.id}
                  className="rounded-[24px] bg-white p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-[#f4f1e8] px-3 py-1 text-xs font-semibold text-black/60">
                      {statusLabel(action.status)}
                    </span>

                    <span className="text-xs font-semibold uppercase tracking-[.12em] text-black/35">
                      Risque {action.risk_level}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {action.title}
                  </h3>

                  {action.description && (
                    <p className="mt-2 text-sm leading-6 text-black/50">
                      {action.description}
                    </p>
                  )}

                  <p className="mt-5 text-xs text-black/35">
                    {formatDate(action.created_at)}
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>

      <div className="mt-6 rounded-[28px] bg-black p-7 text-white">
        <p className="text-sm font-semibold uppercase tracking-[.16em] text-white/40">
          Architecture de confiance
        </p>

        <div className="mt-5 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Analyser</p>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Comprendre le contexte et les besoins du compte.
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold">Proposer</p>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Préparer une recommandation ou une action traçable.
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold">Contrôler</p>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Exiger une validation avant toute opération sensible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
