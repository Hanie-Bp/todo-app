"use server";

import { cache } from "react";
import { prisma } from "../prisma";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import { userSession } from "../utils";
import { z } from "zod";
import { taskSchema } from "@/types/types";

export const getAllTasks = unstable_cache(
  async (userId: string) => {
    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: {
        dueDate: "asc",
      },
    });
    return tasks;
  },
  ["getAllTasks"], // cache key
  {
    tags: ["tasks"], // for revalidateTag("tasks")
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

    // revalidatePath("/"); // or revalidatePath("/your-target-path")
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

    // revalidatePath("/"); // or the specific page where the task is listed
    revalidateTag("tasks");
  } catch (error) {
    console.error("❌ Error in editTask:", error);
    throw error;
  }
}

