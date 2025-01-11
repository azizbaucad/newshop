"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { FC } from "react";
import React from "react";
import { GoDotFill } from "react-icons/go";
import { LuInfo } from "react-icons/lu";
import { MdStar } from "react-icons/md";
import { PiSealCheckFill } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";

import ImageShowCase from "@/components/ImageShowCase";
import ShoeSizeButton from "@/components/ShoeSizeButton";
import { shoeSizes } from "@/data/content";
import nike_profile from "@/images/nike_profile.jpg";
import ButtonCircle3 from "@/shared/Button/ButtonCircle3";
import Heading from "@/shared/Heading/Heading";
import { AiOutlineClockCircle } from "react-icons/ai";

interface SectionProductHeaderProps {
  shots: StaticImageData[];
  shoeName: string;
  prevPrice: number;
  currentPrice: number;
  rating: number;
  pieces_sold: number;
  reviews: number;
}


const sendWhatsAppMessages = (
  shoeName: string,
  price: number,
) => {
  const message = `Hello! I'm interested in the product "${shoeName}" priced at $${price}.`;
  const phoneNumbers = ["+221784726944"];

  phoneNumbers.forEach((phone, index) => {
    setTimeout(() => {
      const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappURL, "_blank");
    }, index * 500); 
  });
};

const SectionProductHeader: FC<SectionProductHeaderProps> = ({
  shots,
  shoeName,
  currentPrice,
  rating,
  pieces_sold,
  reviews,
}) => {

  return (
    <div className="items-stretch justify-between space-y-10 lg:flex lg:space-y-0">
      <div className="basis-[50%]">
        <ImageShowCase shots={shots} />
      </div>

      <div className="basis-[45%]">
        <Heading className="mb-0" isMain title="new arrival!">
          {shoeName}
        </Heading>

        <div className="mb-10 flex items-center">
          <div className="flex items-center gap-1">
            <ButtonCircle3
              className="overflow-hidden border border-neutral-400"
              size="w-11 h-11"
            >
              <Image
                src={nike_profile}
                alt="nike_profile"
                className="h-full w-full object-cover"
              />
            </ButtonCircle3>
            <span className="font-medium">Nike</span>
            <PiSealCheckFill className="text-blue-600" />
          </div>
          <GoDotFill className="mx-3 text-neutral-500" />
          <div className="flex items-center gap-1">
            <MdStar className="text-yellow-400" />
            <p className="text-xs">
              {rating}{" "}
              <span className="text-neutral-500 text-sm">{`(Vendu ${reviews} fois)`}</span>
            </p>
          </div>
          <GoDotFill className="mx-3 text-neutral-500" />
          <p className="text-neutral-500 text-xs">{`${pieces_sold} paires disponible`}</p>
        </div>

        <div className="mb-5 space-y-1">
          <h1 className="text-3xl font-medium">${currentPrice}</h1>
        </div>

        <div className="mb-5 flex items-end justify-between">
          <p className="flex items-center gap-1 text-sm text-neutral-500">
            Vous pouvez Capturer l'image et l'envoyer par whatsapp <LuInfo />
          </p>
        </div>

        <div className="items-start justify-between">
          <p className="text-xm">Taille disponible</p>
          <div className="grid grid-cols-5 gap-1">
            {shoeSizes.map((size) => (
              <ShoeSizeButton key={size} size={size} />
            ))}
          </div>
        </div>
        
        <div className="mt-5">
          <h5 className="mb-2 flex items-center gap-2 text-lg font-medium">
            Contacter le vendeur via WhatsApp{" "}
            <RiWhatsappFill size={30} className="text-emerald-500" />
          </h5>
          <p className="flex items-center gap-2 text-sm text-neutral-500">
            <AiOutlineClockCircle size={20} color="#0000FF" />
            Disponible 24h/24 et 7 jours/7. Nous sommes là pour vous aider avec
            plaisir !
          </p>
        </div>
        <div className="mt-5 flex gap-3">
          <button
            onClick={() =>
              sendWhatsAppMessages(shoeName, currentPrice)
            }
            className="w-full rounded-full bg-emerald-500 py-3 text-white text-center font-medium hover:bg-green-600"
          >
            Numéro Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionProductHeader;
