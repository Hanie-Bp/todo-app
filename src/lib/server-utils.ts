
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";
import { getAllTasks, getUserIdOrThrow } from "./actions/task.action";
import { getAllDirectories } from "./actions/directory.action";
import { CustomSession } from "@/types/types";
export const userSession = async () => {
  const session = await getServerSession(authOptions);
  return session as CustomSession;
};

export async function fetchDirectories() {
   const userId = await getUserIdOrThrow();
  return getAllDirectories(userId);
}

export async function fetchTasks() {
  const userId = await getUserIdOrThrow();
  return getAllTasks(userId);
}
