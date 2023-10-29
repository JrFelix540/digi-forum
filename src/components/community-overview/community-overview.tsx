import Image from "next/image";
import { Layout } from "../../layouts/layout";

export const CommunityOverview = () => {
  return (
    <Layout>
      <main className="py-10 px-16 flex flex-col gap-12">
        <section className="flex flex-col gap-2">
          <h1 className="text-center text-3xl text-white font-semibold">
            Top community that you can join & discuss
          </h1>
          <p className="text-neutral-brown text-lg text-center">
            You can join the community you want to discuss with anyone,
            anywhere, and anytime.
          </p>
        </section>
        <section className="relative">
          <div className="border-2 border-primary-100 flex flex-col gap-6 py-12 px-5 rounded-xl">
            <div className="flex gap-4 items-center justify-center">
              <Image src="/screen.png" alt="community" height={32} width={32} />
              <h1 className="text-light-100 font-medium text-2xl">
                Nothing Community
              </h1>
            </div>
            <p className="text-white text-center text-xs font-medium">
              sorry #PeopleSpeech, community feature not yet available. but
              don't worry, this feature is being worked on by professional
              developers. see you again...
            </p>
          </div>
          <div className="h-full w-full border-white border-2 rounded-lg absolute top-2 left-2"></div>
        </section>
      </main>
    </Layout>
  );
};
