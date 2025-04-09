import { Meta, StoryObj } from "@storybook/react";
import LeftSidebar from ".";

const meta = {
  title: "Left sidebar",
  component: LeftSidebar,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof LeftSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLeftSidebar: Story = {};