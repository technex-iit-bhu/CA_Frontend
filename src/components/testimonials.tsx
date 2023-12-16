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
      "As a Campus Ambassador for TECHNEX at IIT BHU, I gained valuable personal and professional development, enhancing leadership and organizational skills. Representing my college filled me with pride, and the lessons learned and memories created are deeply meaningful.",
    imageSrc:
      'cutie_t1.webp', // URL for the image
  },
  {
    title: 'Neha Upadhyay',
    description:
      "As a Campus Ambassador for TECHNEX in early February, I transformed my communication and persuasion skills while successfully encouraging student participation. The Technex team's support in profile enhancement and overcoming challenges was appreciated, making my tenure a blend of enjoyment and intellectual growth.",
    imageSrc:
      'notcutie_t2.webp', // URL for the image
  },
  {
    title: 'Shakti Nandan',
    description:
      "I'm Shakti Nandan, honored to be a CAMPUS AMBASSADOR for TECHNEX at this culturally rich campus. TECHNEX provides a platform for self-exploration, networking, and showcasing skills nationally. My journey included gaining experiences, honing leadership skills, and enjoying campus life, with gratitude to the TECHNEX team and my college for their support.",
    imageSrc:
      't3.webp', // URL for the image
  },
  {
    title: 'Manish Gupta',
    description: 
    "Hello, I'm Manish from SLIET, and being a campus ambassador for TECHNEX, IIT BHU has been a fantastic journey. Promoting TECHNEX, engaging with technical clubs, and seeing over 50 students excel in the event has been truly rewarding. Technex is more than just a fest; it offers intense competitions, warm hospitality, and enriching experiences. Looking forward to more remarkable experiences in upcoming events. STAY TECHNEXED!",
    imageSrc: "t4.webp",
  },
  {
    title: "Krishna Raj",
    description:
    "Exceptional experience! Commendable organization, diverse cuisines, top-notch security, engaging workshops, thrilling performances, and excellent accommodation made the fest memorable. Organizers went above and beyond, exceeding expectations. Looking forward to the next one!",
    imageSrc: "t5 (1).webp",
  },
  {
    title: "Umesh Verma",
    description:
    "As a Campus Ambassador for TECHNEX IIT BHU, I had an enriching experience representing my university at events and orientations. Interacting with prospective students, I aimed to foster a sense of belonging and provide valuable information about campus life.",
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
