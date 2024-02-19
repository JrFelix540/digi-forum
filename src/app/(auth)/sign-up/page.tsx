import Link from "next/link";
import { SignUpForm } from "./sign-up-form";

export default function SignUpPage() {
  return (
    <div className="bg-transparent py-6 px-28 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-white">Register</h1>
        <p className="text-base text-faded">
          You can register with the form below.
        </p>
      </div>
      <SignUpForm />
      <p className="text-fade">
        Have an account?{" "}
        <Link className="text-primary-300" href="/sign-in">
          Login!
        </Link>
      </p>
    </div>
  );
}
