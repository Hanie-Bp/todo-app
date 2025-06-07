"use server";

import { prisma } from "@/lib/prisma";
import { userSession } from "../utils";

// export async function getAllDirectories(id: string) {
//   const directories = await prisma.directory.findMany({
//     where: { userId: id },
//   });
//   return directories;
// }

// export const getUserByEmail = async () => {
//   const session = await userSession();
//   const email = session?.user?.email ?? undefined;

//   if (!email) {
//     throw new Error("User session or email is missing");
//   }

//   const user = await prisma.user.findUnique({
//     where: { email },
//   });

//   return user;
// };

// export const getAllTasks = async (id: string) => {
//   const tasks = await prisma.task.findMany({
//     where: { userId: id },
//   });
//   return tasks;
// };
