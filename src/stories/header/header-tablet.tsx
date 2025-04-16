import React from "react";
import SearchInput from "../searchInput";
import { Button } from "../button";
import { Menu, Sidebar } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LeftSidebar from "../left-sidebar";
import SheetMenu from "@/components/sheetMenu";

const today = new Date();

const formattedDate = `${today.getFullYear()},${today.toLocaleString("en-US", {
  month: "short",
})} ${today.getDate()}`;

const HeaderTablet = () => {
  return (
    <section className="flex items-center  w-screen px-4 ">
      {/* <Sheet >
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="w-72 [&_button]:hidden">
          <LeftSidebar tabletOrMobile={true}/>
        </SheetContent>
      </Sheet> */}
      <SheetMenu />
      <section className="flex items-center mx-4 w-screen justify-between">
        <SearchInput />
        <p className="flex flex-col font-bold">
          TO-DO LIST
          <span className="text-sm text-center font-semibold text-muted-dark">
            {formattedDate}
          </span>
        </p>
        <Button className="bg-secondary hover:bg-secondary-secondaryHover">
          Add new Task
        </Button>
      </section>
    </section>
  );
};

export default HeaderTablet;
