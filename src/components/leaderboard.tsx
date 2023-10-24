import React from 'react';

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
      <div className='relative mb-[100px] flex flex-col bg-background pl-[120px] pt-[200px] md:mb-[50px]'>
        <div className='align-left absolute bottom-[10px] left-5 flex text-5xl sm:text-center md:p-10 lg:p-10 lg:text-7xl'>
          <span className='text-white select-none'>Leaderboard</span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className=' mx-9 mb-10 pb-10'>
      <div className='px-[30px] md:px-[20px]'>
        <div className='flex flex-col lg:flex-row lg:justify-center'>


        <div className='bg-custom-gradient-2 relative z-0 mr-2 h-[120px]  md:h-[200px] w-full rounded-[40px] px-5 py-3 mb-[50px]'>
            <div className='flex flex-col lg:flex-row'>
              <div className=' mt-[-40px]  md:mt-[-60px] flex flex-col'>
                <p className='text-white select-none self-center text-center text-[30px]  md:text-[50px] font-bold lg:self-start lg:text-left'>
                  6969
                </p>
                <div className='flex flex-row pb-2 lg:pl-4 lg:pr-8 '>
                  <div className='mr-2 h-[60px] w-[60px] md:h-[100px] md:w-[100px] select-none self-center rounded-full border-4 border-red bg-background '></div>
                  <div className='flex flex-col'>
                    <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                      King
                    </p>
                    <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                      Lebron
                    </p>
                  </div>
                </div>
                <div className='text-white absolute inset-x-0 bottom-0 flex select-none items-center justify-center text-[9px] md:text-[15px]'>
                  CA Id:000000000
                </div>
              </div>
            </div>
          </div>



          <div className='bg-custom-gradient-2 relative z-0 mr-2 h-[120px]  md:h-[200px] w-full rounded-[40px] px-5 py-3 mb-[50px]'>
            <div className='flex flex-col lg:flex-row'>
              <div className=' mt-[-40px]  md:mt-[-60px] flex flex-col'>
                <p className='text-white select-none self-center text-center text-[30px]  md:text-[50px] font-bold lg:self-start lg:text-left'>
                  6969
                </p>
                <div className='flex flex-row pb-2 lg:pl-4 lg:pr-8 '>
                  <div className='mr-2 h-[60px] w-[60px] md:h-[100px] md:w-[100px] select-none self-center rounded-full border-4 border-red bg-background '></div>
                  <div className='flex flex-col'>
                    <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                      Leroy
                    </p>
                    <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                      Sane
                    </p>
                  </div>
                </div>
                <div className='text-white absolute inset-x-0 bottom-0 flex select-none items-center justify-center text-[9px] md:text-[15px]'>
                  CA Id:000000000
                </div>
              </div>
            </div>
          </div>




          <div className='bg-custom-gradient-2 relative z-0 mr-2 h-[120px]  md:h-[200px] w-full rounded-[40px] px-5 py-3 mb-[50px]'>
            <div className='flex flex-col lg:flex-row'>
              <div className=' mt-[-40px]  md:mt-[-60px] flex flex-col'>
                <p className='text-white select-none self-center text-center text-[30px]  md:text-[50px] font-bold lg:self-start lg:text-left'>
                  6969
                </p>
                <div className='flex flex-row pb-2 lg:pl-4 lg:pr-8 '>
                  <div className='mr-2 h-[60px] w-[60px] md:h-[100px] md:w-[100px] select-none self-center rounded-full border-4 border-red bg-background '></div>
                  <div className='flex flex-col'>
                    <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                      Saksham 
                    </p>
                    <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                      Misra
                    </p>
                  </div>
                </div>
                <div className='text-white absolute inset-x-0 bottom-0 flex select-none items-center justify-center text-[9px] md:text-[15px]'>
                  CA Id:000000000
                </div>
              </div>
            </div>
          </div>

        </div>
        

        <div
          className='z-0 h-[400px] rounded-[50px] bg-custom-gradient px-[20px] py-[30px]  md:px-[20px] '
          style={{ maxHeight: '400px', overflowY: 'auto' , overflowX: 'auto'}}
        >
          <div className='z-10 my-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
            <div className='flex h-[80px] flex-wrap content-center justify-between '>
              <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold self-start'>
                4
              </p>
              <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                Priyadarshi
              </p>
              <p className='text-white select-none mr-3 text-[10px] md:text-[15px] font-bold md:self-start'>
                CA:108977678909876
              </p>
              <p className='text-white select-none mr-3 text-[10px] md:text-[20px] font-bold md:self-start'>
                Points:345
              </p>
            </div>
          </div>
          <div className='z-10 my-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
            <div className='flex h-[80px] flex-wrap content-center justify-between '>
              <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold self-start'>
                5
              </p>
              <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                Shivansh
              </p>
              <p className='text-white select-none mr-3 text-[10px] md:text-[15px] font-bold md:self-start'>
                CA:108977678909876
              </p>
              <p className='text-white select-none mr-3 text-[10px] md:text-[20px] font-bold md:self-start'>
                Points:345
              </p>
            </div>
          </div>
          <div className='z-10 my-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
            <div className='flex h-[80px] flex-wrap content-center justify-between '>
              <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold self-start'>
                6
              </p>
              <p className='text-white mr-3 select-none  text-[20px] md:text-[30px] font-bold md:self-start'>
                Anoushka
              </p>
              <p className='text-white select-none mr-3 text-[10px] md:text-[15px] font-bold md:self-start'>
                CA:108977678909876
              </p>
              <p className='text-white select-none mr-3 text-[10px] md:text-[20px] font-bold md:self-start'>
                Points:345
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Leaderboard;

