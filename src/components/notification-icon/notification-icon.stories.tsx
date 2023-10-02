import { NotificationIcon } from "./notification-icon";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/NotificationIcon",
  component: NotificationIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotificationIcon>;

export default meta;

export const Primary: StoryObj = {};
