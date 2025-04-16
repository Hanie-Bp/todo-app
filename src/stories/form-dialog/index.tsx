"use client";

import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../button";
import FormComponent from "./form-component";

type TaskFormProps = {
  children: ReactNode;
};

const TaskForm = ({ children }: TaskFormProps) => {
  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>
          {/* <Button className="bg-secondary hover:bg-secondary-secondaryHover dark:text-slate-100">
            Add new Task
          </Button> */}
          {children}
        </DialogTrigger>
        <DialogContent className="w-[90vw] border-none">
          <DialogHeader>
            <DialogTitle className="text-start text-2xl text-primary">
              Add a Task
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FormComponent />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TaskForm;
