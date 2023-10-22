import React, { FC } from 'react'
import Navbar from './navbar'
import AboutTechnex from './abouttechnex'
import Link from 'next/link'

const Landingpage: FC = () => {
  return (
    <div className='scroll-smooth'>
        <div className="bg-[url('/bg_landing_page.webp')] bg-no-repeat bg-auto xl:bg-cover pb-8 xl:pb-16  2xl:pb-48">
            <div className='pb-96 lg:pb-64 xl:pb-96 z-10'>
                <Navbar/>
            </div>
            <div className='ml-2 sm:ml-10 md:ml-20 lg:ml-40'>
                <h1 className='font-bold text-3xl sm:text-6xl pb-1 sm:pb-5'>Become Our <span className='text-[#A81F25] font-bold text-3xl sm:text-6xl'>Campus Ambassador</span></h1>
                <div className='text-lg font-normal'><Link href={"/register"} className='border-2 hover:border-[#A81F25] hover:text-[#A81F25] hover:bg-[#191919] py-1 px-5 rounded-e-full rounded-s-full w-28'>Register</Link></div>
            </div>
        </div>
        <AboutTechnex />
    </div>
  )
}

export default Landingpage