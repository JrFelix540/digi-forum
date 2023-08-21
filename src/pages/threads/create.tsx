import { CreateThreadForm } from "@/components/forms/create-thread";
import { Layout } from "../../layouts/layout";

export default function () {
  return (
    <Layout title="Add Your Threads">
      <main className="p-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-3xl font-semibold text-center">
            Add Your Threads
          </h1>
          <div className="flex flex-col gap-px">
            <p className="text-white text-center">You can say anything</p>
            <p className="text-white text-center">#FreeSpeech</p>
          </div>
          <CreateThreadForm />
        </div>
      </main>
    </Layout>
  );
}
