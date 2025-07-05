import { getUserIdOrThrow } from "@/lib/actions/task.action";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";




export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
      const userId = await getUserIdOrThrow();

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
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
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
