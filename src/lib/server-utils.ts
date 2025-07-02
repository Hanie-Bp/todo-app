
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { getAllTasks } from "./actions/task.action";
import { getAllDirectories } from "./actions/directory.action";
export const userSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export async function fetchDirectories() {
  const session = await userSession();
  return getAllDirectories(session?.user?.id!);
}

export async function fetchTasks() {
  const session = await userSession();
  return getAllTasks(session?.user?.id!);
}
