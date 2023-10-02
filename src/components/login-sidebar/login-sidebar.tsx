import Link from "next/link";
import { Button } from "../button/button";

export const LoginSidebar = () => {
  return (
    <Link
      href="/auth/login"
      className="flex justify-center py-12 px-8 bg-card-bg rounded-xl w-full"
    >
      <Button variant="primary" fullWidth>
        Login
      </Button>
    </Link>
  );
};
