import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div className='flex flex-col md:flex-row items-center sm:justify-between'>
                <Image
                className='p-3'
                src={"/technex_logo.webp"}
                alt='technex logo'
                width={330}
                height={75}/>
                <div className='space-x-10 p-3 pr-5 font-bold text-xl text-center'>
                    <Link href={"/about"} className='text-[#A81F25]'>About</Link>
                    <Link href={"/incentives"} className=''>Incentives</Link>
                    <Link href={"/contactus"} className=''>Contact Us</Link>
                    <Link href={"/faqs"} className=''>FAQs</Link>
                    <Link href={"/login"} className='border-2 sm:py-1 px-5 sm:px-7 rounded-e-full rounded-s-full'>Login</Link>
                </div>
            </div>
  )
}

export default Navbar