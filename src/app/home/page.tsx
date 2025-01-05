import React from "react";
import { MdSearch } from "react-icons/md";
import ProductCard from "@/components/ProductCard";
import { shoes } from "@/data/content";
import Input from "@/shared/Input/Input";
import FooterBanner from "@/shared/Footer/FooterBanner";

const page = () => {
  return (
    <div className="">
      <div className="top-32 z-10 mt-3 items-center gap-5 space-y-5 bg-white py-3 px-3 lg:sticky lg:flex lg:space-y-0">
        <div className="flex flex-1 items-center gap-2 rounded-full border border-neutral-300 px-4">
          <MdSearch className="text-2xl text-neutral-500" />
          <Input
            type="password"
            rounded="rounded-full"
            placeholder="Search..."
            sizeClass="h-12 px-0 py-3"
            className="border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent"
          />
        </div>
      </div>
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
