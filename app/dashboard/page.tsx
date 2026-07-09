import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-[#f4f1e8] px-6 py-24 text-[#070707]">
      <div className="mx-auto max-w-5xl rounded-[32px] bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[.22em] text-black/40">
          Invisible Mobile
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-.06em]">
          Dashboard
        </h1>

        <p className="mt-4 text-black/50">
          Connecté avec : {user.email}
        </p>

        <LogoutButton />
      </div>
    </main>
  );
}
