import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, password } = userSchema.parse(body);
    const exisitingUserByEmail = await prisma.user.findUnique({
      where: { email },
    });
    if (exisitingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUserWithMain = await prisma.$transaction(async (tx) => {
      const newUser = await tx.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });

      await tx.directory.create({
        data: {
          name: "main",
          userId: newUser.id,
        },
      });

      return newUser;
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...rest } = newUserWithMain;
    
    return NextResponse.json(
      { user: rest, message: "User and 'main' directory created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
