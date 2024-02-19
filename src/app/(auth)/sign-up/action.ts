"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/action";
import { FormInputs } from "./sign-up-form";

export async function signUp({ email, password, name }: FormInputs) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: name } },
  });
  if (error) {
    return error.message;
  }

  revalidatePath("/", "layout");
  redirect("/");
}
