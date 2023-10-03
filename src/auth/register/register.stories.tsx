import type { Meta, StoryObj } from "@storybook/react";
import { Register } from "./register";

const meta = {
  title: "Pages/RegisterPage",
  component: Register,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Register>;

export default meta;

export const RegisterPage: StoryObj<typeof Register> = {};
