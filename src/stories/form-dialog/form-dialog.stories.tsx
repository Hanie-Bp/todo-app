import { Meta, StoryObj } from "@storybook/react";
import TaskForm from ".";
import { Button } from "../button";

const meta = {
  title: "form/dialog",
  component: TaskForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TaskForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultForm: Story = {
  args: {
    children: <Button>Add new task</Button>,
  },
};
