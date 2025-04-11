"use client";
import React, { useState } from "react";
import { Button } from "../button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/stories/ui/dropdown-menu";
import { ChevronDown, ChevronRight } from "lucide-react";

type linkProps = {
  name: string;
  href: string;
};

const links: linkProps[] = [
  { name: "All tasks", href: "/" },
  { name: "Important tasks", href: "/important" },
  { name: "Completed tasks", href: "/completed" },
  { name: "Uncompleted tasks", href: "uncompleted" },
];

const LeftSidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <section className="  bg-muted min-h-screen h-screen hidden lg:block">
      <section className="flex flex-col justify-center items-center p-3">
        <h2 className="text-primary font-semibold">TO DO LIST</h2>
        <Button className="bg-secondary mt-6 w-[98%] hover:bg-secondary-secondaryHover">
          Add New Task
        </Button>
      </section>

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

      <section className="mt-5 p-2 ">
        <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)}>
          <DropdownMenuTrigger asChild className="hover:bg-inherit focus:outline-none focus:ring-0 focus:ring-offset-0">
            <Button variant="ghost">
              {open ? (
                <ChevronDown className="h-4 w-4 transition-all" />
              ) : (
                <ChevronRight className="h-4 w-4 transition-all" />
              )}
              <span className="mr-2">Directories</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[230px] ml-2 mt-2 shadow-none">
            <div className="flex flex-col px-2 py-1 space-y-1">
              <span className="cursor-pointer text-sm hover:bg-muted px-2 py-1 rounded">
                secondary
              </span>
              <span className="cursor-pointer text-sm hover:bg-muted px-2 py-1 rounded">
                Main
              </span>
              <Button
                variant="outline"
                className="text-sm border-dashed  w-full"
              >
                + New
              </Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </section>
  );
};

export default LeftSidebar;
