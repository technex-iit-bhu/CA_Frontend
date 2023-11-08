import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Progress } from '@chakra-ui/react';

const Loading = () => {
  return (
    <>
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
      </div>
      <div className='w-9/10  flex h-screen flex-col items-center justify-center'>
        <span className='text-white mb-4 text-center font-[900] tracking-[.75em] ef:text-[4rem] md:text-[6rem] lg:text-[4.5rem]'>
          &nbsp;&nbsp;
        </span>
        <span className='scale-50 text-[60px] font-bold tracking-[.25em] text-red opacity-50 ef:text-[6rem] md:text-[9rem] lg:text-[9rem]'>
          LOADING
        </span>
        <span className='relative bottom-[85px] right-[7px] scale-50 text-[60px] font-bold tracking-[.25em] text-red opacity-10 ef:bottom-[140px] ef:right-[8px] ef:text-[6rem] md:bottom-[205px] md:right-[10px] md:text-[9rem] lg:bottom-[208px] lg:right-[10px] lg:text-[9rem]'>
          LOADING
        </span>
        {/* <Progress colorScheme='green' size='md' isIndeterminate /> */}
        <span>
          <div className='demo-container'>
            <div className='progress-bar'>
              <div className='progress-bar-value'></div>
            </div>
          </div>
        </span>
      </div>
    </>
  );
};

export default Loading;
