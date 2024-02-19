import Link from "next/link";
import { SignInForm } from "./sign-in-form";

export default function SignInPage() {
  return (
    <div className="bg-transparent py-6 px-28 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-white">Login</h1>
        <p className="text-base text-faded">
          You can login with your registered account.
        </p>
      </div>
      <SignInForm />
      <p className="text-fade">
        Don't have an account?{" "}
        <Link className="text-primary-300" href="/sign-up">
          Create One!
        </Link>
      </p>
    </div>
  );
}
