import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Hamburger from './hamburgermenu';

const Navbar: FC = () => {
  return (
    <div className='z-10 flex items-center justify-between'>
      <div className='-space-y-3 sm:-space-y-7'>
        <Image
          className='w-56 pl-1 pt-2 sm:w-auto sm:p-3'
          src={'/technex_logo.webp'}
          alt='technex logo'
          width={330}
          height={75}
        />
        <p className='ml-36 text-xs text-[#A81F25] sm:ml-56 sm:text-sm sm:font-semibold lg:text-base'>
          15-17 MAR 2024
        </p>
      </div>
      <div className='hidden space-x-10 p-3 pr-5 text-center text-xl font-bold cd:block'>
        <Link
          href={'/about'}
          className="relative
                text-[#A81F25]
                transition-all
                duration-500
                before:absolute
                before:-bottom-2
                before:left-0
                before:h-1
                before:w-0
                before:rounded-3xl
                before:bg-gradient-to-r
                before:from-[#0087FF]
                before:to-[#A81F25]
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:before:w-full
                hover:before:opacity-100"
        >
          About
        </Link>
        <Link
          href={'/incentives'}
          className="
                relative
                transition-all
                duration-500
                before:absolute
                before:-bottom-2
                before:left-0
                before:h-1
                before:w-0
                before:rounded-full
                before:bg-gradient-to-r
                before:from-[#0087FF]
                before:to-[#A81F25]
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:before:w-full
                hover:before:opacity-100"
        >
          Incentives
        </Link>
        <Link
          href={'/contactus'}
          className="
                relative
                transition-all
                duration-500
                before:absolute
                before:-bottom-2
                before:left-0
                before:h-1
                before:w-0
                before:rounded-full
                before:bg-gradient-to-r
                before:from-[#0087FF]
                before:to-[#A81F25]
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:before:w-full
                hover:before:opacity-100"
        >
          Contact Us
        </Link>
        <Link
          href={'/faqs'}
          className="
                relative
                transition-all
                duration-500
                before:absolute
                before:-bottom-2
                before:left-0
                before:h-1
                before:w-0
                before:rounded-3xl
                before:bg-gradient-to-r
                before:from-[#0087FF]
                before:to-[#A81F25]
                before:opacity-0
                before:transition-all
                before:duration-500
                before:content-['']
                hover:before:w-full
                hover:before:opacity-100">FAQs</Link>
        <Link href={"/leaderboard"} className="
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-0
                before:w-0
                before:h-1
                before:rounded-3xl
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-[#0087FF]
                before:to-[#A81F25]
                hover:before:w-full
                hover:before:opacity-100">Leaderboard</Link>
        <Link href={"/login"} className='border-2 hover:border-[#A81F25] hover:text-[#A81F25] hover:bg-[#191919] sm:py-1 px-5 sm:px-7 rounded-e-full rounded-s-full'>Login</Link>

      </div>
      <div className='flex p-1 sm:p-5 cd:hidden'>
        <Hamburger />
      </div>
    </div>
  );
};
export default Navbar;
