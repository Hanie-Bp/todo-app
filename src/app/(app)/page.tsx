import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks, userSession } from "@/lib/utils";
import React from "react";

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
