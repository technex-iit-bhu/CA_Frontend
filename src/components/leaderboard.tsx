import React from 'react';
import Link from 'next/link';
import Navbar from './navbar';

const Leaderboard = () => {
  return (
    <>
      {/* <div className='md:ml-22 ml-1 -space-y-10 sm:ml-10 sm:-space-y-20 md:-space-y-16 lg:ml-28 lg:-space-y-24 xl:ml-40'>
        <div className='-z-100 overflow-hidden'>
          <span className='text-7xl font-bold text-[#A81F25] opacity-30 sm:text-[100px] lg:text-[11rem] xl:text-[13rem]  '>
            Leaderboard
          </span>
        </div>
        <div className='z-0 ml-1 pb-10 sm:ml-4 lg:ml-8 xl:ml-10'>
          <span className='text-3xl font-extrabold sm:text-6xl md:text-6xl lg:text-7xl'>
            Leaderboard
          </span>
        </div>
      </div> */}
      {/* <div className='relative flex flex-col bg-background pl-[120px] pt-[200px] md:mb-[50px]'>
        <div className='align-left absolute bottom-[10px] left-5 flex text-5xl sm:text-center md:p-10 lg:p-10 lg:text-7xl'>
          <span className='text-white select-none font-spline'>
            Leaderboard
          </span>
        </div>
      </div> */}
      <div className='absolute z-20 w-full pb-96 lg:pb-64 xl:pb-96'>
        <Navbar />
      </div>

      <div className='relative mb-[20px] flex flex-col bg-background pl-[10px] lg:pt-[250px] pt-[200px]'>
        <div className=' absolute bottom-3 flex flex-col -space-y-14 ef:-space-y-16 sm:text-left md:-space-y-32'>
          <span className='text-[62px] font-bold text-red opacity-20 ef:text-[80px] sm:text-[5rem] md:text-[7rem] lg:text-[11rem]'>
            Leaderboard
          </span>
          <span className='text-white z-10 ml-1 select-none text-[25px] ef:text-4xl md:ml-2 md:text-7xl lg:ml-3 sm:text-3xl'>
            Leaderboard
          </span>
        </div>
      </div>

      <div className=' mx-9 mb-10 pb-10 lg:pt-[10rem]'>
        <div className='px-[30px] md:px-[20px]'>
          <div className='flex flex-col lg:flex-row lg:justify-center'>
            {/* <div className='relative z-0 mb-[50px] mr-2 h-[120px]  w-full rounded-[40px] bg-custom-gradient-2 px-5 py-3 md:h-[200px]'>
              <div className='flex flex-col lg:flex-row'>
                <div className=' mt-[-40px]  flex flex-col md:mt-[-60px]'>
                  <p className='text-white select-none self-center text-center text-[30px]  font-bold md:text-[50px] lg:self-start lg:text-left'>
                    6969
                  </p>
                  <div className='flex flex-row pb-2 lg:pl-4 lg:pr-8 '>
                    <div className='mr-2 h-[60px] w-[60px] select-none self-center rounded-full border-4 border-red bg-background md:h-[100px] md:w-[100px] '></div>
                    <div className='flex flex-col'>
                      <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                        King
                      </p>
                      <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                        Lebron
                      </p>
                    </div>
                  </div>
                  <div className='text-white absolute inset-x-0 bottom-0 flex select-none items-center justify-center font-spline text-[9px] md:text-[15px]'>
                    CA Id:000000000
                  </div>
                </div>
              </div>
            </div>

            <div className='relative z-0 mb-[50px] mr-2 h-[120px]  w-full rounded-[40px] bg-custom-gradient-2 px-5 py-3 md:h-[200px]'>
              <div className='flex flex-col lg:flex-row'>
                <div className=' mt-[-40px]  flex flex-col md:mt-[-60px]'>
                  <p className='text-white select-none self-center text-center text-[30px]  font-bold md:text-[50px] lg:self-start lg:text-left'>
                    6969
                  </p>
                  <div className='flex flex-row pb-2 lg:pl-4 lg:pr-8 '>
                    <div className='mr-2 h-[60px] w-[60px] select-none self-center rounded-full border-4 border-red bg-background md:h-[100px] md:w-[100px] '></div>
                    <div className='flex flex-col'>
                      <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                        Leroy
                      </p>
                      <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                        Sane
                      </p>
                    </div>
                  </div>
                  <div className='text-white absolute inset-x-0 bottom-0 flex select-none items-center justify-center font-spline text-[9px] md:text-[15px]'>
                    Coming Soon
                  </div>
                </div>
              </div>
            </div>

            <div className='relative z-0 mb-[50px] mr-2 h-[120px]  w-full rounded-[40px] bg-custom-gradient-2 px-5 py-3 md:h-[200px]'>
              <div className='flex flex-col lg:flex-row'>
                <div className=' mt-[-40px]  flex flex-col md:mt-[-60px]'>
                  <p className='text-white select-none self-center text-center text-[30px]  font-bold md:text-[50px] lg:self-start lg:text-left'>
                    6969
                  </p>
                  <div className='flex flex-row pb-2 lg:pl-4 lg:pr-8 '>
                    <div className='mr-2 h-[60px] w-[60px] select-none self-center rounded-full border-4 border-red bg-background md:h-[100px] md:w-[100px] '></div>
                    <div className='flex flex-col'>
                      <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                        Saksham
                      </p>
                      <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                        Misra
                      </p>
                    </div>
                  </div>
                  <div className='text-white absolute inset-x-0 bottom-0 flex select-none items-center justify-center font-spline text-[9px] md:text-[15px]'>
                    CA Id:000000000
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div
            className='z-0 h-[400px] rounded-[50px] bg-custom-gradient px-[20px] py-[30px] md:px-[20px] '
            style={{ maxHeight: '400px', overflowY: 'auto', overflowX: 'auto' }}
          >
            <h1 className='h-[100%] w-[100%] flex items-center justify-center lg:text-9xl sm:text-2xl'>Coming Soon</h1>
            {/* <div
              style={{
                backgroundColor: '#191919',
                borderRadius: '50px',
                // boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div className='z-10 my-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
                <div className='flex h-[80px] flex-wrap content-center justify-between '>
                  <p className='text-white mr-3 select-none  self-start text-[20px] font-bold md:text-[30px]'>
                    4
                  </p>
                  <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                    Priyadarshi
                  </p>
                  <p className='text-white mr-3 select-none font-spline text-[10px] font-bold md:self-start md:text-[15px]'>
                    CA:108977678909876
                  </p>
                  <p className='text-white mr-3 select-none font-spline text-[10px] font-bold md:self-start md:text-[20px]'>
                    Points:345
                  </p>
                </div>
              </div>
            </div> */}

            {/* <div
              style={{
                backgroundColor: '#191919',
                borderRadius: '50px',
                // boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.8)',
              }}
            >
              <div className='z-10 my-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
                <div className='flex h-[80px] flex-wrap content-center justify-between '>
                  <p className='text-white mr-3 select-none  self-start text-[20px] font-bold md:text-[30px]'>
                    5
                  </p>
                  <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                    Ujjwal
                  </p>
                  <p className='text-white mr-3 select-none font-spline text-[10px] font-bold md:self-start md:text-[15px]'>
                    CA:108977678909876
                  </p>
                  <p className='text-white mr-3 select-none font-spline text-[10px] font-bold md:self-start md:text-[20px]'>
                    Points:345
                  </p>
                </div>
              </div>
            </div> */}
              {/*
            <div
              style={{
                backgroundColor: '#191919',
                borderRadius: '50px',
                // boxShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.8)',
              }}
            >
               <div className='z-10 my-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
                <div className='flex h-[80px] flex-wrap content-center justify-between '>
                  <p className='text-white mr-3 select-none  self-start text-[20px] font-bold md:text-[30px]'>
                    6
                  </p>
                  <p className='text-white mr-3 select-none  font-spline text-[20px] font-bold md:self-start md:text-[30px]'>
                    Anoushka
                  </p>
                  <p className='text-white mr-3 select-none font-spline text-[10px] font-bold md:self-start md:text-[15px]'>
                    CA:108977678909876
                  </p>
                  <p className='text-white mr-3 select-none font-spline text-[10px] font-bold md:self-start md:text-[20px]'>
                    Points:345
                  </p>
                </div>
              </div> 
            </div>
            */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Leaderboard;
