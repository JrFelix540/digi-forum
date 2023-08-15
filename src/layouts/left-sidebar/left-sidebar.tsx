import Link from "next/link";
import { menuItems } from "./left-sidebar.utils";
import Image from "next/image";
import { LeaderboardsSidebar } from "@/components/leaderboards-sidebar/leaderboards-sidebar";
import { Footer } from "@/components/footer/footer";

export const LeftSidebar = () => {
  return (
    <aside className="border-r-2 border-brand-secondary min-h-full px-3 py-6 flex flex-col gap-4 relative">
      <div className="flex flex-col gap-6">
        {menuItems.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className="flex gap-4 items-center"
          >
            <div className="h-9 w-9 bg-grey rounded-md flex items-center justify-center">
              <Image src={item.icon} alt={item.name} height={28} width={28} />
            </div>
            <p className="text-lg text-white">{item.name}</p>
          </Link>
        ))}
      </div>
      <LeaderboardsSidebar />
      <Footer />
    </aside>
  );
};
