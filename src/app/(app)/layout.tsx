// src/app/(app)/layout.tsx

import { ThemeProvider } from "@/components/theme-provider";
import RightSideBar from "@/stories/right-sidebar";
import LeftSidebar from "@/stories/left-sidebar";
import Header from "@/stories/header";
import TaskManagementToolbar from "@/stories/task-managment-toolbar";
import { fetchDirectories, fetchTasks } from "@/lib/utils";
import DirectoriesProvider from "@/context/DirectoryProvider";
import TaskProvider from "@/context/TaskProvider";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const directories = await fetchDirectories();
  const tasks = await fetchTasks();

  return (
    <ThemeProvider>
      <DirectoriesProvider directories={directories}>
        <TaskProvider tasks={tasks}>
          <section className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
            <LeftSidebar tabletOrMobile={false} />
            <main className="lg:col-span-4 px-4 overflow-x-hidden">
              <Header directories={directories} />
              <TaskManagementToolbar directories={directories} />
              <div>{children}</div>
            </main>
            <RightSideBar tasks={tasks} />
          </section>
        </TaskProvider>
      </DirectoriesProvider>
    </ThemeProvider>
  );
}
