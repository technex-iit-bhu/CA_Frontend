import React, { useState, useEffect } from 'react';
import { Box, Center, useMediaQuery } from '@chakra-ui/react';
import Testes from './testemonialCard';

interface CarouselData {
  title: string;
  description: string;
  imageSrc: string;
}

const carouselData: CarouselData[] = [
  {
    title: 'Ellen Verma',
    description:
      "My journey as a Campus Ambassador for TECHNEX'23 at IIT BHU was an incredible experience that allowed me to grow both personally and professionally. This experience will always hold a special place in my heart, and I am grateful for this.",
    imageSrc:
      'cutie_t1.webp', // URL for the image
  },
  {
    title: 'Neha Upadhyay',
    description:
      "This year I got an opportunity to became CA of Technex'23. My convincing skill changed after becoming CA and the way Technex team help me is really appreciable. At last I will finish this with one word Technex  is enjoyable nd knowledgeable.",
    imageSrc:
      'notcutie_t2.webp', // URL for the image
  },
  {
    title: 'Shakti Nandan',
    description:
      "Hi, I am Shakti Nandan, very happy and proud to be a part of TECHNEX'23 as CAMPUS AMBASSADOR in such a Greenish and Vedic culture campus. I got very valuable experience and  I heartly thankful to TECHNEX team to provide me that opportunity.",
    imageSrc:
      't3.webp', // URL for the image
  },
  {
    title: 'Manish Gupta',
    description: 
    "I had the opportunity to represent my college as a campus ambassador for Technex, IIT BHU and I would like to say that it has been a wonderful experience for me being a campus ambassador of this prestigious technical fest. STAY TECHNEXED!",
    imageSrc: "t4.webp",
  },
  {
    title: "Krishna Raj",
    description:
    "An absolute fantastic experience, from the food to the security arrangements. The variety & quality of cuisines  left us spoilt for choice It was evident that the organizers went above and beyond to create a memorable experience for all.",
    imageSrc: "t5 (2).png",
  },
  {
    title: "Umesh Verma",
    description:
    "Being a campus ambassador of technex iit 2k23 was an enriching experience where I represented my university at events, workshops, orientations. I had the chance to interact with prospective students & share my insights about campus life.",
    imageSrc: "t6.webp",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
  const height3 = isLargerThan500 ? '100px' : '14vw';
  const height1 = isLargerThan900 ? '420px' : '60vw';
  const height2 = isLargerThan900 ? '400px' : '60vw';
  const padding = isLargerThan900 ? '2vw' : '6vw';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <Center h={height3} className='mb-5'>
        {/* Center the content vertically */}
        <Box
          textAlign='center'
          className='flex flex-col -space-y-11 ef:-space-y-16 md:-space-y-28 lg:-space-y-32'
        >
          {/* Center the content horizontally */}
          <span className='text-[40px] text-red opacity-20 ef:text-[80px] md:text-[8rem] lg:text-[11rem]'>
            Testimonials
          </span>
          <span className='text-white z-10 ml-3 transform select-none text-[25px] transition duration-700 hover:scale-110 ef:text-4xl md:text-7xl'>
            Testimonials
          </span>
        </Box>
      </Center>
      <Center>
        <div
          style={{ position: 'relative', height: `${height1}`, width: '90%' }}
        >
          <Box
            position='relative'
            height={height2}
            width='auto'
            overflow='hidden'
            id='box'
            paddingLeft={padding}
          >
            <Box
              transition='transform 0.5s ease'
              transform={`translateY(-${
                (currentIndex * 100) / carouselData.length
              }%)`}
              position='absolute'
              width='100%'
              display='flex'
              flexDirection='column'
            >
              {carouselData.map((item, currentIndex) => (
                <Testes
                  key={currentIndex}
                  title={carouselData[currentIndex]['title']}
                  description={carouselData[currentIndex]['description']}
                  imageSrc={carouselData[currentIndex]['imageSrc']}
                />
              ))}
            </Box>
          </Box>
          <Center>
            <div
              style={{
                height: '3px',
                borderRadius: '3px',
                background: '#a81f25',
                width: '80%',
                marginTop: '3vw',
              }}
            ></div>
          </Center>
        </div>
      </Center>
    </div>
  );
};

export default Testimonials;
