"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/action";
import { FormInputs } from "./sign-in-form";

export async function signIn(formData: FormInputs) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword(formData);

  if (error?.message === "Invalid login credentials") {
    return error.message;
  }

  revalidatePath("/", "layout");

  redirect("/");
}

export async function signInWithGoogle() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  return { data, error };
}

export async function signOut() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }
}
