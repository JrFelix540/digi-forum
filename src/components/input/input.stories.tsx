import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    name: "name",
    value: "",
  },
};

export const OutlinedInput: StoryObj<typeof meta> = {
  args: {
    name: "outlined",
    value: "",
    variant: "outlined",
  },
};

export const InputWithLabel: StoryObj<typeof meta> = {
  args: {
    name: "input",
    value: "",
    label: "Input Label",
  },
};

export const InputWithLabelLink: StoryObj<typeof meta> = {
  args: {
    name: "password",
    value: "",
    label: "Password",
    labelLink: {
      name: "Forgot password?",
      url: "#",
    },
  },
};

export const InputWithPlaceholder: StoryObj<typeof meta> = {
  args: {
    name: "Password",
    value: "",
    label: "Password",
    placeholder: "Fill in Password",
  },
};
