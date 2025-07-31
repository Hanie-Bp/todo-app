// components/contexts/SheetMenuContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type SheetMenuContextType = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const SheetMenuContext = createContext<SheetMenuContextType | undefined>(undefined);

export const SheetMenuProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <SheetMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetMenuContext.Provider>
  );
};

export const useSheetMenu = () => {
  const context = useContext(SheetMenuContext);
  if (!context) throw new Error("useSheetMenu must be used within SheetMenuProvider");
  return context;
};
