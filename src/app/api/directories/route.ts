import { getUserIdOrThrow } from "@/lib/actions/task.action";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { z } from "zod";

const directorySchema = z.object({
  directoryName: z.string().min(1, "Directory name is required").max(20),
});

export async function GET() {
  try {
    const directories = await prisma.directory.findMany({
      include: {
        tasks: true, 
      },
    });

    return NextResponse.json(directories);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch directories" },
      { status: 500 }
    );
  }
}
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { directoryName } = directorySchema.parse(body);
      const userId = await getUserIdOrThrow();

  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

    const newDirectory = await prisma.directory.create({
      data: {
        name: directoryName,
        userId
      },
    });
    return NextResponse.json(newDirectory);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
