import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks } from "@/lib/utils";
import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const directories = await fetchDirectories();
  const directory = directories.find((dir) => dir.id === params.id);
  const tasks = directory?.tasks || [];

  return (
    <section>
      <Cards directories={directories} tasks={tasks} />
    </section>
  );
}
