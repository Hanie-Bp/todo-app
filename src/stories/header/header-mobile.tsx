import React from "react";
import SearchInput from "../searchInput";
import { Button } from "../button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/stories/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

const today = new Date();

const formattedDate = `${today.getFullYear()},${today.toLocaleString("en-US", {
  month: "short",
})} ${today.getDate()}`;

const HeaderMobile = () => {
  return (
    <section className="flex flex-col  items-center  w-screen px-4 ">
      <section className="flex  w-screen px-4 ">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="w-72" aria-describedby="">
            <SheetTitle></SheetTitle>
            sidebar
          </SheetContent>
        </Sheet>
        <section className="mx-auto">
          <p className="flex flex-col font-bold">
            TO-DO LIST
            <span className="text-sm text-center font-semibold text-muted-dark">
              {formattedDate}
            </span>
          </p>
        </section>
      </section>

      <section className="mt-3">
        <SearchInput />
      </section>
    </section>
  );
};

export default HeaderMobile;
