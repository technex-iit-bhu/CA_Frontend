import React from 'react';

export default function profile() {
  return (
    <div>
      {/* <div className='relative mb-[160px] flex flex-col  lg:pl-[68px] pl-[50px] pt-[80px] md:mb-[70px] lg:pb-[100px] md:pb-10'>
        <div className='flex flex-col sm:pb-10 -space-y-9 sm:-space-y-16 md:-space-y-16 lg:-space-y-20 xl:-space-y-25'>
          <span className='text-[62px]  font-bold text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem] font-spline'>
            Profile
          </span>
          <span className='text-white z-10 ml-1 select-none text-[25px]   ef:text-4xl md:ml-2 md:text-7xl lg:ml-3 font-spline'>Profile</span>
        </div>
      </div> */}
      <div className='relative  flex flex-col bg-background pl-[50px] pt-[120px] md:pt-[190px] lg:pt-[150px] sm:pt-[120px] ef:pt-[130px] md:mb-[180px] lg:pb-[100px] sm:mb-[150px] ef:mb-[170px] mb-[160px] md:pb-0'>
        <div className=' absolute bottom-3 flex flex-col -space-y-14 ef:-space-y-16 sm:text-left md:-space-y-32 '>
          <span className='text-[62px] font-bold text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
            Profile
          </span>
          <span className='text-white z-10 ml-1 select-none text-[25px] ef:text-4xl md:ml-2 md:text-6xl md:pt-3 lg:ml-3'>
            Profile
          </span>
        </div>
      </div>
      <div className='px-[30px] md:px-[50px] '>
        <div className='z-0 mb-20 rounded-[50px] bg-grey px-[50px]  md:px-[30px]'>
          <div className='flex flex-col lg:flex-row lg:pl-[0px] lg:pt-4 lg:pb-4   pb-10 '>
            <div className='mt-[-150px] flex flex-col'>
              <div className='h-[250px] w-[250px] select-none self-center rounded-full border-4 border-red bg-background '></div>
              <div className='flex flex-col  lg:w-[500px] lg:pl-[20px] '>
                <p className='text-white flex select-none flex-wrap self-center text-center lg:text-[50px] text-[30px] font-bold lg:self-start lg:text-left font-spline'>
                  Amuse Bouche Sharma
                </p>
                <p className='text-white flex select-none flex-wrap self-center lg:text-[20px] text-[15px] lg:self-start font-spline'>
                  Hello I am a keen enthusiast in Machine Learning, Meko IG mein
                  lelo plz I do bohot saara machine learning with my machine.{' '}
                </p>
              </div>
            </div>
            <div className='h-[2px] w-auto bg-red lg:h-[400px] lg:self-center lg:w-[2px] m-6 '></div>
            <div className='flex grow flex-col justify-center gap-[8px] self-center   lg:w-[200px] lg:pl-[30px] lg:pr-[30px] '>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2  p-6 md:rounded-[50px] font-spline'>
                <p className='text-white select-none font-bold text-[15px] '>
                  College:
                </p>
                <p className='text-white select-none sm:text-[15px] text-right font-spline'>
                  IIT BHU, they hate your guts
                </p>
              </div>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2 p-6 md:rounded-[50px] font-spline'>
                <p className='text-white select-none  font-bold text-[15px] '>
                  Email-id:
                </p>
                <p className='text-white select-none text-[15px] text-right font-spline'>
                  random.mat 22@itbhu.ac.in
                </p>
              </div>

              <div className='mr-[10px] flex flex-row gap-[15px] rounded-[25px] bg-black2 p-6 md:rounded-[50px] font-spline'>
                <p className='text-white select-none  font-bold text-[15px] '>
                  Phone No:
                </p>
                <p className='text-white select-none text-right text-[15px] font-spline'>
                  9004189582
                </p>
              </div>
              <div className='mr-[10px] flex flex-row gap-[10px] rounded-[25px] bg-black2 p-6 md:rounded-[50px]'>
                <p className='text-white select-none font-bold text-[15px] font-spline '>
                  Address:
                </p>
                <p className='text-white select-none text-right font-spline '>
                  At home, IITB, Powai, Bombay
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto mb-[100px] flex w-[100px] items-center justify-center rounded-full bg-red p-6 md:w-[200px] md:p-6 lg:w-[393px] lg:p-6 '>
        <button className='sm:text-xl lg:text-4xl font-spline'>Dashboard</button>
      </div>
    </div>
  );
}
