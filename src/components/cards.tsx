"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Directory, Task } from "@/types/types";
import { sortTasks } from "@/utils/sortTasks";
import dynamic from "next/dynamic";
import { Skeleton } from "./ui/skeleton";
import { Button } from "@/stories/button";

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

const TASKS_PER_PAGE = 6;

const Cards = ({ tasks, directories }: CardsProps) => {
  const viewMode = useSelector((state: RootState) => state.view.mode);
  const searchParams = useSearchParams();
  const router = useRouter();

  const sort = searchParams.get("sort");
  const searchValue = searchParams.get("search")?.trim().toLowerCase();
  const pageParam = searchParams.get("page");
  const currentPage = Math.max(1, parseInt(pageParam || "1"));

  const sortName = sort ? sort.split(" ")[0].toLowerCase() : "";
  const sortedTasks = sortTasks(tasks, sortName);

  const filteredTasks = searchValue
    ? sortedTasks.filter((task) =>
        task.title.toLowerCase().includes(searchValue)
      )
    : sortedTasks;

  const visibleTasks = filteredTasks.slice(0, currentPage * TASKS_PER_PAGE);
  const hasMore = visibleTasks.length < filteredTasks.length;

  const loadMore = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", (currentPage + 1).toString());
    router.push(`?${params.toString()}`);
  };

  const listView = `flex flex-col justify-center items-center gap-5`;
  const gridView = `grid grid-cols-1 gap-5 place-items-center overflow-hidden md:grid-cols-2 xl:grid-cols-3 xl:gap-x-0`;

  useEffect(() => {
    loadTaskCard();
  }, []);

  return (
    <section className="container mx-auto py-6">
      <div className={viewMode === "grid" ? gridView : listView}>
        {visibleTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            viewMode={viewMode}
            directories={directories}
          />
        ))}
      </div>

      {filteredTasks.length === 0 && (
        <p className="text-xl text-red-500 font-semibold  mt-6">
          No Tasks Found
        </p>
      )}

      {filteredTasks.length > 0 && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={loadMore}
            disabled={!hasMore}
            variant="secondary"
            className="w-[20%] dark:text-neutral-100"
          >
            More
          </Button>
        </div>
      )}
    </section>
  );
};

export default Cards;
