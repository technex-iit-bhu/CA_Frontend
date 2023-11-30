import Incentive from '@/components/incentives';
import Navbar from '@/components/navbar';
import Responsibilities from '@/components/responsibilities';
import React from 'react';

const IncentivePage = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Incentive></Incentive>

      <Responsibilities></Responsibilities>
    </div>
  );
};

export default IncentivePage;
