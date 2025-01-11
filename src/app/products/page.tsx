import React from "react";
import ProductCard from "@/components/ProductCard";
import { shoes } from "@/data/content";
import FooterBanner from "@/shared/Footer/FooterBanner";

const page = () => {
  return (
    <div className="">
      <div className="container mt-2">
        <FooterBanner />
      </div>
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="relative flex-1">
          <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 ">
            {shoes.map((item) => (
              <ProductCard showPrevPrice product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </div>

      <div className="my-24"></div>
    </div>
  );
};

export default page;

export const PageProductHome = () => {
  return (
    <div className="">
      <div className="container mt-2">
        <FooterBanner />
      </div>
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="relative flex-1">
          <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 ">
            {shoes.map((item) => (
              <ProductCard showPrevPrice product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </div>

      <div className="my-24"></div>
    </div>
  );
};
