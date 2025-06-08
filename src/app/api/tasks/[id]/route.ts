import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { userSession } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";

const taskSchema = z.object({
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
// export async function PATCH(
//   req: Request,
//   { params }: { params: { id: string } }
// ) {
//   try {
//     const body = await req.json();
//     console.log(body);

//     const { title, description, dueDate, directoryId, important } =
//       taskSchema.parse(body);
//     const session = await userSession();
//     const userId = session?.user?.id!;
//     const directory = await prisma.directory.findUnique({
//       where: {
//         id: directoryId,
//         userId,
//       },
//     });

//     if (!directory) {
//       return NextResponse.json(
//         { message: "Directory not found" },
//         { status: 404 }
//       );
//     }

//     const newTask = await prisma.task.update({
//       where: {
//         id: params.id,
//       },
//       data: {
//         title,
//         description: description || "",
//         dueDate: new Date(dueDate),
//         userId,
//         directoryId,
//         important,
//         directoryName: directory.name,
//       },
//     });

//     return NextResponse.json(newTask);
//   } catch (error) {
//     // console.error("❌ Error updating a task:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const task = await prisma.task.findUnique({
      where: {
        id: params.id,
        userId,
      },
    });

    if (!task) {
      return NextResponse.json(
        { message: "Task not found" },
        { status: 404 }
      );
    }

    await prisma.task.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(
      { message: "Task deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
