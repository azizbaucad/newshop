import logo from './logo.png';


import Link from 'next/link';
import Image from 'next/image'; // Import Image from Next.js
import type { FC } from 'react';
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = 'hidden' }) => {
  return (
    <Link className="flex cursor-pointer items-center gap-2" href="/">
      {/* Replace the icon with an Image */}
      <Image
        src={logo} // Replace with the path to your image
        alt="HotKicks Logo"
        width={50} // Adjust dimensions as needed
        height={50}
        className="object-contain"
      />
      <span className={`${className} text-2xl font-bold`}>HotKicks.</span>
    </Link>
  );
};

export default Logo;

