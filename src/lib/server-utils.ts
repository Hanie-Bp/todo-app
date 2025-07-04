
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { getAllTasks, getUserIdOrThrow } from "./actions/task.action";
import { getAllDirectories } from "./actions/directory.action";
export const userSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export async function fetchDirectories() {
   const userId = await getUserIdOrThrow();
  return getAllDirectories(userId);
}

export async function fetchTasks() {
  const userId = await getUserIdOrThrow();
  return getAllTasks(userId);
}
