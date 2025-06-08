import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "../darkmode/index";
import { Progress } from "@/components/ui/progress";
import { Button } from "../button";
import { userSession } from "@/lib/utils";
import { Task } from "@/types/types";

const RightSideBar = async ({ tasks }: { tasks: Task[] }) => {
  const session = await userSession();
  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <section className="hidden min-h-screen  p-3 bg-muted lg:flex flex-col justify-between">
      <section>
        <section className="flex items-center justify-center">
          <h2 className="me-2">Hi , {session?.user.username}</h2>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </section>

        <ModeToggle />

        <section className="mt-5">
          <section className="flex justify-between">
            <p>All tasks</p>
            <span>{completedTasks.length + "/" + tasks.length}</span>
          </section>
          <section className="mt-2">
            <Progress
              className="[&>*]:bg-secondary [&>div]:transition-all [&>div]:duration-300"
              value={(completedTasks.length / (tasks.length || 1)) * 100}
            />
          </section>
        </section>
      </section>

      <section>
        <Button variant={"ghost"} className="text-muted-dark">
          Delete all data
        </Button>
        <p
          className="text-center mt-2 p-2 rounded bg-red-200 text-[15px] font-medium
        text-red-700"
        >
          Created by Hanie
        </p>
      </section>
    </section>
  );
};

export default RightSideBar;
