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

export type TaskCardProps = {
  important: boolean;
  completed: boolean;
  title: string;
  description: string;
  date: string;
  directoryName: string;
};

const TaskCard: FC<TaskCardProps> = (props) => {
  return (
    <section>
      <div className="flex justify-end">
        <Button variant={"warning"} className="text-sm rounded-md px-3 me-2">
          <Link href={"/"}>{props.directoryName}</Link>
        </Button>
      </div>
      <Card className="flex flex-col bg-muted">
        <CardHeader>
          <CardTitle className="font-bold text-xl text-primary">
            {props.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col  justify-around  pb-0">
          <CardDescription className="min-h-28">
            {props.description}
          </CardDescription>
          <section className="flex">
            <Calendar />
            <p className="ms-2">{props.date}</p>
          </section>
        </CardContent>

        <div className="flex justify-center">
          <Separator className="w-[90%] my-3  border border-dashed border-gray-400" />
        </div>

        <CardFooter className="pb-4">
          <section className="flex  w-full justify-between items-center">
            <Button
              variant={props.completed ? "unWarnung" : "warning"}
              size={"md"}
              className=""
            >
              <p className="hidden md:block">
                {props.completed ? "completed" : "uncompleted"}
              </p>
              <div className="md:hidden">
                {props.completed ? <Check /> : <X />}
              </div>
            </Button>
            <div className="flex w-1/3 justify-between items-center">
              <Star
                fill={`${props.important ? "red" : "none"}`}
                size={20}
                className="cursor-pointer"
              />
              <DialogComponent
                dialogtype="delete"
                title="Are you sure?"
                description="This task will be deleted permanetly"
              >
                <Trash size={20} className="cursor-pointer" />
              </DialogComponent>

              <TaskForm formData={props}>
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
