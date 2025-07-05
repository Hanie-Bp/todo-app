"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getUserIdOrThrow } from "./task.action";

export async function deleteDirectory(id: string) {
    await getUserIdOrThrow();

  await prisma.directory.delete({
    where: { id },
  });

  // Update this path based on where your directories are displayed
  revalidatePath("/");
}

export async function deleteTask(id: string) {
    await getUserIdOrThrow();

  await prisma.task.delete({
    where: { id },
  });

  // Update this path if tasks are on a different route
  revalidatePath("/");
}
