
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
  const user = await getUserByEmail();
  const directories = await getAllDirectories(user?.id!);
  // const pathname = usePathname();
  // const [open, setOpen] = useState(false);
  //  const directories = await fetch("/api/directories");

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

          <LogotButton/>
          {/* <Button
            onClick={() => signOut({ callbackUrl: "/sign-in" })}
            className="bg-pink-500 hover:bg-pink-400 dark:text-slate-100 w-[30vw] md:w-[20vw] lg:w-[13vw] "
          >
            Logout
          </Button> */}

          {/* <Button className="bg-pink-500 hover:bg-pink-400 dark:text-slate-100 w-[30vw] md:w-[20vw] lg:w-[13vw] ">
              Sign In
            </Button> */}
        </div>
      </section>

      <nav aria-label="Primary task links">
        <LinksSidebar/>
        {/* <section className="flex flex-col justify-between mt-6 h-32"> */}
          {/* {links.map((link) => {
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
          })} */}
        {/* </section> */}
      </nav>
      <section className="mt-5 p-2 ">
        <DropdownDirecories directories={directories} />
        {/* <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)}>
          <DropdownMenuTrigger
            asChild
            className="hover:bg-inherit focus:outline-none focus:ring-0 focus:ring-offset-0"
          >
            <Button variant="ghost">
              {open ? (
                <ChevronDown className="h-4 w-4 transition-all" />
              ) : (
                <ChevronRight className="h-4 w-4 transition-all" />
              )}
              <span className="mr-2">Directories</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[230px] ml-2 mt-2 shadow-none border-none">
            <div className="flex flex-col px-2 py-1 space-y-1">
              {directoryArray.map((dir) => (
                <Link
                  key={dir}
                  href={`/${dir?.toLowerCase()}`}
                  className="cursor-pointer  text-sm hover:bg-muted px-2 py-1 rounded flex items-center justify-between group"
                >
                  <p>{dir}</p>

                  <div className="flex items-center gap-1">
                    {dir?.toLowerCase() !== "main" ? (
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center gap-1">
                        <DialogComponent
                          dialogtype="edit"
                          title="Edit directory name"
                          custumClass="flex"
                        >
                          <EditIcon className="w-4" />
                        </DialogComponent>
                        <DialogComponent
                          dialogtype="delete"
                          title="Are you sure?"
                          description="This directory will be deleted permanently"
                          custumClass="flex"
                        >
                          <Trash2Icon className="w-4" />
                        </DialogComponent>
                      </div>
                    ) : null}
                  </div>
                </Link>
              ))}

              
              <DialogComponent
                dialogtype="create"
                title="Create new directory"
                custumClass="flex"
              >
                <Button
                  variant={"ghost"}
                  className="text-sm border border-black border-dashed w-full"
                >
                  + New
                </Button>
              </DialogComponent>
            </div>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </section>
    </section>
  );
};

export default LeftSidebar;
