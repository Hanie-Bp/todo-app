import { clsx, type ClassValue } from "clsx"
import { getServerSession } from "next-auth";
import { twMerge } from "tailwind-merge"
import { authOptions } from "./auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const userSession = async()=> {
    const session = await getServerSession(authOptions);
    return session;
}