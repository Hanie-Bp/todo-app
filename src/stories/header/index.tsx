import React from "react";
import { NavigationMenu } from "../ui/navigation-menu";
import HeaderDestkop from "./header-destkop";
import HeaderMobile from "./header-mobile";
import HeaderTablet from "./header-tablet";

const Header = () => {
  return (
    <NavigationMenu className="py-3">
      <section className="hidden lg:block">
        <HeaderDestkop />
      </section>
      <section className="hidden md:block lg:hidden">
        <HeaderTablet />
      </section>
      <section className="sm:block md:hidden ">
        <HeaderMobile />
      </section>
    </NavigationMenu>
  );
};

export default Header;
