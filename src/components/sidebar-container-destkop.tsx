"use client";
import DialogComponent from "@/stories/dialog";
import TaskForm from "@/stories/form-dialog";
import LeftSidebar from "@/stories/left-sidebar";
import React, { useState } from "react";

const SidebarContainerDestkop = () => {
  const [isDirectoryFormOpen, setIsDirectoryFormOpen] = useState(false);
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  // const [isEditDirectoryFormOpen, setIsEditDirectoryFormOpen] = useState(false);

  return (
    <section>
      <LeftSidebar
        tabletOrMobile={false}
        onAddDirectoryClick={() => setIsDirectoryFormOpen(true)}
        onAddTaskClick={() => setIsTaskFormOpen(true)}
      />

      <DialogComponent
        dialogtype="create"
        title="Create new directory"
        custumClass="flex"
        isOpen={isDirectoryFormOpen}
        setIsOpen={setIsDirectoryFormOpen}
      >
        {/* The trigger is handled by the sidebar, so no button here */}
      </DialogComponent>

      <TaskForm
        formType="add"
        isOpen={isTaskFormOpen}
        setIsOpen={setIsTaskFormOpen}
      >
        {/* The trigger is handled by the sidebar, so no button here */}
      </TaskForm>
    </section>
  );
};

export default SidebarContainerDestkop;
