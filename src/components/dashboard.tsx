import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [rank, setRank] = useState('NaN');
  const [caId, setCaId] = useState('XXXXXXXXXX');
  const [tasksDone, setTasksDone] = useState('NaN');
  const [totalTasks, setTotalTasks] = useState('0');
  const [points, setPoints] = useState('NaN');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(
          'https://ca-backend-467n.onrender.com/auth/user/profile',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 200) {
          const fetchedDetails = await response.json();
          setName(
            `${fetchedDetails.userprofile.first_name} ${fetchedDetails.userprofile.last_name}`
          );
          setPoints(fetchedDetails.userprofile.points);
          setCaId(fetchedDetails.userprofile.unique_id.slice(-8));
        } else {
          console.error('Failed to fetch profile');
        }
      } catch (error) {
        console.error('Server error', error);
      }
    };
    const getTasks = async () => {
      const response = await fetch(
        'https://ca-backend-467n.onrender.com/tasks/',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        const fetchedTasks = await response.json();
        setTotalTasks(fetchedTasks.length);
      } else {
        console.error('Failed to fetch tasks');
      }
    };
    fetchDetails();
    getTasks();
  }, []);

  return (
    <div className=''>
      <div className='relative mb-[100px] flex flex-col bg-background pl-[0px] pt-[100px] sm:pl-[40px] md:mb-[50px]'>
        <div className='flex flex-col -space-y-[138px] ef:-space-y-[167px] sm:-space-y-[187px] sm:pb-10 lg:-space-y-[234px] xl:-space-y-[392px]'>
          <div className='select-none self-center font-spline text-[50px] font-bold text-[#A81F25] opacity-20 ef:text-[80px] sm:self-start sm:text-[100px] lg:text-[150px] xl:text-[200px]'>
            Dashboard
          </div>
          <div className='text-white z-10 transform select-none self-center pt-[90px] text-[26px] transition duration-700 hover:scale-110 ef:text-[40px] sm:self-start sm:pl-1 sm:text-[50px] lg:pl-1.5 lg:text-[75px] xl:pt-[200px] xl:text-[100px]'>
            Dashboard
          </div>
        </div>
      </div>
      <div className='px-[30px] md:px-[50px]'>
        <div className='z-0 rounded-[50px] bg-custom-gradient px-[50px] py-[30px] md:px-[30px]'>
          <div className='flex flex-col lg:flex-row'>
            <div className='mt-[-80px] flex flex-col lg:w-1/3'>
              <div className='h-[150px] w-[150px] select-none self-center rounded-full border-4 border-red bg-background'>
                <img
                  src='https://play-lh.googleusercontent.com/Oriscl3_nvmDPncct6gStmNuQW_4tqHVozy1skG0vd8Jk22KYNMYYJfKq0vcyU-NKdw'
                  alt='profile picture'
                  width={150}
                  height={150}
                  className='rounded-full '
                />
              </div>
              <div className='flex flex-col self-center pb-[30px] font-spline'>
                <p className='text-white select-none self-center text-center text-[30px] font-bold'>
                  {name}
                </p>
                <p className='text-white select-none self-center text-[20px]'>
                  Rank:{rank}
                </p>
                <p className='text-white select-none self-center text-[20px]'>
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
          <div className='z-10 mb-[20px] flex h-auto flex-col rounded-[50px] bg-background p-[20px] px-[30px]'>
            <button className='text-white my-[10px] h-[40px] w-[150px] select-none self-center rounded-[50px] bg-red font-spline text-[20px] font-bold md:w-[200px] md:self-end'>
              Awards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
