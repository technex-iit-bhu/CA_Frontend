import React, { FC } from 'react';
import Navbar from './navbar';
import Link from 'next/link';
import styles from '../styles/styles.module.css';

const Landingpage: FC = () => {
  return (
    <div className='scroll-smooth'>
      <div
        className={` ${styles.top} w-full bg-auto bg-fixed bg-center bg-no-repeat pb-8 xl:bg-cover xl:pb-16 2xl:pb-48`}
        id='top'
      >
        <div className='z-10 pb-96 lg:pb-64 xl:pb-96 '>
          <Navbar />
        </div>

        <div className='mb-5 ml-2 sm:ml-10 md:ml-20 lg:ml-40'>
          <h1 className='pb-1 font-spline text-3xl font-bold sm:pb-5 sm:text-6xl'>
            Become Our{' '}
            <span className='text-3xl font-bold text-[#A81F25] sm:text-6xl'>
              Campus Ambassador
            </span>
          </h1>
          <div className='text-lg font-normal'>
            <Link
              href={'/register'}
              className='w-28 rounded-e-full rounded-s-full border-2 px-5 py-1 font-spline hover:border-[#A81F25] hover:bg-[#191919] hover:text-[#A81F25]'
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
