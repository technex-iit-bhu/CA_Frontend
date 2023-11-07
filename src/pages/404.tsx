import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WarningTwoIcon } from '@chakra-ui/icons';

const ErrorPage = () => {
  return (
    <>
    <div className='z-10 flex items-center justify-between'>
    <Link href={"/"}>
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
      <span className='text-white mb-4 text-center text-[35px] ef:text-[4rem] md:text-[6rem] lg:text-[4.5rem] font-[900] tracking-[.75em]'>
        ERROR
      </span>
      <span className='tracking-[.25em] font-bold text-red opacity-50 text-[50px] ef:text-[5rem] md:text-[9rem] lg:text-[9rem]'>
        404
        <WarningTwoIcon className='scale-75' />
      </span>
      <span className='tracking-[.25em] font-bold text-red opacity-10 text-[50px] ef:text-[5rem] md:text-[9rem] lg:text-[9rem] relative bottom-[72px] right-[10px] lg:bottom-[205px] lg:right-[20px] md:bottom-[200px] md:right-[15px] ef:bottom-[110px] ef:right-[15px]'>
        404
        <WarningTwoIcon className='scale-75'/>
      </span>
    </div>
    </>
  );
};

export default ErrorPage;
