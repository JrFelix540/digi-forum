import type { Meta, StoryObj } from "@storybook/react";
import { Avatar as AvatarComponent } from "./avatar";

const meta = {
  title: "Components/Avatar",
  component: AvatarComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AvatarComponent>;

export default meta;

export const Small: StoryObj<typeof AvatarComponent> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<typeof AvatarComponent> = {
  args: {
    size: "lg",
  },
};

export const SmallSquare: StoryObj<typeof AvatarComponent> = {
  args: {
    size: "sm",
    square: true,
  },
};

export const LargeSquare: StoryObj<typeof AvatarComponent> = {
  args: {
    size: "lg",
    square: true,
  },
};
