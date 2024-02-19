"use client";
import { Button } from "../button/button";
import { signOut } from "../../app/(auth)/sign-in/action";
import { useRouter } from "next/navigation";

export const LoginSidebar = () => {
  const router = useRouter();
  const handleClick = async () => {
    await signOut();
    router.refresh();
  };
  return (
    <div className="flex justify-center py-12 px-8 bg-main-300 rounded-xl w-full">
      <Button variant="primary" fullWidth onClick={handleClick}>
        Log out
      </Button>
    </div>
  );
};
