import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Check, MoreVertical, Star, Trash, X } from "lucide-react";
import { Button } from "../button";
import { Separator } from "../seperator";
import Link from "next/link";
import TaskForm from "../form-dialog";
import DialogComponent from "../dialog";
import { Directory, Task } from "@/types/types";
import { editTask } from "@/lib/actions/task.action";

export type TaskCardProps = {
  task: Task;
  directories: Directory[];
  viewMode: "grid" | "list";
};

const TaskCard: FC<TaskCardProps> = (props) => {
  const handleTaskCompleted = async () => {
    await editTask(props?.task?.id!, {
      ...props.task,
      completed: !props?.task?.completed,
    });
  };

    const handleTaskimportance = async () => {
    await editTask(props?.task?.id!, {
      ...props.task,
      important: !props?.task?.important,
    });
  };
  return (
    <section className="max-[440px]:w-[90%] w-[400px]  md:w-[90%]">
      <div className="flex justify-end">
        <Button variant={"warning"} className="text-sm rounded-md px-3 me-2">
          <Link href={`/directories/${props?.task?.directoryId}`}>
            {props.task.directoryName}
          </Link>
        </Button>
      </div>
      <Card
        className={`flex ${
          props.viewMode === "grid"
            ? "flex-col"
            : "justify-between items-center p-3"
        } bg-muted dark:border-none`}
      >
        <section className={`${props.viewMode === "list" && "flex flex-col"}`}>
          <CardHeader className={`${props.viewMode === "list" && "p-2 pb-3"}`}>
            <CardTitle className="font-bold text-xl text-primary">
              {props.task.title}
            </CardTitle>
          </CardHeader>
          <CardContent
            className={`flex flex-col  justify-around  pb-0 ${
              props.viewMode === "list" && "pl-2"
            }`}
          >
            <CardDescription
              className={`${
                props.viewMode === "grid" ? "min-h-28" : "min-h-14 pb-10"
              } `}
            >
              {props.task.description}
            </CardDescription>
            <section className="flex">
              <Calendar />
              <p className="ms-2">
                {new Date(props.task.dueDate).toLocaleDateString()}
              </p>
            </section>
          </CardContent>
        </section>

        <div
          className={`${
            props.viewMode === "grid" ? "flex justify-center" : "hidden"
          }`}
        >
          <Separator className="w-[90%] my-3  border border-dashed border-gray-400" />
        </div>

        <CardFooter
          className={`${
            props.viewMode === "grid"
              ? "pb-4"
              : "p-0  w-[40%] md:w-[35%] min-[900px]:w-[250px]"
          }`}
        >
          <section className="flex  w-full justify-between items-center">
            <Button
              variant={props.task.completed ? "unWarnung" : "warning"}
              size={"md"}
              className=""
              onClick={() => handleTaskCompleted()}
            >
              <p className="hidden md:block">
                {props?.task?.completed ? "completed" : "uncompleted"}
              </p>
              <div className="md:hidden">
                {props?.task?.completed ? <Check /> : <X />}
              </div>
            </Button>
            <div
              className={`flex ${
                props.viewMode === "grid" ? "w-1/3" : "w-[50%] md:w-1/3 "
              } justify-between items-center`}
            >
              <Star
                fill={`${props?.task?.important ? "red" : "none"}`}
                size={20}
                onClick={handleTaskimportance}
                className="cursor-pointer"
              />
              <DialogComponent
                dialogtype="delete"
                title="Are you sure?"
                description="This task will be deleted permanetly"
                deleteType="task"
                taskId={props?.task?.id}
              >
                <Trash size={20} className="cursor-pointer   mt-1" />
              </DialogComponent>

              <TaskForm
                formData={props?.task}
                directories={props.directories}
                formType={"edit"}
              >
                <MoreVertical size={20} className="cursor-pointer" />
              </TaskForm>
            </div>
          </section>
        </CardFooter>
      </Card>
    </section>
  );
};

export default TaskCard;
