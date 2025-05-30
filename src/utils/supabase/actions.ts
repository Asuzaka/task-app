"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SupabaseClient } from "@supabase/supabase-js";

const miniMiddlware = async (supabase: SupabaseClient) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return encodedRedirect("error", "/sign-in", "Unauthorized access");
  }

  if (user?.user_metadata?.banned) {
    return encodedRedirect("error", "/sign-in", "You are blocked");
  }
};

export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const username = formData.get("username")?.toString();
  const supabase = await createClient();

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required"
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  const userId = data?.user?.id;
  const last_seen = data?.user?.created_at;
  const blocked = false;

  if (userId) {
    const { error: profileError } = await supabase
      .from("profiles")
      .insert([{ id: userId, username, email, last_seen, blocked }]);
    if (profileError)
      return encodedRedirect("error", "/sign-up", profileError.message);
  }
  if (error) {
    return encodedRedirect("error", "/sign-up", error.message);
  } else {
    return redirect("/");
  }
};

export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect("/");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};

export const banAction = async (ids: string[]) => {
  const supabase = await createClient();

  await miniMiddlware(supabase);

  for (const id of ids) {
    const { error } = await supabase.auth.admin.updateUserById(id, {
      user_metadata: { banned: true },
    });

    if (error)
      return encodedRedirect("error", "/", `Failed to block user ${ids}`);
  }

  await supabase.from("profiles").update({ blocked: true }).in("id", ids);
};

export const unbanAction = async (ids: string[]) => {
  const supabase = await createClient();

  await miniMiddlware(supabase);

  for (const id of ids) {
    const { error } = await supabase.auth.admin.updateUserById(id, {
      user_metadata: { banned: false },
    });

    if (error)
      return encodedRedirect("error", "/", `Failed to unblock user ${ids}`);
  }

  await supabase.from("profiles").update({ blocked: false }).in("id", ids);
};

export const deleteAction = async (ids: string[]) => {
  const supabase = await createClient();

  await miniMiddlware(supabase);

  for (const id of ids) {
    const { error } = await supabase.auth.admin.deleteUser(id);

    if (error)
      return encodedRedirect("error", "/", `Failed to delete user ${ids}`);
  }
};

export const getProfiles = async () => {
  const supabase = await createClient();

  const { data: profiles, error } = await supabase.from("profiles").select("*");

  if (error) return encodedRedirect("error", "/", error.message);

  return profiles;
};
