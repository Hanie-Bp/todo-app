import { notFound } from "next/navigation";
import Cards from "@/components/cards";
import { fetchDirectories } from "@/lib/utils";

export default async function Page({ params }: { params: { id?: string } }) {
  if (!params.id) {
    notFound(); 
  }

  const directories = await fetchDirectories();
  const directory = directories.find((dir) => dir.id === params.id);

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
