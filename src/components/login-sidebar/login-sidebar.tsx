import Link from "next/link";
import { PrimaryButton } from "../primary-button/primary-button";

export const LoginSidebar = () => {
  return (
    <Link
      href="/auth/login"
      className="flex justify-center py-12 px-8 bg-card-bg rounded-xl w-full"
    >
      <PrimaryButton>Login</PrimaryButton>
    </Link>
  );
};
