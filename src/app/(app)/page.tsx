import Cards from "@/components/cards";
import { prisma } from "@/lib/prisma";
import { userSession } from "@/lib/utils";
import React from "react";

const Home = async () => {
  const session = await userSession();
// console.log(session);

  if (!session?.user?.email) {
    return <div>Not logged in</div>;
  }
  const dbUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return (
    <section>
      <div>
        <h1>Welcome, {dbUser?.username}!</h1>
        <p>Your email: {dbUser?.email}</p>
      </div>
      {/* <Cards/> */}
    </section>
  );
};

export default Home;
