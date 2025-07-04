import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import Header from ".";

type StoryProps = ComponentProps<typeof Header>;

const meta: Meta<StoryProps> = {
  title: "header",
  component: Header,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultHeader: Story = {};
