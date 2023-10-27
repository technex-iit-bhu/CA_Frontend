import React, { FC } from 'react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { HeadingTexts } from './ourReach';

const AboutTechnex: FC = () => {
  return (
    <div className='bg-[#191919]'>
      <div className='flex animate-bounce items-center justify-center pt-28'>
        <ArrowRightIcon className='rotate-90' boxSize={32} />
      </div>
      <div className='ml-5'>
        <div className='flex flex-col -space-y-14 ef:-space-y-20 sm:-space-y-28 md:-space-y-36'>
        <span className='text-red opacity-20 text-[4rem] ef:text-[7rem] sm:text-[10rem] md:text-[12rem] lg:text-[200px]'>
            Technex
          </span>
          <span className='sm:pl-1 md:pl-3 text-white select-none ml-4 ef:ml-6 sm:ml-8 text-2xl ef:text-5xl sm:text-[60px] md:text-[73px] z-10'>About <span className='text-red'>Technex</span></span>
        </div>
        <div className='ml-3 pb-10 sm:ml-8 lg:ml-12 xl:ml-14'>
          <p className='mr-3 border-b-2 border-[#A81F25] p-3 pr-5 pt-10 tracking-wide lg:w-[850px]'>
            TECHNEX&apos;23, IIT BHU is one of the largest and oldest college
            fests in India.&nbsp; Embodying the true spirit of youth,{' '}
            <span className='text-[#A81F25]'>
              Technex provides a platform for young talent from all over India
              to showcase their varied skills.
            </span>
            &nbsp; Technex is an annual technical festival organized by the
            students of Indian Institute of Technology (IIT) BHU,&nbsp;
            Varanasi.<br></br>
            The festival provides a platform for students to showcase their
            technical and creative abilities through{' '}
            <span className='text-[#A81F25]'>
              various competitions, workshops, guest lectures, and exhibitions
            </span>
            . It attracts a large number of students from all over the country
            and provides a unique opportunity for them to showcase their skills
            and network with their peers and industry professionals.{' '}
            <span className='text-[#A81F25]'>
              Technex is a celebration of innovation and technology, and a
              platform for students to learn, grow and excel in their field of
              interest.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTechnex;
