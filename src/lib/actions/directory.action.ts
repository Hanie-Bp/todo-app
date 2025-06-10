"use server";
import { z } from "zod";
import { prisma } from "../prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { revalidatePath } from "next/cache";

const schema = z.object({
  directoryName: z.string().min(1, "Directory name is required").max(20),
  id: z.string().optional(),
});

export async function getAllDirectories(id: string) {
  console.log('id',id);
  
  const directories = await prisma.directory.findMany({
    where: { userId: id },
    include: {
      tasks: true, // this line tells Prisma to fetch the related tasks
    },
  });
  return directories;
}

export async function handleDirectory(
  input: z.infer<typeof schema>,
  dialogType: "create" | "edit"
) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

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
    await prisma.directory.update({
      where: { id },
      data: {
        name: directoryName,
      },
    });
  }

  revalidatePath("/");
}
