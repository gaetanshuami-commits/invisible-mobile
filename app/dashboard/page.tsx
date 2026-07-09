import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import DashboardShell from "@/components/dashboard/DashboardShell";
import LogoutButton from "./LogoutButton";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("email, first_name, last_name, role")
    .eq("id", user.id)
    .single();

  return (
    <DashboardShell email={profile?.email ?? user.email}>
      <LogoutButton />
    </DashboardShell>
  );
}
