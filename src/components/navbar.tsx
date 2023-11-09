import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Hamburger from './hamburgermenu';

const Navbar: FC = () => {
  const [aboutColor, setAboutColor] = useState('red');
  const [incentivesColor, setIncentivesColor] = useState('white');
  const [contactusColor, setContactusColor] = useState('white');
  const [faqColor, setFaqColor] = useState('white');
  const [leaderboardColor, setLeaderBoardColor] = useState('white');

  useEffect(() => {
    if (window.location.pathname === '/index') {
      setAboutColor('red');
      setIncentivesColor('white');
      setContactusColor('white');
      setFaqColor('white');
      setLeaderBoardColor('white');
    } else if (window.location.pathname === '/incentivesPage') {
      setAboutColor('white');
      setIncentivesColor('red');
      setContactusColor('white');
      setFaqColor('white');
      setLeaderBoardColor('white');
    } else if (window.location.pathname === '/contactUsPage') {
      setAboutColor('white');
      setIncentivesColor('white');
      setContactusColor('red');
      setFaqColor('white');
      setLeaderBoardColor('white');
    } else if (window.location.pathname === '/faqs') {
      setAboutColor('white');
      setIncentivesColor('white');
      setContactusColor('white');
      setFaqColor('red');
      setLeaderBoardColor('white');
    } else if (window.location.pathname === '/leaderboard') {
      setAboutColor('white');
      setIncentivesColor('white');
      setContactusColor('white');
      setFaqColor('white');
      setLeaderBoardColor('red');
    }
  }, []);

  return (
    <div className='z-10 flex items-center justify-between'>
      <Link href={'/'}>
        <div className='-space-y-3 sm:-space-y-6'>
          <Image
            className='w-56 pl-1 pt-2 sm:w-72 sm:p-3'
            src={'/technex_logo.webp'}
            alt='technex logo'
            width={330}
            height={75}
          />
        </div>
      </Link>

      <div className='hidden space-x-10 p-3 pr-5 text-center text-xl font-bold cd:block '>
        <Link
          href='/'
          className={`relative text-${aboutColor} font-spline transition-all duration-500 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-3xl before:bg-gradient-to-r before:from-[#0087FF] before:to-[#A81F25] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100`}
        >
          About
        </Link>
        <Link
          href='/incentivesPage'
          className={`relative text-${incentivesColor} font-spline transition-all duration-500 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-[#0087FF] before:to-[#A81F25] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100`}
        >
          Incentives
        </Link>
        <Link
          href={'/contactUsPage'}
          className={`relative text-${contactusColor} font-spline transition-all duration-500 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-[#0087FF] before:to-[#A81F25] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100`}
        >
          ContactUs
        </Link>
        <Link
          href={'/faqs'}
          className={`relative text-${faqColor} font-spline transition-all duration-500 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-[#0087FF] before:to-[#A81F25] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100`}
        >
          FAQs
        </Link>
        <Link
          href={'/leaderboard'}
          className={`relative text-${leaderboardColor} font-spline transition-all duration-500 before:absolute before:-bottom-2 before:left-0 before:h-1 before:w-0 before:rounded-full before:bg-gradient-to-r before:from-[#0087FF] before:to-[#A81F25] before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:w-full hover:before:opacity-100`}
        >
          Leaderboard
        </Link>
        <Link
          href={'/login'}
          className='rounded-e-full rounded-s-full border-2 px-5 font-spline hover:border-[#A81F25] hover:bg-[#191919] hover:text-[#A81F25] sm:px-7 sm:py-1'
        >
          Login
        </Link>
      </div>
      <div className='flex p-1 sm:p-5 cd:hidden'>
        <Hamburger />
      </div>
    </div>
  );
};
export default Navbar;