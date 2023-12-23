import React from 'react';
import Dashboard from '@/components/dashboard';
import DashboardTab from '@/components/dashboardTab';
import Navbar from '../components/navbar';

export default function DashboardPage() {
  return (
    <>
      <div className='z-10 pb-[110px] '>
        <Navbar />
      </div>
      <Dashboard />
{/*       <DashboardTab /> */}
      <div className='w-9/10  flex h-screen flex-col items-center justify-center'>
        <span className='text-white mb-4 text-center text-[35px] font-[900] tracking-[.75em] ef:text-[4rem] md:text-[6rem] lg:text-[4.5rem]'>
          TASKS
        </span>
        <span className='text-[50px] font-bold tracking-[.25em] text-red opacity-50 ef:text-[5rem] md:text-[9rem] lg:text-[9rem]'>
         COMING SOON
        </span>
        <span className='relative bottom-[72px] right-[10px] text-[50px] font-bold tracking-[.25em] text-red opacity-10 ef:bottom-[110px] ef:right-[15px] ef:text-[5rem] md:bottom-[200px] md:right-[15px] md:text-[9rem] lg:bottom-[205px] lg:right-[20px] lg:text-[9rem]'>
         COMING SOON
        </span>
      </div>

    </>
  );
}
