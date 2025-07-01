"use server";

import { prisma } from "../prisma";
import { revalidateTag, unstable_cache } from "next/cache";
import { userSession } from "../utils";
import { z } from "zod";
import { taskSchema } from "@/types/types";

export const getAllTasks = unstable_cache(
  async (userId: string) => {
    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: {
        createdAt: "asc",
      },
    });
    return tasks;
  },
  ["getAllTasks"],
  {
    tags: ["tasks"],
  }
);

export async function createTask(formData: z.infer<typeof taskSchema>) {
  try {
    const session = await userSession();
    const userId = session?.user?.id!;
    const { title, description, dueDate, directoryId, important, completed } =
      formData;

    const directory = await prisma.directory.findUnique({
      where: { id: directoryId, userId },
    });

    if (!directory) throw new Error("Directory not found");

    await prisma.task.create({
      data: {
        title,
        description: description || "",
        dueDate: new Date(dueDate),
        userId,
        directoryId,
        important,
        completed,
        directoryName: directory.name,
      },
    });

    revalidateTag("tasks");
  } catch (error) {
    console.error("❌ Error in createTask:", error);
    throw error;
  }
}

export async function editTask(
  id: string,
  formData: z.infer<typeof taskSchema>
) {
  try {
    const session = await userSession();
    const userId = session?.user?.id!;
    const { title, description, dueDate, directoryId, important, completed } =
      formData;

    const directory = await prisma.directory.findUnique({
      where: { id: directoryId, userId },
    });

    if (!directory) throw new Error("Directory not found");

    await prisma.task.update({
      where: {
        id,
        userId,
      },
      data: {
        title,
        description: description || "",
        dueDate: new Date(dueDate),
        directoryId,
        important,
        completed: completed,
        directoryName: directory.name,
      },
    });

    revalidateTag("tasks");
  } catch (error) {
    console.error("❌ Error in editTask:", error);
    throw error;
  }
}

export const deleteAllData= async () => {
  try {
    const session = await userSession();
    const userId = session?.user?.id!;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new Error("User not found");
    await prisma.task.deleteMany({
      where: { userId },
    });
    await prisma.directory.deleteMany({
      where: {
        userId,
        NOT: {
          name: "main",
        },
      },
    });
    revalidateTag("tasks");
  } catch (error) {
    console.error("❌ Error in deleteAlltasks:", error);
    throw error;
  }
};

export const deleteCompletedTasks = async () => {
  try {
    const session = await userSession();
    const userId = session?.user?.id!;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new Error("User not found");
    await prisma.task.deleteMany({
      where: { userId, completed: true },
    });

    revalidateTag("tasks");
  } catch (error) {
    console.error("❌ Error in deleteCompletedTasks:", error);
    throw error;
  }
};
