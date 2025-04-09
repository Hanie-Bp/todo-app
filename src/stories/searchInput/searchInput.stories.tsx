import type { Meta, StoryObj } from "@storybook/react";
import SearchInput from ".";

const meta = {
  title: "searchInput",
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {};
