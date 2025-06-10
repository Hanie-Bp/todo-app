// utils/getTaskbarInfo.ts

import { Directory } from "@/types/types";


interface TaskbarInfo {
  taskbarName: string;
  numberOfTasks: number;
}

export function getTaskbarInfo(path: string, directories: Directory[]): TaskbarInfo {
  let taskbarName = "All";
  let numberOfTasks = 0;

  if (path === "/") {
    taskbarName = "All";
    numberOfTasks = directories.reduce((count, dir) => count + (dir.tasks?.length || 0), 0);
  } else if (path === "/important-tasks") {
    taskbarName = "Important";
    const tasks = directories.flatMap((dir) => dir.tasks || []);
    numberOfTasks = tasks.filter((task) => task.important).length;
  } else if (path === "/completed-tasks") {
    taskbarName = "Completed";
    const tasks = directories.flatMap((dir) => dir.tasks || []);
    numberOfTasks = tasks.filter((task) => task.completed).length;
  } else if (path === "/uncompleted-tasks") {
    taskbarName = "Uncompleted";
    const tasks = directories.flatMap((dir) => dir.tasks || []);
    numberOfTasks = tasks.filter((task) => !task.completed).length;
  } else {
    const dirId = path.split("/")[2];
    const directory = directories.find((dir) => dir.id === dirId);
    if (directory) {
      taskbarName = directory.name;
      numberOfTasks = directory.tasks?.length || 0;
    }
  }

  return { taskbarName, numberOfTasks };
}
