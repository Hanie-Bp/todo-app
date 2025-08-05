import { Task } from "@/types/types";

export function sortTasks(tasks: Task[], sort: string): Task[] {
  const copy = [...tasks];
  switch (sort) {
    case "earlier":
      return copy.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
    case "later":
      return copy.sort(
        (a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime()
      );
    case "completed":
      return copy.sort((a, b) => Number(b.completed) - Number(a.completed));
    case "uncompleted":
      return copy.sort((a, b) => Number(a.completed) - Number(b.completed));
    case "order":
      return copy.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ); //
    default:
      return copy.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }
}
