import React from "react";
import { footerBannerData } from "@/data/content";
import Heading from "@/shared/Heading/Heading";

const FooterBanner = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-[#f85647] via-[#fc9cac] to-[#f85647] py-8 px-3 md:py-2 text-white sm:py-2">
      <Heading
        className="mb-0 text-center text-2xl sm:text-2xl"
        isMain
        isCenter
      >
        {footerBannerData.heading}
      </Heading>
    </div>
  );
};

export default FooterBanner;
