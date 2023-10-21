import React from 'react'
import Image from 'next/image'

export default function profilet() {
    return (
    <div className='flex flex-col p-20  m-20 mb-10 '>
      <div className='mb-44'>
        <div className=' text-7xl  left-[130px]'>Profile</div>
      </div>
      <div className='bg-grey m-6 lg:w-[1129px] rounded-3xl'>
      <div className='flex p-20 flex-wrap items-center'>
        {/* left */}
        <div className='w-[300px] relative'>
          <div className=''>
            <Image src="/profile-user.webp" alt='image not found' height={230} width={230} className=' border-[5px] border-red rounded-full absolute left-0 -top-[200px]'/>
          </div>
          <div className='mt-[100px]'>
          <h1 className='text-5xl mb-4 '>AmuseBoucheSharma</h1>
          <p className=''>Hello I am a keen enthusiast in Machine Learning, Meko IG mein lelo plz I do bohot saara machine learning with my machine. </p>
          </div>
        </div>
        {/* middle line */}
        <div className='h-[400px] w-[1px] sm:hidden md:hidden lg:block  bg-red mr-8 ml-44 justify-center'></div>
        {/* <div className='mt mb pl-8 pr-8 hidden sm:block '>
        
        <Image 
        src={"/Line2.webp"}
        alt='line:)'
        width={1}
        height={100}
        className=''/>
        </div> 
         */}
        <div className='flex flex-col justify-center gap-8  '>
          <div className='flex lg:flex-row flex-col flex-wrap gap-8 bg-black2 lg:p-4 p-2 rounded-full'>
            <h2>College:</h2>
            <p>IIT BHU, they hate your guts</p>
          </div>
          <div className='flex gap-8 bg-black2 p-4 rounded-full'>
          <h2>Email-id:</h2>
            <p>random.random.mat22@itbhu.ac.in</p>
          </div>
          <div className='flex gap-8 bg-black2 p-4 rounded-full'>
          <h2>Phone No:</h2>
            <p>9004189582</p>
          </div>
          <div className='flex gap-8 bg-black2 p-4 rounded-full'>
            <h2>Address:</h2>
            <p>At home, IITB, Powai, Bombay</p>
          </div>
        </div>
      </div>
      </div>
    </div>)
  }
  