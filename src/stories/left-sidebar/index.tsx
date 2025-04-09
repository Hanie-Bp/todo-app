import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/stories/ui/avatar";
import Darkmode from "../darkmode";

const LeftSidebar = () => {
  return (
    <section className="border border-black min-h-screen w-72">
      <section className="flex items-center justify-center border">
        <h2 className="me-2">Hi , User</h2>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
      <Darkmode/>
    </section>
  );
};

export default LeftSidebar;
