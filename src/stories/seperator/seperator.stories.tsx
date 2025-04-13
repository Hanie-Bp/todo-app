import { Meta, StoryObj } from "@storybook/react";
import { Separator } from ".";

const meta = {
  title: "separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    render: () => (
      <div className="h-32 flex items-center">
        <span>Left</span>
        <Separator orientation="vertical" className="mx-4 h-full border border-gray-400" />
        <span>Right</span>
      </div>
    ),
  };
  
  export const VerticalDashed: Story = {
    render: () => (
      <div className="h-32 flex items-center">
        <span>One</span>
        <Separator orientation="vertical" className="mx-4 h-full border border-dashed border-gray-400" />
        <span>Two</span>
      </div>
    ),
  };

  export const Horizontal: Story = {
    render: () => (
      <div className="w-full flex flex-col items-center space-y-4">
        <span>Above</span>
        <Separator className="mx-4 h-full border border-dashed border-gray-400" />
        <span>Below</span>
      </div>
    ),
  };

  export const HorizontalDashed: Story = {
    render: () => (
      <div className="w-full flex flex-col items-center space-y-4">
        <span>Above</span>
        <Separator className="w-full  border border-dashed border-gray-400" />
        <span>Below</span>
      </div>
    ),
  };