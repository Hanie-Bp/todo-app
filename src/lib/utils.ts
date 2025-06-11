import { clsx, type ClassValue } from "clsx";
import { getServerSession } from "next-auth";
import { twMerge } from "tailwind-merge";
import { authOptions } from "./auth";
// import { getAllDirectories } from "./actions/actions";
import {  deleteAllData, getAllTasks } from "./actions/task.action";
import { getAllDirectories } from "./actions/directory.action";
import { Task } from "@/types/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const userSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
};

export async function fetchDirectories() {
  // console.log('hey');
  const session = await userSession();
  // console.log('hey',session);
  return getAllDirectories(session?.user?.id!);
}

export async function fetchTasks() {
  const session = await userSession();
  return getAllTasks(session?.user?.id!);
}

// export async function deleteTasks(){
//   const session = await userSession();
//   return deleteAllData(session?.user?.id!);
// }
