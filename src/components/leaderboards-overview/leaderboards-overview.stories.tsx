import type { Meta, StoryObj } from "@storybook/react";
import { LeaderboardsOverview } from "./leaderboards-overview";
import { Leaderboard } from "./leaderboards-overview.utils";

const items: Array<Leaderboard> = [
  {
    id: 12,
    firstname: "Ebayyou",
    lastname: "Anggoro",
    points: 160,
    username: "ebayyouanggoro.e@gmail.com",
  },
  {
    id: 43,
    firstname: "Ebayyou",
    lastname: "Anggoro",
    points: 140,
    username: "ebayyouanggoro.e@gmail.com",
  },
  {
    id: 3,
    firstname: "Ebayyou",
    lastname: "Anggoro",
    points: 100,
    username: "ebayyouanggoro.e@gmail.com",
  },
  {
    id: 4,
    firstname: "Ebayyou",
    lastname: "Anggoro",
    points: 80,
    username: "ebayyouanggoro.e@gmail.com",
  },
  {
    id: 6,
    firstname: "Ebayyou",
    lastname: "Anggoro",
    points: 60,
    username: "ebayyouanggoro.e@gmail.com",
  },
  {
    id: 244,
    firstname: "Ebayyou",
    lastname: "Anggoro",
    points: 160,
    username: "ebayyouanggoro.e@gmail.com",
  },
];

const meta = {
  title: "Pages/LeaderboardsPage",
  component: LeaderboardsOverview,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LeaderboardsOverview>;

export default meta;

export const LeaderboardsPage: StoryObj<typeof meta> = {
  args: {
    items,
  },
};
