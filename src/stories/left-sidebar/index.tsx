import React, { useEffect, useState } from "react";
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
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronRight,
  Edit,
  EditIcon,
  Trash,
  Trash2,
  Trash2Icon,
} from "lucide-react";
import TaskForm from "../form-dialog";
import DialogComponent from "../dialog";
import { signOut } from "next-auth/react";
import LogotButton from "@/components/logout-btn";
import LinksSidebar from "@/components/links-sidebar";
import DropdownDirecories from "@/components/dropdownDirecories";
import { get } from "http";
import { getAllDirectories, getUserByEmail } from "@/lib/actions";
import { userSession } from "@/lib/utils";

// type linkProps = {
//   name: string;
//   href: string;
// };

type LeftSidebarProps = {
  tabletOrMobile: boolean;
};

// const links: linkProps[] = [
//   { name: "All tasks", href: "/" },
//   { name: "Important tasks", href: "/important" },
//   { name: "Completed tasks", href: "/completed" },
//   { name: "Uncompleted tasks", href: "uncompleted" },
// ];

const LeftSidebar = async ({ tabletOrMobile }: LeftSidebarProps) => {
  // const user = await getUserByEmail();
  const session = await userSession();
  const directories = await getAllDirectories(session?.user?.id!);
  // console.log("dsadfsdfsdfsf", getSession);

  return (
    <section
      className={`bg-muted min-h-screen h-full ${
        tabletOrMobile ? "block" : "hidden"
      } lg:block`}
    >
      <section className="flex flex-col justify-center items-center p-3">
        <h2 className="text-primary font-semibold">TO DO LIST</h2>
        <div className="flex flex-col gap-3 mt-6  w-full justify-center items-center">
          <TaskForm>
            <Button className="bg-secondary hover:bg-secondary-secondaryHover dark:text-slate-100 w-[30vw] md:w-[20vw] lg:w-[13vw] ">
              Add new Task
            </Button>
          </TaskForm>

          <LogotButton />
        </div>
      </section>

      <nav aria-label="Primary task links">
        <LinksSidebar />
      </nav>
      <section className="mt-5 p-2 ">
        <DropdownDirecories directories={directories} />
      </section>
    </section>
  );
};

export default LeftSidebar;
