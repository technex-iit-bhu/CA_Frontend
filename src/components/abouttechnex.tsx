import React, { FC } from 'react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const AboutTechnex: FC = () => {
  return (
    <div className='bg-[#191919]'>
      <div className='flex animate-bounce items-center justify-center pt-28'>
        <ArrowRightIcon className='rotate-90' boxSize={32} />
      </div>
      <div className='md:ml-22 ml-1 -space-y-10 sm:ml-10 sm:-space-y-20 md:-space-y-16 lg:ml-28 lg:-space-y-24 xl:ml-40'>
        <div className='-z-10'>
          <span className='text-6xl font-bold text-[#A81F25] opacity-30 sm:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-spline'>
            Technex
          </span>
        </div>
        <div className='z-0 ml-3 pb-10 sm:ml-8 lg:ml-12 xl:ml-14 font-spline' >
          <span className='text-3xl font-extrabold sm:text-6xl md:text-5xl lg:text-7xl'>
            About <span className='text-[#A81F25]'>Technex</span>
          </span>
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
