import { cookies } from "next/headers";
import { Layout } from "../../../layouts/layout";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ThreadsPage() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const { error, data } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/sign-in");
  }

  return (
    <Layout>
      <main className="py-5 px-10">
        <p>Test threads</p>
      </main>
    </Layout>
  );
}
