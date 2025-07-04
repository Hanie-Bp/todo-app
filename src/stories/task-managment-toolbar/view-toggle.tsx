"use client";
import React from "react";
import { Button } from "../button";
import { LayoutGridIcon, List } from "lucide-react";
import { useDispatch } from "react-redux";
import {  AppDispatch } from "@/redux/store";
import { setViewMode } from "@/redux/slices/viewSlice"; 

const ViewToggle = () => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <section className="flex cursor-pointer items-center  justify-between">
      <Button variant={"ghost"} className="hover:bg-transparent"  onClick={() => dispatch(setViewMode('list'))}>
        <List className="text-accent-foreground" />
      </Button>
      <Button variant={"ghost"} className="hover:bg-transparent"  onClick={() => dispatch(setViewMode('grid'))}>
        <LayoutGridIcon className="text-secondary" />
      </Button>
    </section>
  );
};

export default ViewToggle;
