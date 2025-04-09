import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/stories/ui/avatar";
import { ModeToggle } from "../darkmode/index";
import { Progress } from "@/stories/ui/progress";

const LeftSidebar = () => {
  return (
    <section className="border border-black min-h-screen w-72 p-3 bg-muted">
      <section className="flex items-center justify-center border">
        <h2 className="me-2">Hi , User</h2>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>

      <ModeToggle />

      <section className="mt-5">
        <section className="flex justify-between">
          <p>All tasks</p>
          <span>1/2</span>
        </section>
        <section className="mt-2">
          <Progress  className='[&>*]:bg-secondary' value={5} max={10}  />
        </section>
      </section>
    </section>
  );
};

export default LeftSidebar;
