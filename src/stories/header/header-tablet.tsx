import React from "react";
import SearchInput from "../searchInput";
import { Button } from "../button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/stories/ui/sheet";

const today = new Date();

const formattedDate = `${today.getFullYear()},${today.toLocaleString("en-US", {
  month: "short",
})} ${today.getDate()}`;

const HeaderTablet = () => {
  return (
    <section className="flex items-center  w-screen px-4 ">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          sidebar
        </SheetContent>
      </Sheet>
      <section className="flex items-center mx-4 w-screen justify-between">
        <SearchInput />
        <p className="flex flex-col font-bold">
          TO-DO LIST
          <span className="text-sm text-center font-semibold text-muted-dark">
            {formattedDate}
          </span>
        </p>
        <Button className="bg-secondary">Add new Task</Button>
      </section>
    </section>
  );
};

export default HeaderTablet;