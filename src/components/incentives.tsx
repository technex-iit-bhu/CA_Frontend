import React from 'react';
import IncentivesCarousel from './carousel';

const Incentive = () => {
  return (
    <div>
      <div className='relative mb-[20px] flex flex-col bg-background pl-[10px] pt-[200px]'>
        <div className=' absolute bottom-3 flex flex-col -space-y-14 ef:-space-y-16 sm:text-left md:-space-y-32 '>
          <span className='text-[62px] font-bold text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
            Incentives
          </span>
          <span className='text-white z-10 ml-1 select-none text-[25px] ef:text-4xl md:ml-2 md:text-7xl lg:ml-3'>
            Incentives
          </span>
        </div>
      </div>

      <IncentivesCarousel></IncentivesCarousel>
    </div>
  );
};

export default Incentive;
