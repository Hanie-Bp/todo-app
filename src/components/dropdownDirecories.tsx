"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronRight, EditIcon, Trash2Icon } from "lucide-react";
import { Button } from "@/stories/button";
import DialogComponent from "@/stories/dialog";
import Link from "next/link";
import { Directory } from "@/types/types";
import { useDirectories } from "@/context/DirectoryContext";


const DropdownDirecories = () => {
  const [open, setOpen] = useState(false);
  const { directories } = useDirectories();
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
      <DropdownMenuContent className="w-[270px] lg:w-[15.3vw] ml-2 mt-2 shadow-none border-none">
        <div className="flex flex-col py-1 space-y-1   ">
          {directories?.map((dir: Directory) => (
            <div
              key={dir.name}
              className="cursor-pointer  text-sm hover:bg-muted px-2 py-1 rounded flex items-center justify-between group"
            >
              <Link href={`/directories/${dir.id}`}>
                <p>{dir.name}</p>
              </Link>

              <div className="flex items-center gap-1  w-full justify-end">
                {dir.name?.toLowerCase() !== "main" ? (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center gap-1 justify-between ">
                    <DialogComponent
                      dialogtype="edit"
                      title="Edit directory name"
                      custumClass="flex"
                      directory={dir}
                    >
                      <EditIcon className="w-4" />
                    </DialogComponent>
                    <DialogComponent
                      dialogtype="delete"
                      title="Are you sure?"
                      description="This directory will be deleted permanently"
                      custumClass="flex"
                      directory={dir}
                      deleteType="directory"
                    >
                      <Trash2Icon className="w-4" />
                    </DialogComponent>
                  </div>
                ) : null}
              </div>
            </div>
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
