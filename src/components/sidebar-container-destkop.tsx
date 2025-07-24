"use client";
import DialogComponent from "@/stories/dialog";
import LeftSidebar from "@/stories/left-sidebar";
import React, { useState } from "react";

const SidebarContainerDestkop = () => {
  const [isDirectoryFormOpen, setIsDirectoryFormOpen] = useState(false);

  return (
    <section>
      <LeftSidebar
        tabletOrMobile={false}
        onAddDirectoryClick={() => setIsDirectoryFormOpen(true)}
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
    </section>
  );
};

export default SidebarContainerDestkop;
