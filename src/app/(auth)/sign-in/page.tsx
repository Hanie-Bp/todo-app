// "use client";
import FormSignin from "@/components/form-auth/form-signin";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In ",
};

const SignIn = () => {
  return (
    <section>
      <FormSignin />
    </section>
  );
};

export default SignIn;
