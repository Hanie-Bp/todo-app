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
  args: {
    directories: [],
  },
};

export const WithInitialData: Story = {
  args: {
    directories: [
      { id: "1", name: "Work", userId: "user1", tasks: [] },
      { id: "2", name: "Personal", userId: "user1", tasks: [] },
    ],
    formData: {
      id: "1",
      title: "Study React",
      description: "Go over forms and validation",
      dueDate: new Date("2025-04-10"),
      directoryName: "work",
      directoryId: "1",
      important: true,
      completed: false,
      createdAt: new Date(),
    },
  },
};
