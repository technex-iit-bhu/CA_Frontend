import Leaderboard from '@/components/leaderboard';
import React from 'react';
import Navbar from '@/components/navbar';

export default function LeaderboardPage() {
  return (
    <>
      {/* <Leaderboard /> */}
      <div className='absolute z-20 w-full pb-96 lg:pb-64 xl:pb-96'>
        <Navbar />
      </div>
      <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-7xl'>Coming Soon</h1>
      </div>
    </>
  );
}
