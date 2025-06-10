"use client";
import { Button } from "@/stories/button";
import { signOut } from "next-auth/react";
import React from "react";

const LogotButton = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/sign-in" })}
      className="bg-pink-500 hover:bg-pink-400 dark:text-slate-100 w-[200px] md:w-[20vw] lg:w-[13vw] "
    >
      Logout
    </Button>
  );
};

export default LogotButton;
