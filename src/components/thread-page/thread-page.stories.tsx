import type { Meta, StoryObj } from "@storybook/react";
import { ThreadPage as Thread } from "./thread-page";

const meta = {
  title: "Pages/ThreadPage",
  component: Thread,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Thread>;

export default meta;

export const ThreadPage: StoryObj<typeof meta> = {
  args: {
    id: 3,
    content:
      "What Skills Do You Need to Become a Front End Developer? The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools. HTML stands for HyperText Markup Language. HTML displays the content on the page like buttons, links, headings, paragraphs, and.",
    likes: 25,
    dislikes: 4,
    owner: {
      avatarURL: "test",
      link: "#",
      name: "Astronout",
    },
    time: "6h",
    title: "Front-end Development And Backend Developer",
    topic: {
      link: "#",
      name: "Front-end",
    },
    totalComments: 14,
    comments: [
      {
        id: 1,
        content: "Well this threads, is good",
        createdAt: "6h",
        dislikes: 12,
        likes: 33,
        owner: {
          id: 3,
          avatarURL: "#",
          name: "Ebayyou Anggoro",
        },
      },
      {
        id: 2,
        content: "Well this threads, is good",
        createdAt: "6h",
        dislikes: 12,
        likes: 33,
        owner: {
          id: 3,
          avatarURL: "#",
          name: "Ebayyou Anggoro",
        },
      },
    ],
  },
};
