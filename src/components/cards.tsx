"use client";
import { RootState } from "@/redux/store";
import { Directory, Task } from "@/types/types";
import { sortTasks } from "@/utils/sortTasks";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Skeleton } from "./ui/skeleton";

type CardsProps = {
  tasks: Task[];
  directories: Directory[];
};

const Cards: FC<CardsProps> = ({ tasks, directories }) => {
  const TaskCard = dynamic(() => import("@/stories/task-card"), {
    ssr: false,
    loading: () => (
      <Skeleton className="h-32 w-[250px] rounded-xlbackdrop-blur-md bg-white/30 rounded-xl shadow-lg " />
    ),
  });
  const viewMode = useSelector((state: RootState) => state.view.mode);
  const listView = `flex flex-col justify-center items-center gap-5`;
  const gridView = `grid grid-cols-1 gap-5 place-items-center  overflow-hidden  md:grid-cols-2 xl:grid-cols-3 xl:gap-x-0`;
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const sortName = sort?.split(" ")[0].toLocaleLowerCase()!;
  const sortedTasks = sortTasks(tasks, sortName);
  const searchValue = searchParams.get("search");
  console.log("searchValue", searchValue);
  const filteredTasks =
    searchValue && searchValue.trim() !== ""
      ? sortedTasks.filter((task) =>
          task.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : null;

  const cardTasks = filteredTasks ?? sortedTasks;

  return (
    <section
      className={`container py-6  mx-auto ${
        viewMode === "grid" ? gridView : listView
      }  `}
    >
      {cardTasks?.map((task) => (
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
