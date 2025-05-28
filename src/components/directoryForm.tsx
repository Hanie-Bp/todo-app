"use client";
import React, { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/stories/input";
import { Button } from "@/stories/button";

type directoryFormProps = {
  dialogType: "create" | "edit";
  formData?: { name: string,id: string };
};

const formSchema = z.object({
  directoryName: z.string().min(1, "Directory name is required").max(20),
});

const DirectoryForm: FC<directoryFormProps> = ({ dialogType, formData }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      directoryName: formData?.name || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch(
        dialogType === "create"
          ? "/api/directories"
          : `/api/directories/${formData?.id}`,
        {
          method: dialogType === "create" ? "POST" : "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        // console.error("❌ Failed to create directory:", data.error || data);
        form.setError("directoryName", {
          type: "server",
          message: data.message || "Something went wrong",
        });
        return;
      }
      form.reset();
    } catch (error) {
      console.error("❌ Error submitting form:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="directoryName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Title</FormLabel>
              <FormControl className="w-full">
                {/* <Label>Title</Label> */}
                <Input
                  placeholder="Enter a directory name"
                  className="sm:w-[450px]"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          variant={"secondary"}
          size={"md"}
          className="px-4 py-2 text-base  sm:w-[20%]"
        >
          {dialogType === "create" ? "Create" : "Edit"}
        </Button>
      </form>
    </Form>
  );
};

export default DirectoryForm;
