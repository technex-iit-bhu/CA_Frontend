import React, { FC } from 'react'
import Navbar from './navbar'
import AboutTechnex from './abouttechnex'

const Landingpage: FC = () => {
  return (
    <div className='scroll-smooth'>
        <div className="bg-[url('/bg_landing_page.webp')] bg-no-repeat bg-cover pb-48">
            <div className='pb-96'>
                <Navbar/>
            </div>
            <div className='ml-5 sm:ml-10 md:ml-20 lg:ml-40'>
                <h1 className='font-bold text-5xl sm:text-7xl pb-5'>Become Our <span className='text-[#A81F25] font-bold text-5xl sm:text-7xl pb-3'>Campus Ambassador</span></h1>
                <div className='text-lg font-normal'><p className='border-2 py-1 px-5 rounded-e-full rounded-s-full w-28'>Register</p></div>
            </div>
        </div>
        <AboutTechnex />
    </div>
  )
}

export default Landingpage