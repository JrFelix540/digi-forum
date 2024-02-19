import Link from "next/link";
import { ForgotPasswordForm } from "./forgot-password-form";

export default function ForgotPassword() {
  return (
    <div className="bg-transparent py-6 px-28 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-white">Forgot your Password</h1>
        <p className="text-base text-faded">You can reset your password here</p>
      </div>
      <ForgotPasswordForm />
      <p className="text-fade">
        Return to &nbsp;
        <Link className="text-primary-300 hover:underline" href="/sign-in">
          sign in.
        </Link>
      </p>
    </div>
  );
}
