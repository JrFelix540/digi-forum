import Link from "next/link";
import { RegisterForm } from "./register-form/register-form";
import { AboutSection } from "../components/about-section/about-section";
import Head from "next/head";
import { GoogleSignIn } from "@/components/google-signin/google-sign-in";

export const Register = () => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <main className="w-full h-screen">
        <div className="grid grid-cols-2 gap-4 h-full">
          <AboutSection />
          <div className="bg-transparent py-6 px-28 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-3xl text-white">Register</h1>
              <p className="text-base text-faded">
                You can register with the form below or quick signup with your
                Google account.
              </p>
              <GoogleSignIn>Signup With Google</GoogleSignIn>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-brand-secondary w-1/2 h-0.5"></div>
              <p>or</p>
              <div className="bg-brand-secondary w-1/2 h-0.5"></div>
            </div>
            <RegisterForm />
            <p className="text-fade">
              Have an account?{" "}
              <Link className="text-button-primary" href="/auth/login">
                Login!
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
