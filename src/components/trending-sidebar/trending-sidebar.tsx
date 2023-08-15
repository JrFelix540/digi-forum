import Image from "next/image";
import { trendingTopics } from "./trending-sidebar.utils";
import Link from "next/link";

export const TrendingSidebar = () => {
  return (
    <div className="flex flex-col gap-6 bg-card-bg rounded-lg p-4">
      <div className="flex justify-between">
        <p className="font-medium text-grey">Whats Happening?</p>
        <Image src="/medal.png" alt="users icon" height={24} width={24} />
      </div>
      <div className="flex flex-col gap-4">
        {trendingTopics.map((topic, key) => (
          <Link
            href={topic.url}
            key={`${topic.name}-${key}`}
            className="border-b-2 border-brand-secondary py-2 flex justify-between"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/hash-icon.png"
                alt="trending"
                height={18}
                width={18}
              />
              <p className="text-darkgrey text-xs">{topic.name}</p>
            </div>
            <p className="text-xs text-brown-neutral">{topic.time}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
