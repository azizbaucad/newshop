import React from "react";
import Logo from "@/shared/Logo/Logo";
import MenuBar from "./MenuBar";

const MainNav = () => {
  return (
    <div className="container flex items-center justify-between py-4">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-[60%]">
        <Logo />
        <div className="hidden lg:flex flex-col">
          <h1 className="text-lg font-semibold text-neutral-800">
            MiniJaba
          </h1>
          <p className="text-sm text-neutral-600">
            Nous offrons le meilleur des produits de qualité
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
