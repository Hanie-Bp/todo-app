import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta = {
  title: "Inputs/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {
  args: {
    className: "max-w-xs border-red-300",
  },
};
