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
    title: 'Eleen Verma',
    description:
      "My journey as a Campus Ambassador for TECHNEX'23 at IIT BHU was not only incredible but also instrumental in my personal and professional growth. This experience holds a special place in my heart, and I am grateful for the opportunity.  Stay TECHNEXED!",
    imageSrc: 'cutie_t1.webp', // URL for the image
  },
  {
    title: 'Neha Upadhyay',
    description:
      "As the CA for TECHNEX'23, I honed my persuasive skills, and the remarkable support from the Technex team was truly commendable. In essence, Technex is both enjoyable and enlightening.  Stay TECHNEXED!",
    imageSrc: 'notcutie_t2.webp', // URL for the image
  },
  {
    title: 'Shakti Nandan',
    description:
      "Proudly serving as a Campus Ambassador for TECHNEX'23 in the vibrant and culturally rich campus of IIT BHU has been a highly enriching experience. Grateful to the TECHNEX team for providing such a valuable opportunity. Stay TECHNEXED!",
    imageSrc: 't3.webp', // URL for the image
  },
  {
    title: 'Manish Gupta',
    description:
      'As a Campus Ambassador for TECHNEX, IIT BHU, the experience has been nothing short of wonderful. Representing my college at this prestigious technical fest has been a privilege. Stay TECHNEXED!',
    imageSrc: 't4.webp',
  },
  {
    title: 'Krishna Raj',
    description:
      'An exceptionally delightful experience, spanning from the culinary diversity to meticulous security arrangements. The organisers demonstrated an unwavering commitment, surpassing expectations to craft a truly memorable event for all attendees.  Stay TECHNEXED!',
    imageSrc: 't5 (2).png',
  },
  {
    title: 'Umesh Verma',
    description:
      "Serving as a Campus Ambassador for TECHNEX'23 was a transformative experience, offering opportunities to engage with prospective students, represent my university, and share valuable insights about campus life.  Stay TECHNEXED!",
    imageSrc: 't6.webp',
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
