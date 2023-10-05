import type { Meta, StoryObj } from "@storybook/react";
import { UserProfile as UserProfilePage } from "./user-profile";
import { generateFakeTimeByHours } from "../../utils/time.utils";

const user = {
  avatarURL: "",
  bio: "Focus and what makes you happy. relax at a moment, and play a games;",
  threads: [
    {
      id: 1,
      link: "#",
      title: "Front-end Development And Backend Developer",
      owner: {
        name: "Astronout",
        avatarURL: "",
        link: "#",
      },
      time: generateFakeTimeByHours(6),
      content:
        "The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools...",
      dislikes: 10,
      likes: 19,
      topic: {
        link: "#",
        name: "Front-end",
      },
      totalComments: 10,
      comments: [],
    },
    {
      id: 2,
      link: "#",
      title: "Front-end Development And Backend Developer",
      owner: {
        name: "Astronout",
        avatarURL: "",
        link: "#",
      },
      time: generateFakeTimeByHours(4),
      content:
        "The three main languages you need to know well are HTML, CSS, and JavaScript...",
      dislikes: 10,
      likes: 19,
      topic: {
        link: "#",
        name: "Front-end",
      },
      totalComments: 10,
      comments: [],
    },
  ],
  firstname: "Ebayyou ",
  lastname: "Anggoro",
  savedThreads: [
    {
      id: 1,
      link: "#",
      title: "Front-end Development And Backend Developer",
      owner: {
        name: "Astronout",
        avatarURL: "",
        link: "#",
      },
      time: generateFakeTimeByHours(3),
      content:
        "The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools...",
      dislikes: 10,
      likes: 19,
      topic: {
        link: "#",
        name: "Front-end",
      },
      totalComments: 10,
      comments: [],
    },
  ],
  username: "user-1jksdw1ad",
};
const meta = {
  title: "Pages/UserProfile",
  component: UserProfilePage,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof UserProfilePage>;

export default meta;

export const UserProfile: StoryObj<typeof meta> = {
  args: {
    ...user,
  },
};
