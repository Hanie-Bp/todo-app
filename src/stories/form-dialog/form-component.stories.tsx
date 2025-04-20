import { Meta, StoryObj } from "@storybook/react";
import FormComponent from "./form-component";

const meta = {
  title: "Components/FormComponent",
  component: FormComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FormComponent>;

export default meta;

type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {},
};

export const WithInitialData: Story = {
  args: {
    formData: {
      title: "Study React",
      description: "Go over forms and validation",
      date: "2025-04-10",
      directoryName: "work",
      important: true,
      completed: false,
    },
    directories: ["secondary","work", "personal", "main"]
  },
};
