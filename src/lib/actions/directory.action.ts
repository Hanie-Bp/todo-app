"use server";
import { prisma } from "../prisma";

export async function getAllDirectories(id: string) {
  const directories = await prisma.directory.findMany({
    where: { userId: id },
  });
  return directories;
}
