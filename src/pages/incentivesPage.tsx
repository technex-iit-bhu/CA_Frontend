import Incentive from '@/components/incentives';
import Navbar from '@/components/navbar';
import Responsibilities from '@/components/responsibilities';
import React from 'react';

const IncentivePage = () => {

  
  return (
    <div>


       <div className='z-10 pb-96 lg:pb-64 xl:pb-96 absolute w-full'>
          <Navbar />
        </div>
      {/* <Navbar></Navbar> */}
      <Incentive></Incentive>

      <Responsibilities></Responsibilities>
    </div>
  );
};

export default IncentivePage;
