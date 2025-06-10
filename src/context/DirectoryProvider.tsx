// context/DirectoriesProvider.tsx
"use client";
import { Directory } from "@/types/types";
import { DirectoriesContext } from "./DirectoryContext";


const DirectoriesProvider = ({
  directories,
  children,
}: {
  directories: Directory[];
  children: React.ReactNode;
}) => {
  return (
    <DirectoriesContext.Provider value={{ directories }}>
      {children}
    </DirectoriesContext.Provider>
  );
};

export default DirectoriesProvider;
