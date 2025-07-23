"use client";
import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormComponent from "./form-component";
import { Task } from "@/types/types";
import { useDirectories } from "@/context/DirectoryContext";

type TaskFormProps = {
  children: ReactNode;
  formData?: Task;
  // directories: Directory[];
  formType?: "edit" | "add";
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
};

const TaskForm = ({
  children,
  formData,
  // directories,
  formType,
  isOpen: controlledIsOpen,
  setIsOpen: controlledSetIsOpen,
}: TaskFormProps) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false);
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : uncontrolledIsOpen;
  const setIsOpen = controlledSetIsOpen || setUncontrolledIsOpen;
  const { directories } = useDirectories();

  const handleFormSuccess = () => {
    setIsOpen(false);
  };
  return (
    <section>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="w-[90vw] border-none">
          <DialogHeader>
            <DialogTitle className="text-start text-2xl text-primary">
              {formType === "edit" ? "Edit Task" : "Add a Task"}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FormComponent
            formData={formData}
            directories={directories}
            formType={formType}
            onSuccess={handleFormSuccess}
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TaskForm;
