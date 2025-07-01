"use client";
import React, { useState, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "@/types/types";

type ProfileAvatarProps = {
  session: any;
  user: User | null;
};

export default function ProfileAvatar({ session, user }: ProfileAvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(
    user?.profilePic || "https://github.com/shadcn.png"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    setAvatarUrl(localUrl);

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      if (data.url) {
        setAvatarUrl(data.url);
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <section className="flex items-center justify-center gap-2">
      <h2>Hi, {session?.user?.username}</h2>

      <div onClick={onAvatarClick} className="cursor-pointer">
        <Avatar>
          <AvatarImage
            src={avatarUrl || "https://github.com/shadcn.png"}
            alt="User Avatar"
          />
          <AvatarFallback>
            {session?.user?.username?.charAt(0).toUpperCase() ?? "U"}
          </AvatarFallback>
        </Avatar>
      </div>

      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={onFileChange}
      />
    </section>
  );
}
