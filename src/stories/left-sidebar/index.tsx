import { Button } from "../button";
import TaskForm from "../form-dialog";
import LogotButton from "@/components/logout-btn";
import LinksSidebar from "@/components/links-sidebar";
import DropdownDirecories from "@/components/dropdownDirecories";

type LeftSidebarProps = {
  tabletOrMobile: boolean;
  isTaskFormOpen?: boolean;
  setIsTaskFormOpen?: (open: boolean) => void;
};

const LeftSidebar = ({
  tabletOrMobile,
  isTaskFormOpen,
  setIsTaskFormOpen,
}: LeftSidebarProps) => {
  return (
    <section
      className={`bg-muted min-h-screen h-full ${
        tabletOrMobile ? "block" : "hidden"
      } lg:block`}
    >
      <section className="flex flex-col justify-center items-center p-3">
        <h2 className="text-primary font-semibold">TO DO LIST</h2>
        <div className="flex flex-col gap-3 mt-6  w-full justify-center items-center">
          <TaskForm
            formType={"add"}
            isOpen={isTaskFormOpen}
            setIsOpen={setIsTaskFormOpen}
          >
            <Button className="bg-secondary hover:bg-secondary-secondaryHover dark:text-slate-100 w-[200px] md:w-[20vw] lg:w-[13vw] ">
              Add new Task
            </Button>
          </TaskForm>

          <LogotButton />
        </div>
      </section>

      <nav aria-label="Primary task links">
        <LinksSidebar />
      </nav>
      <section className="mt-5  ">
        <DropdownDirecories />
      </section>
    </section>
  );
};

export default LeftSidebar;
