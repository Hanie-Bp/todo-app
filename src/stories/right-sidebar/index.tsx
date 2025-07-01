import React from "react";
import { ModeToggle } from "../darkmode/index";
import { Progress } from "@/components/ui/progress";
import { userSession } from "@/lib/utils";
import { Task } from "@/types/types";
import DeleteAllDataBtn from "@/components/delete-all-data-btn";
import ProfileAvatar from "@/components/profile-avatar";
import { getUserByEmail } from "@/lib/actions/user.action";

const RightSideBar = async ({ tasks }: { tasks: Task[] }) => {
  const session = await userSession();
  const completedTasks = tasks.filter((task) => task.completed);
  const user = await getUserByEmail();

  return (
    <section className="hidden min-h-screen  p-3 bg-muted lg:flex flex-col justify-between">
      <section>
        <section className="flex items-center justify-center">
          <ProfileAvatar session={session} user={user} />
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
        <DeleteAllDataBtn />
        <p className="text-center mt-2 p-2 rounded bg-red-200 text-[15px] font-medium text-red-700">
          Created by Hanie
        </p>
      </section>
    </section>
  );
};

export default RightSideBar;
