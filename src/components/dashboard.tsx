import React from 'react';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className=''>
      <div className='relative mb-[100px] flex flex-col bg-background pl-[120px] pt-[200px] md:mb-[50px]'>
        <div className='align-left absolute bottom-[10px] left-5 flex text-5xl sm:text-center md:p-10 lg:p-10 lg:text-7xl'>
          <span className='text-white select-none'>Dashboard</span>
        </div>
      </div>
      <div className='px-[30px] md:px-[50px]'>
        <div className='z-0 rounded-[50px] bg-custom-gradient px-[50px] py-[30px] md:px-[30px]'>
          <div className='flex flex-col lg:flex-row'>
            <div className='mt-[-80px] flex flex-col'>
              <div className='h-[150px] w-[150px] select-none self-center rounded-full border-4 border-red bg-background lg:self-start'></div>
              <div className='flex flex-col pb-[30px] lg:pl-[20px] lg:pr-[60px]'>
                <p className='text-white select-none self-center text-center text-[30px] font-bold lg:self-start lg:text-left'>
                  Shivansh Bhatnagar
                </p>
                <p className='text-white select-none self-center text-[20px] lg:self-start'>
                  Rank:3
                </p>
                <p className='text-white select-none self-center text-[20px] lg:self-start'>
                  CA Id:000000000
                </p>
              </div>
            </div>

            <div className='h-[2px] w-auto bg-red lg:h-[250px] lg:w-[2px]'></div>
            <div className='lg: flex grow flex-col justify-center self-center px-[10px] py-[30px] sm:flex-row md:pb-[30px] md:pt-[30px] lg:pb-[100px] lg:pt-0'>
              <div className='mr-[10px] flex h-[100px] w-[100px] flex-col rounded-[25px] bg-black md:h-[200px] md:w-[200px] md:rounded-[50px]'>
                <p className='text-white mt-[15px] select-none self-center text-[10px] font-bold md:mt-[30px] md:text-[20px]'>
                  Tasks Done
                </p>
                <p
                  className='text-white select-none self-center text-[40px] font-bold md:text-[80px]'
                  style={{ fontFamily: 'Sedgwick Ave' }}
                >
                  69
                </p>
              </div>
              <div className='mr-[10px] mt-[10px] flex h-[100px] w-[100px] flex-col rounded-[25px] bg-black sm:mt-0 md:h-[200px] md:w-[200px] md:rounded-[50px]'>
                <p className='text-white mt-[15px] select-none self-center text-[10px] font-bold md:mt-[30px] md:text-[20px]'>
                  Total Tasks
                </p>
                <p
                  className='text-white select-none self-center text-[40px] font-bold md:text-[80px]'
                  style={{ fontFamily: 'Sedgwick Ave' }}
                >
                  200
                </p>
              </div>
              <div className='mr-[10px] mt-[10px] flex h-[100px] w-[100px] flex-col rounded-[25px] bg-black sm:mt-0 md:h-[200px] md:w-[200px] md:rounded-[50px]'>
                <p className='text-white mt-[15px] select-none self-center text-[10px] font-bold md:mt-[30px] md:text-[20px]'>
                  Points
                </p>
                <p
                  className='text-white select-none self-center text-[40px] font-bold md:text-[80px]'
                  style={{ fontFamily: 'Sedgwick Ave' }}
                >
                  232
                </p>
              </div>

            </div>
          </div>
          <div className='z-10 mb-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
            <p className='text-white select-none self-center text-[20px] font-bold md:self-start'>
              Next Milestone
            </p>
            <p className='text-white w-fit select-none self-center text-[15px] md:w-4/6 md:self-start'>
              Go and find a girl you virgin. Go and earn some money, so that
              atleast someone is attracted to your money if not YOU !
            </p>
            <button className='text-white mb-[10px] mt-[10px] h-[40px] w-[150px] select-none self-center rounded-[50px] bg-red text-[20px] font-bold md:w-[200px] md:self-end'>
              Courses
            </button>
          </div>
          <div className='z-10 mb-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
            <p className='text-white select-none self-center text-[20px] font-bold md:self-start'>
              Rewards at the end of the CA Program
            </p>
            <p className='text-white w-fit select-none self-center text-[15px] md:w-4/6 md:self-start'>
              istg youre still here ???? bitch go study, GSoC nikalo jaake, yeh
              CA, VA tab banna jab DU ke ho.{' '}
            </p>
            <button className='text-white mb-[10px] mt-[10px] h-[40px] w-[150px] select-none self-center rounded-[50px] bg-red text-[20px] font-bold md:w-[200px] md:self-end'>
              Awards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
