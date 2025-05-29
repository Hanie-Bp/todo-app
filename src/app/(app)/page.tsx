import Cards from "@/components/cards";
import { fetchDirectories, fetchTasks, userSession } from "@/lib/utils";
import React from "react";

const Home = async () => {
  // const session = await userSession();
  // console.log(session);

  // if (!session?.user?.email) {
  //   return <div>Not logged in</div>;
  // }
  // const dbUser = await prisma.user.findUnique({
  //   where: { email: session.user.email },
  // });
  const tasks = await fetchTasks();
  const directories = await fetchDirectories();
  // console.log(tasks);

  return (
    <section>
      <Cards directories={directories} tasks={tasks} />
    </section>
  );
};

export default Home;
