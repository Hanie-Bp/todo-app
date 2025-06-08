// context/TaskContext.tsx
"use client";
import { createContext, useContext } from "react";
import { Task } from "@/types/types";

type TaskContextType = {
  tasks: Task[];
};

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within TaskProvider");
  return context;
};