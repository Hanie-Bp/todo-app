import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks } from "@/lib/server-utils";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Todo App 📒",
  description: "A modern and intuitive ToDo app to manage tasks, stay organized, and boost productivity.",
  keywords: "todo app, task manager, productivity, task tracking, daily planner, organize tasks, checklist",
};



const Home = async () => {
  const tasks = await fetchTasks();
  const directories = await fetchDirectories();

  return (
    <section>
      <Cards directories={directories} tasks={tasks} />
    </section>
  );
};

export default Home;
