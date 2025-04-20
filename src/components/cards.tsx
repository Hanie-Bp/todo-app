"use client"
import { RootState } from "@/redux/store";
import TaskCard from "@/stories/task-card";
import { tasks } from "@/stories/task-card/task-card.stories";
import React from "react";
import { useSelector } from "react-redux";

const Cards = () => {
  const viewMode = useSelector((state: RootState) => state.view.mode);
  console.log(viewMode);
  const listView = `flex flex-col justify-center items-center gap-5`
  const gridView = `grid grid-cols-1 gap-5 place-items-center  overflow-hidden  md:grid-cols-2 xl:grid-cols-3 `

  return (
    <section className={`container py-6  mx-auto ${viewMode=== "grid"? gridView: listView}  `}>
      {tasks.map((task, i) => (
        <TaskCard key={i} {...task} viewMode={viewMode}/>
      ))}
    </section>
  );
};

export default Cards;
