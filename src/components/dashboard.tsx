import React, { useState } from 'react';
import Image from 'next/image';

const Dashboard = () => {
  const [name, setName] = useState('John Doe');
  const [rank, setRank] = useState('1');
  const [caId, setCaId] = useState('CA2021001');
  const [tasksDone, setTasksDone] = useState('69');
  const [totalTasks, setTotalTasks] = useState('200');
  const [points, setPoints] = useState('232');

  return (
    <div className=''>
      <div className='relative mb-[100px] flex flex-col bg-background pl-[0px] pt-[100px] sm:pl-[40px] md:mb-[50px]'>
        <div className='lg:-space-y-15 flex flex-col -space-y-9 sm:-space-y-8 sm:pb-10 md:-space-y-8 xl:-space-y-20'>
          <div className='absolute font-spline text-[0px] font-bold text-[#A81F25] opacity-20 sm:text-[12.5vw]'>
            Dashboard
          </div>
          <div className='text-white z-10 transform select-none self-center pt-[90px] text-[10vw] transition duration-700 hover:scale-110 sm:self-start sm:text-[7vw] xl:pt-[200px]'>
            Dashboard
          </div>
        </div>
      </div>
      <div className='px-[30px] md:px-[50px]'>
        <div className='z-0 rounded-[50px] bg-custom-gradient px-[50px] py-[30px] md:px-[30px]'>
          <div className='flex flex-col lg:flex-row'>
            <div className='mt-[-80px] flex flex-col'>
              <div className='h-[150px] w-[150px] select-none self-center rounded-full border-4 border-red bg-background lg:self-start'></div>
              <div className='flex flex-col pb-[30px] font-spline lg:pl-[20px] lg:pr-[60px]'>
                <p className='text-white select-none self-center text-center text-[30px] font-bold lg:self-start lg:text-left'>
                  {name}
                </p>
                <p className='text-white select-none self-center text-[20px] lg:self-start'>
                  Rank:{rank}
                </p>
                <p className='text-white select-none self-center text-[20px] lg:self-start'>
                  CA Id:{caId}
                </p>
              </div>
            </div>

            <div className='h-[2px] w-auto bg-red lg:h-[250px] lg:w-[2px]'></div>
            <div className='lg: flex grow flex-col justify-center self-center px-[10px] py-[30px] sm:flex-row md:pb-[30px] md:pt-[30px] lg:pb-[100px] lg:pt-0'>
              <div className='mr-[10px] flex h-[100px] w-[100px] flex-col rounded-[25px] bg-background md:h-[200px] md:w-[200px] md:rounded-[50px]'>
                <p className='text-white mt-[15px] select-none self-center font-spline text-[10px] font-bold md:mt-[30px] md:text-[20px]'>
                  Tasks Done
                </p>
                <p
                  className='text-white select-none self-center text-[40px] font-bold md:text-[80px]'
                  style={{ fontFamily: 'Sedgwick Ave' }}
                >
                  {tasksDone}
                </p>
              </div>
              <div className='mr-[10px] mt-[10px] flex h-[100px] w-[100px] flex-col rounded-[25px] bg-background sm:mt-0 md:h-[200px] md:w-[200px] md:rounded-[50px]'>
                <p className='text-white mt-[15px] select-none self-center font-spline text-[10px] font-bold md:mt-[30px] md:text-[20px]'>
                  Total Tasks
                </p>
                <p
                  className='text-white select-none self-center text-[40px] font-bold md:text-[80px]'
                  style={{ fontFamily: 'Sedgwick Ave' }}
                >
                  {totalTasks}
                </p>
              </div>
              <div className='mr-[10px] mt-[10px] flex h-[100px] w-[100px] flex-col rounded-[25px] bg-background sm:mt-0 md:h-[200px] md:w-[200px] md:rounded-[50px]'>
                <p className='text-white mt-[15px] select-none self-center font-spline text-[10px] font-bold md:mt-[30px] md:text-[20px]'>
                  Points
                </p>
                <p
                  className='text-white select-none self-center text-[40px] font-bold md:text-[80px]'
                  style={{ fontFamily: 'Sedgwick Ave' }}
                >
                  {points}
                </p>
              </div>
            </div>
          </div>
          {/* <div className='z-10 mb-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px] '>
            <p className='text-white select-none self-center font-spline text-[20px] font-bold md:self-start'>
              Next Milestone
            </p>
            <p className='text-white w-fit select-none self-center font-spline text-[15px] md:w-4/6 md:self-start'>
              Go and find a girl you virgin. Go and earn some money, so that
              atleast someone is attracted to your money if not YOU !
            </p>
            <button className='text-white mb-[10px] mt-[10px] h-[40px] w-[150px] select-none self-center rounded-[50px] bg-red font-spline text-[20px] font-bold md:w-[200px] md:self-end'>
              Courses
            </button>
          </div> */}
          <div className='z-10 mb-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
            <p className='text-white select-none self-center font-spline text-[20px] font-bold md:self-start'>
              Rewards at the end of the CA Program
            </p>
            <p className='text-white w-fit select-none self-center font-spline text-[15px] md:w-4/6 md:self-start'>
              istg youre still here ???? bitch go study, GSoC nikalo jaake, yeh
              CA, VA tab banna jab DU ke ho.{' '}
            </p>
            <button className='text-white mb-[10px] mt-[10px] h-[40px] w-[150px] select-none self-center rounded-[50px] bg-red font-spline text-[20px] font-bold md:w-[200px] md:self-end'>
              Awards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
