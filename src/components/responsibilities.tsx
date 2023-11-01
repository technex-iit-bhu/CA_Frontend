import React from 'react';
import ResponsibilityCarousel from './responsibility_carousel';

const Responsibilities = () => {
  return (
    <div>
      <div className='relative mb-[20px] flex flex-col bg-background pl-[10px] pt-[100px] lg:pt-[200px]'>
        <div className=' absolute bottom-3 flex flex-col -space-y-8 ef:-space-y-14 sm:text-left md:-space-y-20 lg:-space-y-28'>
          <span className='text-[36px] text-red opacity-20 ef:text-[60px] md:text-[6rem] lg:text-[8rem]'>
            Responsibilities
          </span>
          <span className='text-white z-10 ml-1 select-none text-[15px] ef:text-4xl md:pl-[4px] md:text-5xl lg:text-7xl'>
            Responsibilities
          </span>
        </div>
      </div>

      <ResponsibilityCarousel></ResponsibilityCarousel>
    </div>
  );
};

export default Responsibilities;
