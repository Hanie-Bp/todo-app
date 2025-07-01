import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import path from "path";
import fs from "fs/promises";
import { existsSync } from "fs";
import { v4 as uuid } from "uuid";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

const uploadDir = path.join(process.cwd(), "public", "uploads");

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("avatar") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const fileExtension = path.extname(file.name);
  const filename = `${uuid()}${fileExtension}`;
  const filepath = path.join(uploadDir, filename);

  // Find user and old profile pic path
  const user = await prisma.user.findUnique({ where: { id: userId } });
  const oldProfilePicPath = user?.profilePic ? path.join(process.cwd(), "public", user.profilePic) : null;

  // Save new file
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(filepath, buffer);

  const url = `/uploads/${filename}`;

  // Update DB with new profilePic url
  await prisma.user.update({
    where: { id: userId },
    data: { profilePic: url },
  });

  // Delete old profile pic file if exists and different from new one
  if (oldProfilePicPath && oldProfilePicPath !== filepath) {
    try {
      if (existsSync(oldProfilePicPath)) {
        await fs.unlink(oldProfilePicPath);
      }
    } catch (err) {
      console.error("Failed to delete old avatar:", err);
    }
  }

  return NextResponse.json({ url });
}

