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
} from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import RightSideBar from "../right-sidebar";
import LeftSidebar from "../left-sidebar";
import SheetMenu from "@/components/sheetMenu";
import { Directory } from "@/types/types";

const today = new Date();

const formattedDate = `${today.getFullYear()},${today.toLocaleString("en-US", {
  month: "short",
})} ${today.getDate()}`;

const HeaderMobile = ({directories}: { directories:   Directory[] }) => {
  return (
    <section className="flex flex-col  items-center  w-screen px-4 ">
      <section className="flex  w-screen px-4 ">
        {/* <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 [&_button]:hidden" aria-describedby="">
            <SheetTitle></SheetTitle>
           <LeftSidebar tabletOrMobile={true}/>
          </SheetContent>
        </Sheet> */}
        <SheetMenu directories={directories} />
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
