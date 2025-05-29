
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
import { fetchDirectories } from "@/lib/utils";
import { Directory, Task } from "@/types/types";

type TaskFormProps = {
  children: ReactNode;
  formData?: Task
  directories: Directory[];
  formType?: "edit" | "add";
};

const TaskForm = ({ children, formData ,directories,formType}: TaskFormProps) => {

  return (
    <section>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="w-[90vw] border-none">
          <DialogHeader>
            <DialogTitle className="text-start text-2xl text-primary">
              {formType === "edit" ? "Edit Task" : "Add a Task"}
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <FormComponent formData={formData} directories={directories} formType={formType} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TaskForm;
