import { Layout } from "../../layouts/layout";
import { LeaderboardItem } from "../leaderboard-item/leaderboard-item";
import { leaderboardItems } from "./leaderboards-overview.utils";

export const LeaderboardsOverview = () => {
  return (
    <Layout>
      <main className="p-10 flex flex-col gap-6">
        <section className="flex flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold text-3xl text-center">
              Top Leaderboards For
            </p>
            <p className="text-white font-semibold text-3xl text-center">
              24h Threads
            </p>
          </div>
          <p className="text-brown-neutral text-center text-lg">
            Leaderboard is used to see the top users with the highest score.
          </p>
        </section>
        <section className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-white">Users</p>
            <p className="text-xl font-semibold text-white">Point</p>
          </div>
          <div className="flex flex-col gap-4">
            {leaderboardItems.map((item) => (
              <LeaderboardItem {...item} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};