import { Header } from "@/components/header/header";
import { Layout } from "../layouts/layout";
import Image from "next/image";
import { SecondaryButton } from "@/components/secondary-button/secondary-button";

export const Landing = () => {
  return (
    <>
      <Layout>
        <main className="p-10">
          <div className="flex flex-col gap-4 max-w-xs justify-center mx-auto">
            <p className="text-center font-semibold text-2xl">DigiForum</p>
            <p className="text-center ">
              Welcome to Discussion with anyone, You can say anything
              #FreeSpeech.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/landing.png"
              height={554}
              width={428}
              alt="landin page image"
            />
          </div>
          <div className="flex justify-center">
            <SecondaryButton>Go to #Threads</SecondaryButton>
          </div>
        </main>
      </Layout>
    </>
  );
};
