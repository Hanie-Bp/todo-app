import { getUserIdOrThrow } from "@/lib/actions/task.action";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Force this route to be dynamic to prevent static generation during build
export const dynamic = 'force-dynamic';

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { directoryName, id } = body;
      const userId = await getUserIdOrThrow();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const newDirectory = await prisma.directory.update({
      where: {
        id,
      },
      data: {
        name: directoryName,
        userId,
      },
    });

    await prisma.task.updateMany({
      where: { directoryId: id },
      data: {
        directoryName: directoryName,
      },
    });
    return NextResponse.json(newDirectory);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req:Request,{ params }: { params: { id: string } }) {
  try {
      const userId = await getUserIdOrThrow();

    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const directory = await prisma.directory.findUnique({
      where: {
        id: params.id,
        userId,
      },
    });

    if (!directory) {
      return NextResponse.json(
        { message: "Directory not found" },
        { status: 404 }
      );
    }

    await prisma.directory.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json(
      { message: "Directory deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
