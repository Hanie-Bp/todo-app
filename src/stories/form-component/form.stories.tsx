import { Meta, StoryObj } from "@storybook/react";
import TaskForm from ".";

const meta = {
  title: "form",
  component: TaskForm,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TaskForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultForm: Story = {};
