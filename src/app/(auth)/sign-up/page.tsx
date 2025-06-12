// "use client";
import FormSignup from "@/components/form-auth/form-signup";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up ",
};

const signUp = () => {
  return (
    <section>
      <FormSignup />
    </section>
  );
};

export default signUp;
