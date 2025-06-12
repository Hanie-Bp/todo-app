import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks } from "@/lib/utils";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title: "Completed Tasks ✅",
};

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
