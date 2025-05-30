import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import Dashboard from "@/app/_dashboard/page";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user?.user_metadata?.banned) {
    return encodedRedirect("error", "/sign-in", "You are blocked");
  }

  if (user) {
    await supabase
      .from("profiles")
      .update({ last_seen: new Date().toISOString() })
      .eq("id", user.id);
  }

  if (!user) {
    return encodedRedirect("error", "/sign-in", "Not Authorized");
  }

  return <Dashboard />;
}
