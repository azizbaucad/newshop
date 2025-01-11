import logo from './logo.png';


import Link from 'next/link';
import Image from 'next/image'; 
import type { FC } from 'react';
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = 'hidden' }) => {
  return (
    <Link className="flex cursor-pointer items-center gap-2" href="/">
      <Image
        src={logo} 
        alt="MiniJaba Logo"
        width={50}
        height={50}
        className="object-contain"
      />
      <span className={`${className} text-2xl font-bold`}>MiniJaba.</span>
    </Link>
  );
};

export default Logo;

