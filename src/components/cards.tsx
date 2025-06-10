"use client";
import { RootState } from "@/redux/store";
import TaskCard from "@/stories/task-card";
// import { tasks } from "@/stories/task-card/task-card.stories";
import { Directory, Task } from "@/types/types";
import { sortTasks } from "@/utils/sortTasks";
import { useSearchParams } from "next/navigation";
// import { dir } from "console";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type CardsProps = {
  tasks: Task[];
  directories: Directory[];
};

const Cards: FC<CardsProps> = ({ tasks, directories }) => {
  const viewMode = useSelector((state: RootState) => state.view.mode);
  const listView = `flex flex-col justify-center items-center gap-5`;
  const gridView = `grid grid-cols-1 gap-5 place-items-center  overflow-hidden  md:grid-cols-2 xl:grid-cols-3 xl:gap-x-0`;
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const sortName = sort?.split(" ")[0].toLocaleLowerCase()!;
  const sortedTasks = sortTasks(tasks, sortName);

  return (
    <section
      className={`container py-6  mx-auto ${
        viewMode === "grid" ? gridView : listView
      }  `}
    >
      {sortedTasks?.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          viewMode={viewMode}
          directories={directories}
        />
      ))}
    </section>
  );
};

export default Cards;
