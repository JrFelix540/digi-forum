"use client";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

export function GoogleSignIn({ children }: { children: React.ReactNode }) {
  const handleClick = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "/" },
    });
    if (error) {
      console.log("signin error", error);
    }
  };
  return (
    <button
      className="py-5 px-6 flex justify-center gap-2 items-center bg-white text-black font-semibold rounded-md"
      onClick={handleClick}
    >
      <Image src="/google-logo.png" alt="google logo" height={25} width={25} />
      {children}
    </button>
  );
}
