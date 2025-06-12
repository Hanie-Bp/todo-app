"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Directory, Task } from "@/types/types";
import { sortTasks } from "@/utils/sortTasks";
import dynamic from "next/dynamic";
import { Skeleton } from "./ui/skeleton";

type CardsProps = {
  tasks: Task[];
  directories: Directory[];
};



const loadTaskCard = () => import("@/stories/task-card");


const TaskCard = dynamic(loadTaskCard, {
  ssr: false,
  loading: () => (
    <Skeleton className="h-32 w-[250px] rounded-xl backdrop-blur-md bg-white/30 shadow-lg" />
  ),
});

const Cards = ({ tasks, directories }: CardsProps) => {
  const viewMode = useSelector((state: RootState) => state.view.mode);
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");
  const sortName = sort?.split(" ")[0].toLowerCase()!;
  const sortedTasks = sortTasks(tasks, sortName);
  const searchValue = searchParams.get("search");

  const filteredTasks =
    searchValue && searchValue.trim() !== ""
      ? sortedTasks.filter((task) =>
          task.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : null;

  const cardTasks = filteredTasks ?? sortedTasks;

  const listView = `flex flex-col justify-center items-center gap-5`;
  const gridView = `grid grid-cols-1 gap-5 place-items-center  overflow-hidden  md:grid-cols-2 xl:grid-cols-3 xl:gap-x-0`;


  useEffect(() => {
    loadTaskCard();
  }, []);

  return (
    <section
      className={`container py-6 mx-auto ${
        viewMode === "grid" ? gridView : listView
      }`}
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
