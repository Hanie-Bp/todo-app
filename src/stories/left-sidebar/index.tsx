import { Button } from "../button";
import LogotButton from "@/components/logout-btn";
import LinksSidebar from "@/components/links-sidebar";
import DropdownDirecories from "@/components/dropdownDirecories";
import { Directory } from "@/types/types";

type LeftSidebarProps = {
  tabletOrMobile: boolean;
  onAddTaskClick?: () => void;
  onAddDirectoryClick?: () => void;
  // onEditDirectoryClick?: () => void;
  // setEditDirectory?: (directory: Directory | null) => void;
};

const LeftSidebar = ({ tabletOrMobile, onAddTaskClick , onAddDirectoryClick }: LeftSidebarProps) => {
  return (
    <section
      className={`bg-muted min-h-screen h-full ${
        tabletOrMobile ? "block" : "hidden"
      } lg:block`}
    >
      <section className="flex flex-col justify-center items-center p-3">
        <h2 className="text-primary font-semibold">TO DO LIST</h2>
        <div className="flex flex-col gap-3 mt-6  w-full justify-center items-center">
          <Button
            className="bg-secondary hover:bg-secondary-secondaryHover dark:text-slate-100 w-[200px] md:w-[20vw] lg:w-[13vw] "
            onClick={onAddTaskClick}
          >
            Add new Task
          </Button>

          <LogotButton />
        </div>
      </section>

      <nav aria-label="Primary task links">
        <LinksSidebar />
      </nav>
      <section className="mt-5  ">
        <DropdownDirecories  onAddDirectoryClick={onAddDirectoryClick}  />
      </section>
    </section>
  );
};

export default LeftSidebar;
