import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "components/button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  render: (args) => <Button {...args}>Boom!</Button>,
} satisfies Meta<typeof Button>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    variant: "primary",
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: StoryObj<typeof meta> = {
  args: {
    variant: "tertiary",
  },
};
