import { notFound } from "next/navigation";
import Cards from "@/components/cards";

import type { Metadata } from "next";
import { fetchDirectories } from "@/lib/server-utils";
import { Directory } from "@/types/types";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const directories = await fetchDirectories();
  // console.log("directories", directories);
  
  const directory = directories.find((dir:Directory) => dir.id === params.id);

  if (!directory) {
    return {
      title: "Directory Not Found",
      description: "The specified directory does not exist.",
      keywords: "todo, tasks, directory, not found",
    };
  }

  return {
    title: `${directory.name} | Todo App`,
    description: `Tasks under the "${directory.name}" directory.`,
    keywords: `todo, tasks, ${directory.name}, directory tasks`,
  };
}

export default async function Page({ params }: { params: { id?: string } }) {
  if (!params.id) {
    notFound();
  }

  const directories = await fetchDirectories();
  const directory = directories.find((dir:Directory) => dir.id === params.id);

  if (!directory) {
    notFound();
  }

  const tasks = directory.tasks || [];

  return (
    <section>
      <Cards directories={directories} tasks={tasks} />
    </section>
  );
}
