import type { Meta, StoryObj } from "@storybook/react";
import { CommunityOverview } from "./community-overview";

const meta = {
  title: "Pages/CommunityPage",
  component: CommunityOverview,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CommunityOverview>;

export default meta;

export const CommunityPage: StoryObj<typeof meta> = {};
