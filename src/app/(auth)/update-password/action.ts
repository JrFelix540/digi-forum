"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/action";
import type { FormInputs } from "./update-password-form";
import { redirect } from "next/navigation";

export async function updatePassword({ password }: FormInputs) {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return error.message;
  }

  redirect("/sign-in");
}
