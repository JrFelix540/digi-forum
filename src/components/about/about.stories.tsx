import type { StoryObj, Meta } from "@storybook/react";
import { About } from "./about";

const meta = {
  title: "Pages/AboutPage",
  component: About,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof About>;

export default meta;

export const AboutPage: StoryObj<typeof meta> = {};
