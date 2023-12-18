import React from 'react';
import Navbar from '@/components/navbar';
import FAQ from '@/components/faq';

const faqPage = () => {
  return (
    <div>
      <div className='z-10 pb-[80px] '>
          <Navbar />
      </div>
      <FAQ></FAQ>
    </div>
  );
};

export default faqPage;
