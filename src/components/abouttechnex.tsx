import React, { FC, useEffect, useState } from 'react';
import { HeadingTexts } from './ourReach';
import { ArrowRightIcon } from '../../node_modules/@chakra-ui/icons/dist/ArrowRight';
import ImageTrackComponent from './sexyGallery';
import Gallery from './gallery';
import { Box } from '@chakra-ui/react';

const AboutTechnex: FC = () => {
  const pxToRem = (px: number) => `${px / 16}rem`;
  return (
    <div className='bg-[#191919]' id='aboutUs'>
      <div className='md:ml-22 ml-1'>
        <div className='flex flex-col -space-y-9 sm:-space-y-16 sm:pb-10 md:-space-y-16 lg:-space-y-20 xl:-space-y-24'>
          <Box
            mt={pxToRem(16)}
            textAlign='left'
            width={['100%', '80%', '100%']}
            display='flex'
            flexDirection='column'
            alignItems={'flex-start'}
            className='-space-y-8 pb-10 ef:-space-y-20 sm:-space-y-32 lg:-space-y-36'
          >
            <HeadingTexts
              whiteText='About'
              bgText='Technex'
              redText='Technex'
              align='left'
            />
          </Box>
        </div>

        <div className='z-0 mx-3 pb-10 font-spline sm:mx-8 lg:mx-12 xl:mx-14'>
          <div className='flex'>
            <div className='left-column'>
              <p className='mr-3 border-b-2 border-[#A81F25] p-3 pr-5 pt-10 tracking-wide lg:w-[850px]'>
                Technex, hosted by the prestigious Indian Institute of
                Technology (IIT) BHU, stands as a venerable beacon among India's
                college festivals.{' '}
                <span className='text-[#A81F25]'>
                  Revered as one of the largest and oldest gatherings of its
                  kind, this annual technical extravaganza epitomizes the
                  vibrant spirit of youth
                </span>{' '}
                . Serving as a distinguished platform for emerging talents
                across the nation, Technex unfurls a tapestry of skills,
                seamlessly weaving together the technical and creative prowess
                of students.<br></br>
                This illustrious festival, meticulously organized by the
                students of IIT BHU, Varanasi, transcends conventional
                boundaries with its myriad offerings.&nbsp;
                <span className='text-[#A81F25]'>
                  From compelling competitions and enlightening workshops to
                  captivating guest lectures and insightful exhibitions, Technex
                  embodies a celebration of innovation and technology
                </span>{' '}
                . Drawing participants from every corner of the country, it
                provides a distinctive opportunity for students to not only
                showcase their abilities but also engage in meaningful
                networking with peers and industry professionals. Technex
                emerges as a crucible for personal and professional growth,
                where students can learn, evolve, and truly excel in their
                chosen fields{' '}
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default AboutTechnex;
