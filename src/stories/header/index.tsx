
import React from "react";
import { NavigationMenu } from "../../components/ui/navigation-menu";
import HeaderDestkop from "./header-destkop";
import HeaderMobile from "./header-mobile";
import HeaderTablet from "./header-tablet";
import { fetchDirectories } from "@/lib/utils";
import { Directory } from "@/types/types";

const Header = async({directories}:{directories:Directory[]}) => {
  
  return (
    <NavigationMenu className="py-3">
      <section className="hidden lg:block">
        <HeaderDestkop directories={directories} />
      </section>
      <section className="hidden md:block lg:hidden">
        <HeaderTablet directories={directories} />
      </section>
      <section className="sm:block md:hidden ">
        <HeaderMobile directories={directories} />
      </section>
    </NavigationMenu>
  );
};

export default Header;
