"use client";

import "./index.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/stories/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/stories/input";
import Link from "next/link";
import GoogleSignInButton from "../GoogleSignInButton";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    username: z.string().min(1, "Username is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have than 8 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

const FormSignup = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      }),
    });
    const data = await res.json();

    if (res.ok) {
      router.push("/sign-in");
    } else {
      // Set the error manually for the "email" field
      form.setError("email", {
        type: "server",
        message: data.message || "Something went wrong",
      });
    }
  };
  return (
    <section className="backdrop-blur-md bg-white/30 rounded-xl shadow-lg p-10 sm:w-96">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      {...field}
                      className="placeholder:text-gray-800"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="mail@example.com"
                      {...field}
                      className="placeholder:text-gray-800"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      className="placeholder:text-gray-800"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="form-label">
                    Re-Enter your password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Re-Enter your password"
                      type="password"
                      className="placeholder:text-gray-800"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full mt-6" type="submit">
            Sign up
          </Button>
        </form>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you don&apos;t have an account, please&nbsp;
          <Link className="text-blue-500 hover:underline" href="/sign-in">
            Sign in
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default FormSignup;
