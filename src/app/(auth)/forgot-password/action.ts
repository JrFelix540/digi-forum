"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/action";
import { FormInputs } from "./forgot-password-form";

export async function forgotPassword({ email }: FormInputs) {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/update-password`,
  });
  if (!error) {
    return "Password reset email sent! Check your mail";
  }
}
