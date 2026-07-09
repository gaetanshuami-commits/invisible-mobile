import Link from "next/link";
import type { ReactNode } from "react";

type DashboardShellProps = {
  email?: string;
  children?: ReactNode;
};

const sections = [
  { label: "Vue d’ensemble", href: "/dashboard" },
  { label: "Mes eSIM", href: "/dashboard/esims" },
  { label: "Consommation data" },
  { label: "Forfaits" },
  { label: "Voyages" },
  { label: "Paiements" },
  { label: "Factures" },
  { label: "Appareils" },
  { label: "AI Operator" },
  { label: "Support" },
  { label: "Paramètres" },
  { label: "Profil", href: "/dashboard/profile" },
];

export default function DashboardShell({ email, children }: DashboardShellProps) {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-8 text-[#070707]">
      <div className="mx-auto grid max-w-[1480px] gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[32px] bg-black p-6 text-white">
          <p className="text-xl font-semibold tracking-[-.04em]">
            Invisible Mobile
          </p>

          <p className="mt-3 text-sm text-white/45">{email}</p>

          <nav className="mt-8 space-y-2">
            {sections.map((section) =>
              section.href ? (
                <Link
                  key={section.label}
                  href={section.href}
                  className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/65 hover:bg-white/10 hover:text-white"
                >
                  {section.label}
                </Link>
              ) : (
                <span
                  key={section.label}
                  className="block w-full cursor-default rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/35"
                >
                  {section.label}
                </span>
              )
            )}
          </nav>

          {children}
        </aside>

        <section className="rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
            Espace client
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
            Vue d’ensemble
          </h1>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-[28px] bg-[#f4f1e8] p-6">
              <p className="text-sm text-black/45">Statut eSIM</p>
              <p className="mt-3 text-2xl font-semibold">À configurer</p>
            </div>

            <div className="rounded-[28px] bg-[#f4f1e8] p-6">
              <p className="text-sm text-black/45">Data disponible</p>
              <p className="mt-3 text-2xl font-semibold">—</p>
            </div>

            <div className="rounded-[28px] bg-[#f4f1e8] p-6">
              <p className="text-sm text-black/45">AI Operator</p>
              <p className="mt-3 text-2xl font-semibold">Bientôt</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
