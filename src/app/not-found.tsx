"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {  Theater } from "lucide-react";

export default function NotFound() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative bg-[url(/images/not-found.png)] bg-slate-500 h-screen bg-center bg-contain bg-no-repeat flex items-start justify-center">
      {!curtainOpen && (
        <div className="flex mt-2 flex-col items-center font-semibold">
          <p>⬇️</p>
          <button
            onClick={() => setCurtainOpen(true)}
            className="z-10 flex  w-screen justify-center mt-1 text-white bg-red-500 bg-opacity-100 p-3 rounded-lg hover:bg-opacity-70 transition   "
            aria-label="Open Curtain"
          >
            <Theater className="w-8 h-8" />
          </button>
        </div>
      )}

      <div
        className={`absolute top-0 left-0 w-full bg-black bg-opacity-80 text-white flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          curtainOpen ? "h-screen" : "h-0"
        }`}
      >
        {curtainOpen && (
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl font-bold">Oops! Page not found</h2>
            <button
              onClick={() => router.push("/")}
              className="mt-4 px-5 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
            >
              Go to Homepage
            </button>
          </div>
        )}
      </div>

      
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
