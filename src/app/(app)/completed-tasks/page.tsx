import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks } from "@/lib/utils";
import React from "react";

const CompletedTasks =async () => {
  const tasks = await fetchTasks();
  const directories = await fetchDirectories();
  const completedTasks = tasks.filter((task) => task.completed);
  return (
    <section>
      <Cards directories={directories} tasks={completedTasks} />
    </section>
  );
};

export default CompletedTasks;
