import type { Meta, StoryObj } from "@storybook/react";
import { Footer as FooterComponent } from "./footer";

const meta = {
  title: "layouts/footer",
  component: FooterComponent,
  tags: ["autodocs"],
} satisfies Meta<typeof FooterComponent>;

export default meta;

export const Footer: StoryObj<typeof meta> = {};
