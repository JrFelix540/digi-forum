import { ThreadPreview } from "@/components/thread-preview/thread-preview";
import { Layout } from "../layouts/layout";
import { threads } from "./threads.utils";

export const Threads = () => {
  return (
    <Layout title="Digiforum | Threads">
      <main className="py-5 px-10">
        <div className="flex flex-col gap-4 w-full">
          {threads.map((thread) => (
            <ThreadPreview key={thread.id} {...thread} />
          ))}
        </div>
      </main>
    </Layout>
  );
};
