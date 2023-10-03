import type { Meta, StoryObj } from "@storybook/react";
import { RightSidebar as RightBarComponent } from "./right-sidebar";
import { TrendingTopic } from "@/components/trending-sidebar/trending-sidebar.utils";
import { User } from "@/components/users-sidebar/users-sidebar.utils";

const trendingTopics: Array<TrendingTopic> = [
  {
    url: "#",
    time: "6h",
    name: "Front-end",
  },
  {
    url: "#",
    time: "6h",
    name: "Back-end",
  },
  {
    url: "#",
    time: "6h",
    name: "Mobile-dev",
  },
  {
    url: "#",
    time: "6h",
    name: "Data-analyst",
  },

  {
    url: "#",
    time: "6h",
    name: "Machine-learning",
  },
  {
    url: "#",
    time: "6h",
    name: "Blockchain-dev",
  },
];

const usersData: Array<User> = [
  {
    id: 1,
    username: "user-1",
    name: "Ebayyou Anggoro",
    avatarURL: "",
  },
  {
    id: 3,
    username: "user-1",
    name: "Ebayyou Anggoro",
    avatarURL: "",
  },
  {
    id: 4,
    username: "user-1",
    name: "Ebayyou Anggoro",
    avatarURL: "",
  },
  {
    id: 5,
    username: "user-1",
    name: "Ebayyou Anggoro",
    avatarURL: "",
  },
  {
    id: 6,
    username: "user-1",
    name: "Ebayyou Anggoro",
    avatarURL: "",
  },
  {
    id: 7,
    username: "user-1",
    name: "Ebayyou Anggoro",
    avatarURL: "",
  },
];

const meta = {
  title: "Layouts/RightSidebar",
  component: RightBarComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (args) => (
    <div className="w-96">
      <RightBarComponent />
    </div>
  ),
} satisfies Meta<typeof RightBarComponent>;

export default meta;

export const RightSidebar: StoryObj<typeof meta> = {
  args: {
    trendingTopics,
    users: usersData,
  },
};
