import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta = {
  title: "layouts/header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
