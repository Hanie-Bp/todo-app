"use client";
import React from "react";
import { Input } from "../input";
import { Search } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRouter, useSearchParams } from "next/navigation";

const formSchema = z.object({
  searchText: z.string(),
});

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchText: searchParams.get("search") || "",
    },
  });

  const handleLiveChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value.trim() === "") {
      newParams.delete("search");
    } else {
      newParams.set("search", value);
    }
    router.push(`?${newParams.toString()}`);
  };

  return (
    <Form {...form}>
      <form className="relative max-w-fit space-y-4">
        <FormField
          control={form.control}
          name="searchText"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative max-w-fit">
                  <Search className="absolute right-3 top-[9px] text-muted-dark h-5 w-5 pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Search Task"
                    className="w-[95vw] md:w-72 pl-4 pr-10 py-3 border-none bg-muted placeholder-muted-dark "
                    {...field}
                    onChange={(e) => {
                      field.onChange(e); 
                      handleLiveChange(e.target.value); 
                    }}
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red-500 text-sm mt-1" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchInput;
