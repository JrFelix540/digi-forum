import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Layout } from "../../layouts/layout";
import Image from "next/image";
import { Button } from "@/components/button/button";

export default async function HomePage() {
  const cookieStore = cookies();

  const supabase = createClient(cookieStore);

  const { error, data } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/sign-in");
  }
  return (
    <Layout>
      <main className="p-10">
        <div className="flex flex-col gap-4 max-w-xs justify-center mx-auto">
          <p className="text-center font-semibold text-2xl">DigiForum</p>
          <p className="text-center ">
            Welcome to Discussion with anyone, You can say anything #FreeSpeech.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/landing.png"
            height={554}
            width={428}
            alt="landing page image"
          />
        </div>
        <div className="flex justify-center">
          <Button variant="secondary">Go to #Threads</Button>
        </div>
      </main>
    </Layout>
  );
}
