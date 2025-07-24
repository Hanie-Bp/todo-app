"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LeftSidebar from "@/stories/left-sidebar";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import TaskForm from "@/stories/form-dialog";
import DialogComponent from "@/stories/dialog";

export default function SheetMenu() {
  const [open, setOpen] = useState(false);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [isDirectoryFormOpen, setIsDirectoryFormOpen] = useState(false);

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

  // Prevent Sheet from closing when TaskForm is opened
  useEffect(() => {
    if (isTaskFormOpen) {
      setOpen(true);
    }
  }, [isTaskFormOpen]);

  useEffect(() => {
    if (isDirectoryFormOpen) {
      setOpen(true);
    }
  }, [isDirectoryFormOpen]);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-72 [&>button:first-of-type]:hidden p-0"
        >
          <VisuallyHidden>
            <DialogTitle>Sidebar Menu</DialogTitle>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
          <LeftSidebar
            tabletOrMobile={true}
            onAddTaskClick={() => setIsTaskFormOpen(true)}
            onAddDirectoryClick={() => setIsDirectoryFormOpen(true)}
          />
        </SheetContent>
      </Sheet>
      <TaskForm
        formType="add"
        isOpen={isTaskFormOpen}
        setIsOpen={setIsTaskFormOpen}
      >
        {/* The trigger is handled by the sidebar, so no button here */}
      </TaskForm>
      <DialogComponent
        dialogtype="create"
        title="Create new directory"
        custumClass="flex"
        isOpen={isDirectoryFormOpen}
        setIsOpen={setIsDirectoryFormOpen}
      >
        {/* The trigger is handled by the sidebar, so no button here */}
      </DialogComponent>
    </>
  );
}
