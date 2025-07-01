"use client";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/stories/button";
import { Loader2 } from "lucide-react";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    await fetch("/api/auth/signout-hook", { method: "POST" });
    setLoading(true);
    await signOut({ callbackUrl: "/sign-in" });
    setLoading(false);
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={loading}
      className="relative flex items-center justify-center bg-pink-500 hover:bg-pink-400 dark:text-slate-100 w-[200px] md:w-[20vw] lg:w-[13vw]"
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin mr-2 h-4 w-4" />
          Signing out…
        </>
      ) : (
        "Logout"
      )}
    </Button>
  );
};

export default LogoutButton;
