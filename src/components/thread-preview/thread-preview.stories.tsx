import type { Meta, StoryObj } from "@storybook/react";
import { ThreadPreview as ThreadPreviewComponent } from "./thread-preview";
import { generateFakeTimeByHours } from "../../utils/time.utils";
const meta = {
  title: "Components/ThreadPreview",
  component: ThreadPreviewComponent,
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <div className="w-[32rem]">
      <ThreadPreviewComponent {...args} />
    </div>
  ),
} satisfies Meta<typeof ThreadPreviewComponent>;

export default meta;

export const ThreadPreview: StoryObj<typeof meta> = {
  args: {
    id: 3,
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
};
