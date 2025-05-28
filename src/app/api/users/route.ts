// app/api/register/route.ts

import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";

//define the schema for input validation
const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function GET(req: Request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  // console.log('fddfgdfgdff');

  try {
    const body = await req.json();
    //  console.log("bodyyyyyyyyyyyyyyyyy",body);
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
    // const newUser = await prisma.user.create({
    //   data: {
    //     username,
    //     email,
    //     password: hashedPassword,
    //   },
    // });
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

    const { password: newUserPassword, ...rest } = newUserWithMain;
    return NextResponse.json(
      { user: rest, message: "User and 'main' directory created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
