"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/stories/button";

export function ModeToggle() {
  const [isMounted, setIsMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="flex justify-between items-center mt-3">
      <p className="text-sm">{theme === "dark" ? "Lightmode" : "Darkmode"}</p>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="hover:bg-inherit hover:border hover:border-slate-600"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </section>
  );
}
