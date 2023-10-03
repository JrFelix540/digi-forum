import type { Meta, StoryObj } from "@storybook/react";
import { GoogleSignIn } from "./google-sign-in";
const meta = {
  title: "Components/GoogleSignIn",
  component: GoogleSignIn,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: (args) => <GoogleSignIn {...args}>Sign in With Google</GoogleSignIn>,
} satisfies Meta<typeof GoogleSignIn>;

export default meta;

export const GoogleSignInButton: StoryObj<typeof GoogleSignIn> = {};
