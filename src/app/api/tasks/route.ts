import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


// export const taskSchema = z.object({
//   title: z.string().min(2, "Title must be at least 2 characters"),
//   dueDate: z.string().min(10, "date must be at least 10 characters"),
//   description: z
//     .string()
//     .min(4, "Description must be at least 4 characters")
//     .optional(),
//   directoryId: z.string(),
//   important: z.boolean().optional(),
//   completed: z.boolean().optional(),
// });

export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}


