"use server";

import { cache } from "react";
import { prisma } from "../prisma";

export const getAllTasks = cache(async (userId: string) => {
  const tasks = await prisma.task.findMany({
    where: { userId },
  });
  return tasks;
});