import { Meta, StoryObj } from "@storybook/react";
import TaskCard from ".";
import { Directory, Task } from "@/types/types";

const meta = {
  title: "cards/taskcard",
  component: TaskCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TaskCard>;

export default meta;

type Story = StoryObj<typeof meta>;



type TaskObj = {
  task: Task;
  directories: Directory[];
  viewMode: "grid" | "list";
};

const defaultDirectories: Directory[] = [
  { id: "1", name: "main", userId: "1", tasks: [] },
];

export const TasksObjs: TaskObj[] = [
  {
    task: {
      id: "1",
      title: "Finish Portfolio Website",
      directoryName: "Work",
      description: "Complete the homepage and contact form.",
      dueDate: "2022-12-20T00:00:00.000Z",
      directoryId: "1",
      createdAt: "2022-12-20T10:00:00.000Z",
      completed: false,
      important: true,
    },
    directories: defaultDirectories,
    viewMode: "grid",
  },
  {
    task: {
      id: "2",
      title: "Grocery Shopping",
      directoryName: "Personal",
      description: "Buy vegetables, milk, and bread.",
      dueDate: "2022-12-20T00:00:00.000Z",
      directoryId: "1",
      createdAt: "2022-12-20T10:00:00.000Z",
      completed: true,
      important: false,
    },
    directories: defaultDirectories,
    viewMode: "grid",
  },
  {
    task: {
      id: "3",
      title: "Prepare Presentation",
      directoryName: "Office",
      description: "Create slides for Monday's team meeting.",
      dueDate: "2022-12-20T00:00:00.000Z",
      directoryId: "1",
      createdAt: "2022-12-20T10:00:00.000Z",
      completed: false,
      important: true,
    },
    directories: defaultDirectories,
    viewMode: "grid",
  },
  {
    task: {
      id: "4",
      title: "Doctor Appointment",
      directoryName: "Health",
      description: "Annual check-up at 10:30 AM.",
      dueDate: "2022-12-20T00:00:00.000Z",
      directoryId: "1",
      createdAt: "2022-12-20T10:00:00.000Z",
      completed: false,
      important: false,
    },
    directories: defaultDirectories,
    viewMode: "grid",
  },
  {
    task: {
      id: "5",
      title: "Read Design Patterns",
      directoryName: "Learning",
      description: "Finish the 'Observer Pattern' chapter.",
      dueDate: "2022-12-20T00:00:00.000Z",
      directoryId: "1",
      createdAt: "2022-12-20T10:00:00.000Z",
      completed: true,
      important: true,
    },
    directories: defaultDirectories,
    viewMode: "grid",
  },
];


export const Taskcard: Story = {
  args: {
    task: {
      completed: true,
      important: false,
      title: "title 1",
      description: "description 1",
      directoryName: "main",
      dueDate: "20/12/2022",
      directoryId: "1",
      createdAt: "2022-12-20T10:00:00.000Z",
    },
    directories: defaultDirectories,
    viewMode: "grid",
  },
};

export const AllTaskCards: Story = {
  args: {
    task: {
      completed: true,
      important: false,
      title: "title 1",
      description: "description 1",
      directoryName: "main",
      dueDate: "20/12/2022",
      directoryId: "1",
      createdAt: "2022-12-20T10:00:00.000Z",
    },
    directories: defaultDirectories,
    viewMode: "grid",
  },
  render: () => (
    <section className="container grid grid-cols-1 gap-5 overflow-hidden  md:grid-cols-2 xl:grid-cols-3">
      {TasksObjs.map((task, i) => (
        <TaskCard key={i} {...task} />
      ))}
    </section>
  ),
};
