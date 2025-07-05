import { Meta, StoryObj } from "@storybook/react";
import TaskManagementTollbar from ".";

const meta = {
  title: "task management toolbar",
  component: TaskManagementTollbar,
} satisfies Meta<typeof TaskManagementTollbar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const TaskManagememtToolbar: Story = {
  args: {
    directories: [],
  },
};
