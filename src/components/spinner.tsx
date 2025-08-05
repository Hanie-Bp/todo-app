"use client";

import React from "react";

export default function Spinner({ text = "Loading..." }: { text?: string }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#a8edea] to-[#fcd6fe] overflow-hidden z-50">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 border-8 border-transparent border-t-sky-700 rounded-full animate-spin" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sky-700 text-xl font-bold drop-shadow-md">
          {text}
        </div>
      </div>
    </div>
  );
}