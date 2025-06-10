import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks } from "@/lib/utils";
import React from "react";

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
