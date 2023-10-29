import { GoogleSignIn } from "@/components/google-signin/google-sign-in";
import Head from "next/head";
import { LoginForm } from "./login-form/login-form";
import Link from "next/link";
import { AboutSection } from "../components/about-section/about-section";

export const Login = () => {
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
              <h1 className="font-bold text-3xl text-white">Login</h1>
              <p className="text-base text-faded">
                You can login with your registered account or quick login with
                your Google account.
              </p>
              <GoogleSignIn>Login With Google</GoogleSignIn>
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-main-400 w-1/2 h-0.5"></div>
              <p>or</p>
              <div className="bg-main-400 w-1/2 h-0.5"></div>
            </div>
            <LoginForm />
            <p className="text-fade">
              Don't have an account?{" "}
              <Link className="text-primary-300" href="/auth/register">
                Create One!
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
