import { ChevronDown, Ghost, LayoutGridIcon, List } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/stories/ui/dropdown-menu";
import { Button } from "../button";

type TaskManagementToolbarProps = {
  taskbarName: "Important" | "Completed" | "Uncompleted" | "All";
  numberOfTasks: number;
};

const TaskManagementToolbar = ({
  taskbarName,
  numberOfTasks,
}: TaskManagementToolbarProps) => {
  const sortsTexts = [
    "Order added",
    "Earlier first",
    "Later first",
    "Completed first",
    "Uncompleted first",
  ];
  return (
    <section className="flex flex-col justify-center mt-2">
      <h2 className="text-[22px] text-primary font-semibold">
        {`${taskbarName} Tasks (${numberOfTasks} tasks)`}
      </h2>

      <section className="flex justify-between p-3  mt-4">
        <section className="flex cursor-pointer items-center  justify-between">
          <Button variant={"ghost"} className="hover:bg-transparent">
            <List className="text-accent-foreground" />
          </Button>
          <Button variant={"ghost"} className="hover:bg-transparent">
            <LayoutGridIcon className="text-secondary" />
          </Button>
        </section>

        <section className="w-[13%]">
          <DropdownMenu>
            <DropdownMenuTrigger className="w-full  data-[state=open]:ring-2 data-[state=open]:ring-secondary rounded  focus:outline-none focus:ring-0">
              <div className="flex items-center text-sm font-semibold text-primary justify-between border p-2 bg-muted rounded">
                <p>Sort by</p>
                <ChevronDown className="h-4 w-4 transition-all" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-muted">
              {sortsTexts.map((sortText) => (
                <DropdownMenuItem
                  key={sortText}
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
