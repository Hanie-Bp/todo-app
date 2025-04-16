import { Meta, StoryObj } from "@storybook/react";
import TaskCard from ".";

const meta = {
  title: "cards/taskcard",
  component: TaskCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TaskCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const tasks = [
  {
    title: "Finish Portfolio Website",
    directoryName: "Work",
    description: "Complete the homepage and contact form.",
    date: "2025-04-11",
    completed: false,
    important: true,
  },
  {
    title: "Grocery Shopping",
    directoryName: "Personal",
    description: "Buy vegetables, milk, and bread.",
    date: "2025-04-10",
    completed: true,
    important: false,
  },
  {
    title: "Prepare Presentation",
    directoryName: "Office",
    description: "Create slides for Monday's team meeting.",
    date: "2025-04-12",
    completed: false,
    important: true,
  },
  {
    title: "Doctor Appointment",
    directoryName: "Health",
    description: "Annual check-up at 10:30 AM.",
    date: "2025-04-13",
    completed: false,
    important: false,
  },
  {
    title: "Read Design Patterns",
    directoryName: "Learning",
    description: "Finish the 'Observer Pattern' chapter.",
    date: "2025-04-14",
    completed: true,
    important: true,
  },
];

export const Taskcard: Story = {
  args: {
    completed: true,
    important: false,
    title: "title 1",
    description: "description 1",
    directoryName: "main",
    date: "20/12/2022",
  },
};

export const AllTaskCards: Story = {
  args: {
    title: "",
    directoryName: "",
    description: "",
    date: "",
    completed: false,
    important: false,
  },
  render: () => (
    <section className="container grid grid-cols-1 gap-5 overflow-hidden  md:grid-cols-2 xl:grid-cols-3">
      {tasks.map((task, i) => (
        <TaskCard key={i} {...task} />
      ))}
    </section>
  ),
};
