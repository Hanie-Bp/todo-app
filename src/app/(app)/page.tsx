import Cards from "@/components/cards";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import React from "react";

const Home = async() => {
  const session = await getServerSession(authOptions);
  // console.log("session",session?.user.username);
  if (!session?.user?.email) {
    return <div>Not logged in</div>;
  }
   const dbUser = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  
  return <section>
     <div>
      <h1>Welcome, {dbUser?.username}!</h1>
      <p>Your email: {dbUser?.email}</p>
    </div>
    {/* <Cards/> */}
  </section>;
};

export default Home;
