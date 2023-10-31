import React from 'react';
import Image from 'next/image';
const ContactUs = () => {
  return (
    <div className='relative flex flex-col gap-[100px] bg-background p-[120px] '>
      <div className='align-right absolute bottom-[250px] right-5 flex gap-[4px] text-5xl sm:text-center md:p-2 lg:bottom-[120px] lg:p-20 lg:text-7xl font-spline  '>
        <span className='text-red'>Contact</span>
        <span className='text-white'>Us</span>
      </div>
      <div className='flex flex-col items-center gap-5 md:flex-row md:justify-evenly lg:flex-row lg:justify-evenly lg:gap-0'>
        <div className='flex items-center'>
          <div className='flex items-center justify-center gap-1 lg:gap-6'>
            <div className=''>
              <Image
                src={'/phone-call.webp'}
                alt='phone logo'
                width={30}
                height={30}
                className=''
              />
            </div>
            <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
              <h2 className='font-bold text-red'>Rhythm</h2>
              <div className=''>+91 0000000000</div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-center justify-center gap-1 lg:gap-6'>
            <div>
              <Image
                src={'/phone-call.webp'}
                alt='phone logo'
                width={30}
                height={30}
                className=''
              />
            </div>
            <div className='flex flex-col justify-center text-xs md:text-xl lg:text-3xl '>
              <h2 className='font-bold text-red'>Rhythm</h2>
              <div>+91 0000000000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
