
import React from "react";
import SearchInput from "../searchInput";
import { Button } from "../button";
import { getTodayDate } from "@/utils/dateFunctions";
import TaskForm from "../form-dialog";

const HeaderDestkop = () => {
  return (
    <section className="flex justify-between items-center  w-[66.6vw] px-4 ">
      <SearchInput />
      <p>{getTodayDate().readableFormat}</p>
      <TaskForm  formType="add" > 
        <Button className="bg-secondary hover:bg-secondary-secondaryHover dark:text-slate-100">
          Add new Task
        </Button>
      </TaskForm>
    </section>
  );
};

export default HeaderDestkop;
