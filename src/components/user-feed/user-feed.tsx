import { useState } from "react";
import { TabItem } from "../tab-item/tab-item";
import { TabContent } from "../tab-content/tab-content";
import { ThreadPreview } from "../thread-preview/thread-preview";
import { Thread } from "../../threads/threads.utils";

interface UserFeedProps {
  savedThreads: Array<Thread>;
  threads: Array<Thread>;
}
export const UserFeed = ({ threads, savedThreads }: UserFeedProps) => {
  const [activeTab, setActiveTab] = useState<string>("tab-1");

  return (
    <section>
      <ul
        aria-labelledby="feed"
        className="flex gap-4 border-main-400 border-b-4"
      >
        <TabItem
          id="tab-1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title="Threads"
        />
        <TabItem
          id="tab-2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          title="Saved"
        />
      </ul>
      <div className="py-6 ">
        <TabContent id="tab-1" activeTab={activeTab}>
          <div className="flex flex-col gap-4">
            {threads.map((thread) => (
              <ThreadPreview key={thread.id} {...thread} />
            ))}
          </div>
        </TabContent>
        <TabContent id="tab-2" activeTab={activeTab}>
          <div className="flex flex-col gap-4">
            {savedThreads.map((thread) => (
              <ThreadPreview key={thread.id} {...thread} />
            ))}
          </div>
        </TabContent>
      </div>
    </section>
  );
};
