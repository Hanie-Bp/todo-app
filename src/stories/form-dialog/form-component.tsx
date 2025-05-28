"use client";
import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "../button";
import { Input } from "../input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { getTodayDate } from "@/utils/dateFunctions";
import { Checkbox } from "../../components/ui/checkbox";

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  dueDate: z.string().min(10, "date must be at least 10 characters"),
  description: z
    .string()
    .min(4, "Description must be at least 4 characters")
    .optional(),
  directory: z.string().optional(),
  important: z.boolean().optional(),
  complete: z.boolean().optional(),
});

type FormDataProps = {
  formData?: {
    important: boolean;
    completed: boolean;
    title: string;
    description: string;
    dueDate: string;
    directoryName: string;
  };
  directories: string[];
};


const FormComponent = ({ formData, directories }: FormDataProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: formData?.title || "",
      dueDate: formData?.dueDate || getTodayDate().inputFormat,
      description: formData?.description || "",
      directory: formData?.directoryName || "",
      important: formData?.important || false,
      complete: formData?.completed || false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
  // const dirId = await fetch(`/api/directories/${values.directory}`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 text-primary"
      >
        {/* Title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g, study for the test"
                  className="bg-muted focus:border focus:border-secondary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-[13px]" />
            </FormItem>
          )}
        />

        {/* Date */}
        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className="date-input bg-muted focus:border focus:border-secondary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-[13px]" />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g, study for the test"
                  className="bg-muted focus:border focus:border-secondary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-[13px]" />
            </FormItem>
          )}
        />

        {/* Directory */}
        <FormField
          control={form.control}
          name="directory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a directory</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-muted focus:border focus:border-secondary">
                    <SelectValue placeholder="Main" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-background">
                  {directories?.map((dir) => (
                    <SelectItem key={dir} value={dir}>
                      {dir.charAt(0).toUpperCase() + dir.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-red-500 text-[13px]" />
            </FormItem>
          )}
        />

        {/* Important */}
        <FormField
          control={form.control}
          name="important"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="rounded-lg border-none bg-muted data-[state=checked]:bg-secondary   data-[state=checked]:text-white  data-[state=checked]:border-none"
                />
              </FormControl>
              <FormLabel className="!m-0">Mark as important</FormLabel>
            </FormItem>
          )}
        />

        {/* Complete */}
        <FormField
          control={form.control}
          name="complete"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="rounded-lg border-none bg-muted data-[state=checked]:bg-secondary   data-[state=checked]:text-white  data-[state=checked]:border-none"
                />
              </FormControl>
              <FormLabel className="!m-0">Mark as complete</FormLabel>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="text-sm w-full dark:text-white"
          variant={"secondary"}
        >
          Add a task
        </Button>
      </form>
    </Form>
  );
};

export default FormComponent;
