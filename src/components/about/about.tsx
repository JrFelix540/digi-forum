import Image from "next/image";
import { Layout } from "../../layouts/layout";

export const About = () => {
  return (
    <Layout>
      <main className="p-10 flex flex-col gap-6">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-semibold text-3xl text-center">
              About
            </h1>
            <p className="text-white text-center">
              DigiForum is a discussion platform with anyone, anywhere, and you
              can say anything #FreeSpeech
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/about.png"
              alt="about illustration"
              height={543}
              width={428}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
};
