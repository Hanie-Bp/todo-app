import { fn } from "@storybook/test";


import { Button } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Buttons/button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "md",
    children: "button",
  },
};
export const PrimaryOutline: Story = {
  args: {
    variant: "primaryOutline",
    size: "md",
    children: "button",
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: "secondaryOutline",
    size: "md",
    children: "button",
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    size: "md",
    children: "button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "md",
    children: "button",
  },
};

