"use client";
import React, { FC, useState } from "react";
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
import { Button } from "@/stories/button";
import DialogComponent from "@/stories/dialog";
import Link from "next/link";

type Directory = {
  name: string;
  id: string;
  // userId: string;
};

type DropdownDirectoriesProps = {
  directories: Directory[];
};

const DropdownDirecories: FC<DropdownDirectoriesProps> = ({ directories }) => {
  console.log(directories);

  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)}>
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
          {directories.map((dir) => (
            <Link
              key={dir.name}
              href={`/${dir.name?.toLowerCase()}`}
              className="cursor-pointer  text-sm hover:bg-muted px-2 py-1 rounded flex items-center justify-between group"
            >
              <p>{dir.name}</p>

              <div className="flex items-center gap-1">
                {dir.name?.toLowerCase() !== "main" ? (
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

          {/* Button to add new directory */}
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
    </DropdownMenu>
  );
};

export default DropdownDirecories;
