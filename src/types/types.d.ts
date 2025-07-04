import { Session } from "next-auth";

export type Directory = {
  id: string;
  name: string;
  userId: string;
  tasks: Task[];
};

export type Task = {
  id?: string;
  title: string;
  description: string | null;
  dueDate: string | Date;
  completed?: boolean;
  important?: boolean;
  directoryId: string | null;
  directoryName?: string | null;
  createdAt: string | Date;
};

export const taskSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  dueDate: z.string().min(10, "date must be at least 10 characters"),
  description: z.string().optional(),
  // userId: z.string().min(1, "User ID is required"),
  // directoryName: z.string(),
  directoryId: z.string(),
  important: z.boolean().optional(),
  completed: z.boolean().optional(),
});

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  profilePic: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CustomSession = Session & {
  user: {
    id: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
    username: string;
  };
};
