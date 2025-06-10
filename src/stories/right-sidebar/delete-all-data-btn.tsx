"use client";
import React from "react";
// import { Button } from "../button";
import { deleteTasks } from "@/lib/utils";
import { deleteAlltasks } from "@/lib/actions/task.action";
import DialogComponent from "../dialog";

const DeleteAllDataBtn = () => {
  return (
    <section>
      <DialogComponent
        dialogtype="delete"
        title="Are you sure?"
        description="All data (tasks and directories) will be deleted permanently"
        custumClass="flex"
        deleteType="alltasks"
      >
        <span className="text-muted-dark">Delete all data</span>
      </DialogComponent>
    </section>
  );
};

export default DeleteAllDataBtn;
