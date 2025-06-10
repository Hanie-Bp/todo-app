"use server";

import { prisma } from "../prisma";
import { userSession } from "../utils";

export const getUserByEmail = async () => {
  const session = await userSession();
  const email = session?.user?.email ?? undefined;

  if (!email) {
    throw new Error("User session or email is missing");
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user;
};