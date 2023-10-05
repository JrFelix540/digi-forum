import { LeaderboardsOverview } from "@/components/leaderboards-overview/leaderboards-overview";
import { leaderboardItems } from "@/components/leaderboards-overview/leaderboards-overview.utils";

export default function () {
  return <LeaderboardsOverview items={leaderboardItems} />;
}
