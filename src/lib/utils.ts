import { clsx, type ClassValue } from "clsx"
import { getServerSession } from "next-auth";
import { twMerge } from "tailwind-merge"
import { authOptions } from "./auth";
import { getAllDirectories, getAllTasks } from "./actions";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const userSession = async()=> {
    const session = await getServerSession(authOptions);
    return session;
}

export async function fetchDirectories() {
  const session = await userSession();
  return getAllDirectories(session?.user?.id!);
}

export async function fetchTasks() {
  const session = await userSession();
  return getAllTasks(session?.user?.id!);
}