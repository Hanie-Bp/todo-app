"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/stories/button";
import Image from "next/image";

type ErrorPageProps = {
  error?: {
    message?: string;
  };
};

export default function ErrorPage({ error }: ErrorPageProps) {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-rose-300 overflow-hidden ">
      <div className=" w-[300px] sm:w-[400px] h-56 relative">
        <Image
          src="/images/error-img.png"
          alt="error-pic"
          fill
          className=" object-cover"
        />
      </div>

      <div className="relative z-10 text-center text-[#721c24] p-8 ">
        <h1 className="text-2xl font-bold">Oops! Something went wrong.</h1>
        <p className="mt-4 text-base">
          We encountered an error while processing your request:
        </p>
        <p className="mt-4 italic text-sm">
          {error?.message || "An unexpected error occurred."}
        </p>
        <Button className="mt-8" onClick={() => router.push("/")} variant={"warning"}>
          Go to Homepage
        </Button>
      </div>
    </div>
  );
}
