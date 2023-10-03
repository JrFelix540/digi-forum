import Link from "next/link";
import { Avatar } from "../avatar/avatar";
import Image from "next/image";
import { Button } from "../button/button";
import { LeaderboardItem } from "./leaderboards-sidebar.utils";

interface LeaderboardsSidebarProps {
  leaderboardItems: Array<LeaderboardItem>;
}
export const LeaderboardsSidebar = ({
  leaderboardItems,
}: LeaderboardsSidebarProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-white">Top Leaderboards</h2>
      <div className="flex flex-col gap-2">
        {leaderboardItems.map((item) => (
          <Link
            href={`/profile/${item.id}`}
            className="flex items-center justify-between"
            key={item.id}
          >
            <div className="flex items-center gap-2">
              <Avatar value={item.username} size="sm" />
              <div className="flex flex-col gap-px">
                <p className="text-sm font-medium text-white">{`${item.firstname} ${item.lastname}`}</p>
                <p className="text-xs">{item.username}</p>
              </div>
            </div>
            <div className="h-11 w-11 rounded-md flex items-center justify-center bg-button-secondary">
              <p className="text-primary text-brand-primary">{item.points}</p>
            </div>
          </Link>
        ))}
      </div>
      <Button variant="tertiary">
        <Image
          src="/leaderboard.png"
          alt="leaderboard button"
          height={35}
          width={35}
        />
        <p className="text-white">See All Leaderboards</p>
      </Button>
    </div>
  );
};
