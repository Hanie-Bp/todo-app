// context/TaskProvider.tsx
"use client";
import { Task } from "@/types/types";
import { TaskContext } from "./TaskContext";

const TaskProvider = ({
  tasks,
  children,
}: {
  tasks: Task[];
  children: React.ReactNode;
}) => {
  return (
    <TaskContext.Provider value={{ tasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
