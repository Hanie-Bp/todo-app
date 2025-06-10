// context/DirectoriesContext.tsx
"use client";
import { createContext, useContext } from "react";
import { Directory } from "@/types/types";

type DirectoriesContextType = {
  directories: Directory[];
};

export const DirectoriesContext = createContext<DirectoriesContextType | undefined>(undefined);

export const useDirectories = () => {
  const context = useContext(DirectoriesContext);
  if (!context) throw new Error("useDirectories must be used within DirectoriesProvider");
  return context;
};
