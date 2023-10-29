import Link from "next/link";
import { MenuItem } from "./left-sidebar.utils";
import Image from "next/image";
import { LeaderboardItem } from "@/components/leaderboards-sidebar/leaderboards-sidebar.utils";
import { LeaderboardsSidebar } from "@/components/leaderboards-sidebar/leaderboards-sidebar";
import { Footer } from "@/components/footer/footer";

interface LeftSidebarProps {
  leaderboardItems: Array<LeaderboardItem>;
  menuItems: Array<MenuItem>;
}
export const LeftSidebar = ({
  leaderboardItems,
  menuItems,
}: LeftSidebarProps) => {
  return (
    <aside className="border-r-2 border-main-400 min-h-full px-3 py-6 flex flex-col gap-6 relative">
      <div className="flex flex-col gap-6">
        {menuItems.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className="flex gap-4 items-center"
          >
            <div className="h-9 w-9 bg-gray-300 rounded-md flex items-center justify-center">
              <Image src={item.icon} alt={item.name} height={28} width={28} />
            </div>
            <p className="text-lg text-white">{item.name}</p>
          </Link>
        ))}
      </div>
      <LeaderboardsSidebar leaderboardItems={leaderboardItems} />
      <Footer />
    </aside>
  );
};
