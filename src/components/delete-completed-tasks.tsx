"use client";
import DialogComponent from "@/stories/dialog";
import React from "react";


const DeleteCompletedTasks = () => {
  return (
    <section>
      <DialogComponent
        dialogtype="delete"
        title="Are you sure?"
        description="All completed tasks will be deleted permanently"
        custumClass="flex"
        deleteType="completedtasks"
      >
        <span className=" font-semibold p-2 rounded-lg bg-red-200 text-red-700">Delete all completed tasks</span>
      </DialogComponent>
    </section>
  );
};

export default DeleteCompletedTasks;