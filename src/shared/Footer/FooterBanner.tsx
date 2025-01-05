import React from "react";

import { footerBannerData } from "@/data/content";
import Heading from "@/shared/Heading/Heading";

import ButtonPrimary from "../Button/ButtonPrimary";

const FooterBanner = () => {
  return (
    <div className="rounded-2xl bg-[url('/bgProducts.jpg')] bg-cover bg-center bg-no-repeat py-2 px-2 md:py-2 text-white sm:py-2">
      <Heading
        className="mb-0 text-center text-3xl sm:text-2xl"
        isMain
        isCenter
      >
        {footerBannerData.heading}
      </Heading>
      <p className="mx-auto w-[80%] text-center text-base sm:w-[90%] sm:text-sm md:w-[70%]">
        {footerBannerData.description}
      </p>
      {/* <div className="mt-10 flex items-center justify-center sm:mt-6 sm:hidden md:mt-6 md:hidden">
        <ButtonPrimary sizeClass="px-6 py-4">More about us</ButtonPrimary>
      </div> */}
    </div>
  );
};

export default FooterBanner;
