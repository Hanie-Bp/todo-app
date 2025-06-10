"use client";
import React from "react";
import DialogComponent from "@/stories/dialog";


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
