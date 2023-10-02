import { Meta, StoryObj } from "@storybook/react";
import { Search } from "./search";

const meta = {
  title: "components/search",
  component: Search,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Search>;

export default meta;

export const Primary: StoryObj = {};
