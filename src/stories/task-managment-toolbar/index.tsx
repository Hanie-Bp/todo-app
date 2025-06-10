"use client";
import { ChevronDown, Ghost, LayoutGridIcon, List } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ViewToggle from "./view-toggle";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Directory, Task } from "@/types/types";
import { getTaskbarInfo } from "@/utils/getTaskbarInfo";

type TaskManagementToolbarProps = {
  directories: Directory[];
  // numberOfTasks: number;
};

const TaskManagementToolbar = ({ directories }: TaskManagementToolbarProps) => {
  const sortsTexts = [
    "Order added",
    "Earlier first",
    "Later first",
    "Completed first",
    "Uncompleted first",
  ];

  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { taskbarName, numberOfTasks } = getTaskbarInfo(path, directories);
  // let taskbarName: string = "All";
  // // let AllTasks: Task[];
  // let numberOfTasks;
  // if (path === "/") {
  //   taskbarName = "All";
  //   const tasks = directories.map((dir) => dir.name).flat();
  //   numberOfTasks = tasks.length;
  // } else if (path === "/important-tasks") {
  //   taskbarName = "Important";
  //   const tasks = directories
  //     .filter((dir) => dir.tasks.every((task) => task.important))
  //     .flat();
  //   numberOfTasks = tasks.length;
  // } else if (path === "/completed-tasks") {
  //   taskbarName = "Completed";
  //   const allTasks = directories.flatMap((dir) => dir.tasks || []);
  //   const completedTasks = allTasks.filter((task) => task.completed);
  //   numberOfTasks = completedTasks.length;
  // } else if (path === "/uncompleted-tasks") {
  //   taskbarName = "Uncompleted";
  //   const allTasks = directories.flatMap((dir) => dir.tasks || []);
  //   const uncompletedTasks = allTasks.filter((task) => !task.completed);
  //   numberOfTasks = uncompletedTasks.length;
  // } else {
  //   const dirId = path.split("/")[2];
  //   const directory = directories.find((dir) => dir.id === dirId);
  //   if (directory) {
  //     taskbarName = directory.name;
  //   }
  //   const dirs = directories.find((dir) => {
  //     if (dir.id === dirId) {
  //       return dir.tasks.length;
  //     }
  //   });
  //   numberOfTasks = dirs?.tasks.length || 0;
  // }
  const selectedSort = searchParams.get("sort") || "sort by";

  const updateSort = (sort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sort);
    router.push(`${path}?${params.toString()}`);
  };
  return (
    <section className="flex flex-col justify-center mt-2">
      <h2 className="text-[22px] text-primary font-semibold">
        {`${taskbarName} Tasks (${numberOfTasks} tasks)`}
      </h2>

      <section className="flex justify-between p-3  mt-4">
        <ViewToggle />
        <section className="w-[100px] md:w-[15%]">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full  data-[state=open]:ring-2 data-[state=open]:ring-secondary rounded  focus:outline-none focus:ring-0">
              <div className="flex items-center text-sm font-semibold text-primary justify-between border p-2 bg-muted rounded">
                <p>{selectedSort}</p>
                <ChevronDown className="h-4 w-4 transition-all" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-muted">
              {sortsTexts.map((sortText) => (
                <DropdownMenuItem
                  key={sortText}
                  onClick={() => updateSort(sortText)}
                  className="hover:!bg-cyan-700 text-muted-dark hover:text-muted font-medium cursor-pointer"
                >
                  {sortText}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </section>
    </section>
  );
};

export default TaskManagementToolbar;
