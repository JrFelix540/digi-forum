import type { Meta, StoryObj } from "@storybook/react";
import { LeftSidebar as LeftSidebarComponent } from "./left-sidebar";
import { MenuItem } from "./left-sidebar.utils";
import { LeaderboardItem } from "@/components/leaderboards-sidebar/leaderboards-sidebar.utils";

const menuItems: Array<MenuItem> = [
  {
    name: "Profile",
    link: "/profile",
    icon: "/profile-icon.png",
  },
  {
    name: "Your Threads",
    link: "/threads",
    icon: "/threads-icon.png",
  },
  {
    name: "Saved",
    link: "/saved",
    icon: "/saved-icon.png",
  },
];

const leaderboardItems: Array<LeaderboardItem> = [
  {
    id: 4,
    firstname: "Ebayyou",
    lastname: "An",
    username: "ebay@gmail.c",
    points: 100,
  },
  {
    id: 23,
    firstname: "Ebayyou",
    lastname: "An",
    username: "ebay@gmail.c",
    points: 100,
  },
  {
    id: 4,
    firstname: "Ebayyou",
    lastname: "An",
    username: "ebay@gmail.c",
    points: 100,
  },
];

const meta = {
  title: "Layouts/LeftSidebar",
  component: LeftSidebarComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <div className="w-96 ">
      <LeftSidebarComponent {...args} />
    </div>
  ),
} satisfies Meta<typeof LeftSidebarComponent>;

export default meta;

export const LeftSidebar: StoryObj<typeof meta> = {
  args: {
    leaderboardItems,
    menuItems,
  },
};
