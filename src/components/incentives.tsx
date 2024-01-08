import React from 'react';
import IncCarousel from './carousel';
import Navbar from './navbar';

const Incentive = () => {
  return (
    <div>
      <div className='z-10 pb-[110px] '>
        <Navbar />
      </div>
      <div className='relative mb-[20px] flex flex-col bg-background pl-[10px] pt-[50px]'>
        <div className=' absolute bottom-3 flex flex-col -space-y-10 ef:-space-y-16 sm:text-left md:-space-y-24 lg:-space-y-28'>
          <span className='text-[40px] text-red opacity-20 ef:text-[80px] md:text-[8rem] lg:text-[11rem]'>
            Incentives
          </span>
          <span className='text-white z-10 ml-1 select-none text-[20px] ef:ml-1.5 ef:text-4xl md:ml-2 md:text-[66px] lg:ml-3'>
            Incentives
          </span>
        </div>
      </div>

      <IncCarousel></IncCarousel>
    </div>
  );
};

export default Incentive;
