"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function deleteDirectory(id: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) throw new Error("Unauthorized");

  await prisma.directory.delete({
    where: { id },
  });

  // Update this path based on where your directories are displayed
  revalidatePath("/");
}

export async function deleteTask(id: string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) throw new Error("Unauthorized");

  await prisma.task.delete({
    where: { id },
  });

  // Update this path if tasks are on a different route
  revalidatePath("/");
}
