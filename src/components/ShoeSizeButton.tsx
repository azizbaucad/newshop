"use client";

import type { FC } from "react";
import React from "react";

interface ShoeSizeButtonProps {
  size: string;
}

const ShoeSizeButton: FC<ShoeSizeButtonProps> = ({ size }) => {
  return (
    <span className="relative w-0 rounded-xl py-2 font-medium disabled:bg-gray disabled:text-neutral-500">
      {size}
    </span>
  );
};

export default ShoeSizeButton;
