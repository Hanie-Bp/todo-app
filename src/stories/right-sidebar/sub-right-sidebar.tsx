"use client";
import React from "react";
import { Button } from "../button";
import { deleteTasks } from "@/lib/utils";
import { deleteAlltasks } from "@/lib/actions/task.action";

const SubRightSidebar = () => {
  return (
    <section>
      <Button
        variant={"ghost"}
        className="text-muted-dark"
        onClick={async () => deleteAlltasks()}
      >
        Delete all data
      </Button>
      <p className="text-center mt-2 p-2 rounded bg-red-200 text-[15px] font-medium text-red-700">
        Created by Hanie
      </p>
    </section>
  );
};

export default SubRightSidebar;
