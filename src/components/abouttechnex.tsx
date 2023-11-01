import React, { FC } from 'react';
import { HeadingTexts } from './ourReach';
import { ArrowRightIcon } from '../../node_modules/@chakra-ui/icons/dist/ArrowRight';
const AboutTechnex: FC = () => {
  return (

    <div className='bg-[#191919]' id='aboutUs'>
      <div className='md:ml-22 ml-1'>
        <div className='flex flex-col sm:pb-10 -space-y-9 sm:-space-y-16 md:-space-y-16 lg:-space-y-20 xl:-space-y-24'>
          <span className='text-6xl font-bold text-[#A81F25] opacity-20 sm:text-[10rem] lg:text-[14rem] xl:text-[19rem] font-spline'>
            Technex
          </span>
          <span className='transform transition duration-700 hover:scale-110 sm:pl-1 lg:pl-5 xl:pl-9 text-white select-none ml-4 sm:ml-8 text-2xl sm:text-[60px] lg:text-[82px] z-10'>About <span className='text-red'>Technex</span></span>
        </div>

        <div className='z-0 ml-3 pb-10 sm:ml-8 lg:ml-12 xl:ml-14 font-spline' >

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
