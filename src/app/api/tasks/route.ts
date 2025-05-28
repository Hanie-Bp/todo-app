import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const taskSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  dueDate: z.string().min(10, "date must be at least 10 characters"),
  description: z
    .string()
    .min(4, "Description must be at least 4 characters")
    .optional(),
  userId: z.string().min(1, "User ID is required"),
  directory: z.string().optional(),
  important: z.boolean().optional(),
  complete: z.boolean().optional(),
});

export async function GET(req: Request) {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const body = await req.json();
     const { title, description, dueDate, userId, directory, important } = taskSchema.parse(body);
  return NextResponse.json(task);
}
