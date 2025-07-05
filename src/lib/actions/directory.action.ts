"use server";
import { z } from "zod";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { Directory } from "@/types/types";
import { getUserIdOrThrow } from "./task.action";

const schema = z.object({
  directoryName: z.string().min(1, "Directory name is required").max(20),
  id: z.string().optional(),
});

export async function getAllDirectories(id: string) {
  try {
    const res = await fetch("http://localhost:3000/api/directories");
    const data = await res.json();
    const directories = data.filter(
      (directory: Directory) => directory.userId === id
    );
    return directories;
  } catch (error) {
    console.log(error);
  }
}

export async function handleDirectory(
  input: z.infer<typeof schema>,
  dialogType: "create" | "edit"
) {
    const userId = await getUserIdOrThrow();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const validated = schema.safeParse(input);
  if (!validated.success) {
    throw new Error("Invalid input");
  }

  const { directoryName, id } = validated.data;

  if (dialogType === "create") {
    await prisma.directory.create({
      data: {
        name: directoryName,
        userId,
      },
    });
  } else if (dialogType === "edit" && id) {
    // Update the directory name
    await prisma.directory.update({
      where: { id },
      data: {
        name: directoryName,
      },
    });

    // Also update the directoryName field on all associated tasks
    await prisma.task.updateMany({
      where: { directoryId: id },
      data: {
        directoryName: directoryName,
      },
    });
  }

  revalidatePath("/");
}
