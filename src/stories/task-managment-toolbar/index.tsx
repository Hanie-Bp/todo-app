"use client";
import { ChevronDown } from "lucide-react";
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
        <section className="w-[150px]  max-[430px]:w-[100px]">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full  data-[state=open]:ring-2 data-[state=open]:ring-secondary rounded  focus:outline-none focus:ring-0  text-nowrap">
              <div className="flex items-center text-sm max-[430px]:text-xs font-semibold text-primary justify-between border p-2 bg-muted rounded">
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
