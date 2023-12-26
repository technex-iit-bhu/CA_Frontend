import React from 'react';
import Dashboard from '@/components/dashboard';
import DashboardTab from '@/components/dashboardTab';
import Navbar from '../components/navbar';

export default function DashboardPage() {
  return (
    <>
      <div className='z-10 pb-[110px] '>
        <Navbar />
      </div>
      <Dashboard />
      <DashboardTab />
    </>
  );
}
