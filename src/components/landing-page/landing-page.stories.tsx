import type { Meta, StoryObj } from "@storybook/react";
import { LandingPage as LandingPageComponent } from "./landing-page";

const meta = {
  title: "Pages/LandingPage",
  component: LandingPageComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LandingPageComponent>;

export default meta;

export const LandingPage: StoryObj = {};
