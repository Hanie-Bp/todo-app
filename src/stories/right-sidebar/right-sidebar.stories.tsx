import { Meta, StoryObj } from "@storybook/react";
import RightSidebar from ".";

const meta = {
  title: "Right Sidebar",
  component: RightSidebar,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RightSidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
