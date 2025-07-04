import React from "react";
import SearchInput from "../searchInput";
import { Button } from "../button";
import SheetMenu from "@/components/sheetMenu";
import TaskForm from "../form-dialog";

const today = new Date();

const formattedDate = `${today.getFullYear()},${today.toLocaleString("en-US", {
  month: "short",
})} ${today.getDate()}`;

const HeaderTablet = () => {
  return (
    <section className="flex items-center  w-screen px-4 ">
      <SheetMenu />
      <section className="flex items-center mx-4 w-screen justify-between">
        <SearchInput />
        <p className="flex flex-col font-bold">
          TO-DO LIST
          <span className="text-sm text-center font-semibold text-muted-dark">
            {formattedDate}
          </span>
        </p>
        <TaskForm  formType="add"> 
        <Button className="bg-secondary hover:bg-secondary-secondaryHover dark:text-slate-100">
          Add new Task
        </Button>
      </TaskForm>
      </section>
    </section>
  );
};

export default HeaderTablet;
