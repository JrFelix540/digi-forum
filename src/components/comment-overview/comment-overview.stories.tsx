import type { Meta, StoryObj } from "@storybook/react";
import { CommentOverview as CommentOverviewComponent } from "./comment-overview";

const meta = {
  title: "Components/CommentOverview",
  component: CommentOverviewComponent,
  render: (args) => (
    <div className="w-96">
      <CommentOverviewComponent {...args} />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CommentOverviewComponent>;

export default meta;

export const CommentOverview: StoryObj<typeof meta> = {
  args: {
    id: 1,
    content: "Well this threads, is good",
    createdAt: "6h",
    dislikes: 12,
    likes: 33,
    owner: {
      id: 3,
      avatarURL: "#",
      name: "Ebayyou Anggoro",
    },
  },
};
