import Link from "next/link";
import type { ReactNode } from "react";

type DashboardShellProps = {
  email?: string;
  children: ReactNode;
};

const sections = [
  { label: "Vue d’ensemble", href: "/dashboard" },
  { label: "Mes eSIM", href: "/dashboard/esims" },
  { label: "Consommation data", href: "/dashboard/usage" },
  { label: "Forfaits", href: "/dashboard/plans" },
  { label: "Voyages", href: "/dashboard/trips" },
  { label: "Paiements", href: "/dashboard/payments" },
  { label: "Factures", href: "/dashboard/invoices" },
  { label: "Appareils", href: "/dashboard/devices" },
  { label: "AI Operator", href: "/dashboard/ai-operator" },
  { label: "Support", href: "/dashboard/support" },
  { label: "Paramètres", href: "/dashboard/settings" },
  { label: "Profil", href: "/dashboard/profile" },
];

export default function DashboardShell({
  email,
  children,
}: DashboardShellProps) {
  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-8 text-[#070707]">
      <div className="mx-auto grid max-w-[1480px] gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[32px] bg-black p-6 text-white">
          <p className="text-xl font-semibold tracking-[-.04em]">
            Invisible Mobile
          </p>

          <p className="mt-3 text-sm text-white/45">{email}</p>

          <nav className="mt-8 space-y-2">
            {sections.map((section) => (
              <Link
                key={section.label}
                href={section.href}
                className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/65 hover:bg-white/10 hover:text-white"
              >
                {section.label}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="rounded-[32px] bg-white p-8 shadow-sm">
          {children}
        </section>
      </div>
    </main>
  );
}
