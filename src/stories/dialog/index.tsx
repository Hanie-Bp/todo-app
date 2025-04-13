import React, { FC } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/stories/ui/dialog";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../ui/label";

export type DialogProps = {
  title: string;
  description?: string;
  dialogtype: "edit" | "delete" | "create";
};

const DialogComponent: FC<DialogProps> = ({
  title,
  description,
  dialogtype,
}) => {
  return (
    <section>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="flex flex-col w-[90%] rounded-md">
          <DialogHeader className="text-start">
            <DialogTitle className="font-semibold md:text-2xl text-primary">
              {title}
            </DialogTitle>
            <DialogDescription className="text-muted-dark font-semibold">
              {dialogtype === "delete" && description}
            </DialogDescription>
          </DialogHeader>
          {dialogtype !== "delete" && (
            <section>
              <Label>Title</Label>
              <Input />
            </section>
          )}
          <DialogFooter className="sm:justify-start">
            {dialogtype === "create" && (
              <Button
                variant={"secondary"}
                size={"md"}
                className="px-4 py-2 text-base w-[25%] sm:w-[20%]"
              >
                Create
              </Button>
            )}
            {dialogtype === "edit" && (
              <Button
                variant={"secondary"}
                size={"md"}
                className="px-4 py-2 text-base  w-[25%] sm:w-[20%]"
              >
                Edit
              </Button>
            )}
            {dialogtype === "delete" && (
              <section className="flex justify-end w-full text-muted-dark font-semibold">
                <DialogClose asChild>
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                </DialogClose>
                <Button variant={"secondary"} className="text-base ms-2">Confirm</Button>
              </section>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DialogComponent;
