"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinksSidebar = () => {
  const pathname = usePathname();
  const links = [
    { name: "All tasks", href: "/" },
    { name: "Important tasks", href: "/important" },
    { name: "Completed tasks", href: "/completed" },
    { name: "Uncompleted tasks", href: "uncompleted" },
  ];
  return (
    <section className="flex flex-col justify-between mt-6 h-32">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`px-3 py-2  text-sm font-medium transition-colors ${
              isActive
                ? "text-red-500 bg-red-100 border-r-[3px] border-red-700"
                : "text-muted-dark dark:text-foreground font-bold  hover:text-red-600"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </section>
  );
};

export default LinksSidebar;
