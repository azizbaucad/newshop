import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonCircle3 from "@/shared/Button/ButtonCircle3";

import logo from "./logo.png";
import { FaLocationDot, FaWhatsapp } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-5">
      <div className="self-start mb-5">
        <Link href="/">
          <ButtonCircle3 size="w-10 h-10" className="border border-neutral-300 hover:border-neutral-500">
            <MdArrowBack className="text-2xl" />
          </ButtonCircle3>
        </Link>
      </div>
      <div className="mb-5 mt-0">
        <Image
          src={logo}
          alt="Minijaba Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-5">Contactez-nous</h1>
      <p className="text-center text-neutral-500 mb-5">
        Nous sommes là pour répondre à vos questions et vous accompagner.
      </p>
      <div className="flex flex-col items-center gap-8">
        <a
          href="https://wa.me/+221771268675"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-emerald-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-600"
        >
          <FaWhatsapp />
          <span>Contactez-nous sur WhatsApp</span>
        </a>
        <a
          href="mailto:support@minijaba.com"
          className="flex items-center gap-3 bg-blue-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-600"
        >
          <FaMailBulk />
          <span>Envoyez-nous un email</span>
        </a>
      </div>

      <div className="flex items-center space-x-3 mt-10">
        <FaLocationDot size={24} color="blue" />
        <p className="text-neutral-500">DAKAR - OUEST FOIRE PLLE Nº 55 DAKAR</p>
      </div>
      <footer className="mt-20 text-center text-neutral-500">
        &copy; {new Date().getFullYear()} Minijaba. Tous droits réservés.
      </footer>
    </div>
  );
};

export default page;
