import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "./login";

const meta = {
  title: "Pages/LoginPage",
  component: Login,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Login>;

export default meta;

export const LoginPage: StoryObj = {};
