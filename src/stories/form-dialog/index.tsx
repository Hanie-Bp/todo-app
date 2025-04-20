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

import FormComponent from "./form-component";

type TaskFormProps = {
  children: ReactNode;
  formData?: {
    important: boolean;
    completed: boolean;
    title: string;
    description: string;
    date: string;
    directoryName: string;
  };
};

const TaskForm = ({ children, formData }: TaskFormProps) => {
  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="w-[90vw] border-none">
          <DialogHeader>
            <DialogTitle className="text-start text-2xl text-primary">
              Add a Task
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FormComponent formData={formData} directories={["secondary","work", "personal", "main"]}/>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TaskForm;
