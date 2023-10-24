import React from 'react';

export default function profile() {
  return (
    <div>
      <div className='relative mb-[100px] flex flex-col bg-background pl-[120px] pt-[200px] md:mb-[50px]'>
        <div className='align-left absolute bottom-[10px] left-5 flex text-5xl sm:text-center md:p-10 lg:p-10 lg:text-7xl'>
          <span className='text-white select-none'>Profile</span>
        </div>
      </div>
      <div className='px-[30px] md:px-[50px] '>
        <div className='z-0 mb-20 rounded-[50px]  bg-grey px-[50px] py-[30px] md:px-[30px]'>
          <div className='flex flex-col lg:flex-row  lg:pl-[50px] '>
            <div className='mt-[-80px] flex flex-col'>
              <div className='h-[300px] w-[300px] select-none self-center rounded-full border-4 border-red bg-background lg:self-start'></div>
              <div className='flex flex-col pb-[30px] pt-[20px] lg:w-[500px] lg:pl-[20px] lg:pr-[60px]'>
                <p className='text-white flex select-none flex-wrap self-center text-center text-[60px] font-bold lg:self-start lg:text-left'>
                  Amuse Bouche Sharma
                </p>
                <p className='text-white flex select-none flex-wrap self-center text-[25px] lg:self-start'>
                  Hello I am a keen enthusiast in Machine Learning, Meko IG mein
                  lelo plz I do bohot saara machine learning with my machine.{' '}
                </p>
              </div>
            </div>
            <div className='h-[2px] w-auto bg-red lg:h-[800px] lg:w-[2px]'></div>
            <div className='flex grow flex-col justify-center  gap-20 self-center  pt-[50px] lg:w-[400px] lg:pl-[50px] lg:pr-[100px] '>
              <div className='  mr-[10px] flex   flex-row gap-[20px] rounded-[25px] bg-black2 p-4 md:rounded-[50px]   lg:h-[80px] lg:w-[500px]'>
                <p className='text-white select-none self-center text-[10px] font-bold sm:text-[25px] '>
                  College:
                </p>
                <p className='text-white select-none self-center text-[10px] sm:text-[25px]   '>
                  IIT BHU, they hate your guts
                </p>
              </div>
              <div className='  mr-[10px] flex   flex-row gap-[20px] rounded-[25px] bg-black2 p-4 md:rounded-[50px]   lg:h-[80px] lg:w-[500px]'>
                <p className='text-white select-none self-center text-[10px] font-bold sm:text-[25px] '>
                  Email-id:
                </p>
                <p className='text-white select-none flex-wrap self-center text-[10px] sm:text-[25px]  '>
                  random.mat 22@itbhu.ac.in
                </p>
              </div>

              <div className='mr-[10px] flex   flex-row gap-[20px] rounded-[25px] bg-black2 p-4 md:rounded-[50px]   lg:h-[80px] lg:w-[500px]'>
                <p className='text-white select-none self-center text-[10px] font-bold sm:text-[25px]  '>
                  Phone No:
                </p>
                <p className='text-white select-none  self-center text-[10px] sm:text-[25px]'>
                  9004189582
                </p>
              </div>
              <div className='  mr-[10px] flex   flex-row gap-[20px] rounded-[25px] bg-black2 p-4 md:rounded-[50px]   lg:h-[80px] lg:w-[500px]'>
                <p className='text-white select-none self-center text-[10px] font-bold sm:text-[25px]  '>
                  Address:{' '}
                </p>
                <p className='text-white select-none  self-center text-[10px] sm:text-[25px]'>
                  At home, IITB, Powai, Bombay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto mb-[100px] flex w-[100px] items-center justify-center rounded-full bg-red p-6 md:w-[200px] md:p-6 lg:w-[393px] lg:p-6 '>
        <button className='sm:text-xl lg:text-4xl'>Dashboard</button>
      </div>
    </div>
  );
}
