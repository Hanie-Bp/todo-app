import { prisma } from "@/lib/prisma";
import { userSession } from "@/lib/utils";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  dueDate: z.string().min(10, "date must be at least 10 characters"),
  description: z
    .string()
    .min(4, "Description must be at least 4 characters")
    .optional(),
  // userId: z.string().min(1, "User ID is required"),
  // directoryName: z.string(),
  directoryId: z.string(),
  important: z.boolean().optional(),
  complete: z.boolean().optional(),
});

export async function GET(req: Request) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, dueDate, directoryId, important } =
      taskSchema.parse(body);
    const session = await userSession();
    const userId = session?.user?.id!;
    const directory = await prisma.directory.findUnique({
      where: {
        id: directoryId,
        userId,
      },
    });

    if (!directory) {
      return NextResponse.json(
        { message: "Directory not found" },
        { status: 404 }
      );
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        description: description || "",
        dueDate: new Date(dueDate),
        userId,
        directoryId,
        important,
        directoryName: directory.name,
      },
    });

    revalidateTag("tasks");
    return NextResponse.json(newTask);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
