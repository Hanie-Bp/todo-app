"use client";

import React, { FC, ReactNode, useRef, useTransition } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../button";
import DirectoryForm from "@/components/directoryForm";
import { Directory } from "@/types/types";
import { deleteDirectory, deleteTask } from "@/lib/actions/delete.action";

type DialogProps = {
  title: string;
  description?: string;
  dialogtype: "edit" | "delete" | "create";
  custumClass?: string;
  directory?: Directory;
  deleteType?: "directory" | "task";
  taskId?: string;
  children: ReactNode;
};

const DialogComponent: FC<DialogProps> = ({
  title,
  description,
  dialogtype,
  custumClass,
  directory,
  deleteType,
  taskId,
  children,
}) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        if (deleteType === "directory" && directory?.id) {
          await deleteDirectory(directory.id);
          closeRef.current?.click();
        } else if (deleteType === "task" && taskId) {
          await deleteTask(taskId);
          closeRef.current?.click();
        }
      } catch (error) {
        console.error("❌ Error deleting:", error);
      }
    });
  };

  return (
    <section>
      <Dialog>
        <DialogTrigger className={custumClass}>{children}</DialogTrigger>
        <DialogContent className="flex flex-col w-[90%] rounded-md">
          <DialogHeader className="text-start">
            <DialogTitle className="font-semibold md:text-2xl text-primary">
              {title}
            </DialogTitle>
            <DialogDescription className="text-muted-dark font-semibold">
              {dialogtype === "delete" && description}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <button ref={closeRef} className="hidden" />
            </DialogClose>

            {dialogtype !== "delete" && (
              <DirectoryForm
                dialogType={dialogtype}
                directory={directory}
                closeDialog={() => closeRef.current?.click()}
              />
            )}

            {dialogtype === "delete" && (
              <section className="flex justify-end w-full text-muted-dark font-semibold">
                <DialogClose asChild>
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  onClick={handleDelete}
                  variant={"secondary"}
                  className="text-base ms-2"
                  disabled={isPending}
                >
                  {isPending ? "Deleting..." : "Confirm"}
                </Button>
              </section>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DialogComponent;
