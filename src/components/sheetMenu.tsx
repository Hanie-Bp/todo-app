"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/stories/ui/sheet";
import { Menu } from "lucide-react";
import LeftSidebar from "@/stories/left-sidebar";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function SheetMenu() {
  const [open, setOpen] = useState(false);

  // Only allow opening manually via icon, and always start closed
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth <= 1024) {
        setOpen(false);
      }
    };

    closeOnResize();
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 [&>button:first-of-type]:hidden border border-green-500 p-0">
        <VisuallyHidden>
          <DialogTitle>Sidebar Menu</DialogTitle>
          <DialogDescription></DialogDescription>
        </VisuallyHidden>
        <LeftSidebar tabletOrMobile={true} />
      </SheetContent>
    </Sheet>
  );
}
