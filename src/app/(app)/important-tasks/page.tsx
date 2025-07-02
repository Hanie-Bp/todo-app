import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks } from "@/lib/server-utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Important Tasks ✨",
};

const page = async () => {
  const tasks = await fetchTasks();
  const directories = await fetchDirectories();
  const importantTasks = tasks.filter((task) => task.important);
  return (
    <section>
      <Cards directories={directories} tasks={importantTasks} />
    </section>
  );
};

export default page;
