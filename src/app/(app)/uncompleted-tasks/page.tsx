import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks } from "@/lib/server-utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Uncompleted Tasks ❌",
};


const UncompletedTasks = async() => {
  const tasks = await fetchTasks();
  const directories = await fetchDirectories();
  const uncompletedTasks = tasks.filter((task) => !task.completed);
  return (
    <section>
      <Cards directories={directories} tasks={uncompletedTasks} />
    </section>
  );
};

export default UncompletedTasks;
