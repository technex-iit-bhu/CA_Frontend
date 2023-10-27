import React, { FC } from 'react';
import Navbar from './navbar';
import AboutTechnex from './abouttechnex';
import Link from 'next/link';

const Landingpage: FC = () => {
  return (
    <div className='scroll-smooth'>
      <div className="bg-[url('/bg_landing_page.webp')] bg-auto bg-no-repeat pb-8 xl:bg-cover xl:pb-16  2xl:pb-48">
        <div className='z-10 pb-96 lg:pb-64 xl:pb-96'>
          <Navbar />
        </div>
        <div className='ml-2 sm:ml-10 md:ml-20 lg:ml-40 ' >
          <h1 className='pb-1 text-3xl font-bold sm:pb-5 sm:text-6xl font-spline '>
            Become Our{' '}
            <span className='text-3xl font-bold text-[#A81F25] sm:text-6xl'>
              Campus Ambassador
            </span>
          </h1>
          <div className='text-lg font-normal'>
            <Link
              href={'/register'}
              className='w-28 rounded-e-full rounded-s-full border-2 px-5 py-1 hover:border-[#A81F25] hover:bg-[#191919] hover:text-[#A81F25] font-spline'
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <AboutTechnex />
    </div>
  );
};

export default Landingpage;
