import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Heading, Text, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Testes from './testes';

interface CarouselData {
  title: string;
  description: string;
  imageSrc: string;
}

const carouselData: CarouselData[] = [
  {
    title: 'Adolf Hitler',
    description:
      'HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!HEIL!Kill!Kill!Kill!Kill!Kill!Kill!Kill!Kill!Kill!Kill!Kill!Kill!',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/en/7/7d/Adolf_Hitler_cph_3a48970.jpg', // URL for the image
  },
  {
    title: 'Mr Bonaparte',
    description:
      "There's nothing we can do.There's nothing we can do.There's nothing we can do.There's nothing we can do.There's nothing we can do.There's nothing.",
    imageSrc:
      'https://assets.editorial.aetnd.com/uploads/2022/11/napoleon-exile-gettyimages-1288489073.jpg', // URL for the image
  },
  {
    title: 'Jordan Belfort',
    description:
      'I have been a rich man and I have been a poor man. And I will choose rich EVERY FUCKING TIMEEE!!Is anyone carrying some LSD by chance? I forgot to bring mine.',
    imageSrc:
      'https://i.pinimg.com/564x/91/8e/7a/918e7a39b2d71bd85d3e26cf6b42a1ec.jpg', // URL for the image
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
  const fontSize = isLargerThan500 ? '80px' : '12vw';
  const height3 = isLargerThan500 ? '100px' : '14vw';
  const fontSize1 = isLargerThan500 ? '20px' : '10px';
  const height1 = isLargerThan900 ? '420px' : '50vw';
  const height2 = isLargerThan900 ? '400px' : '45vw';
  const padding = isLargerThan900 ? '5vw' : '10vw';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <Center h={height3}>
        {/* Center the content vertically */}
        <Box textAlign='center' className='-space-y-11 ef:-space-y-16 md:-space-y-28 lg:-space-y-32 flex flex-col'>
          {/* Center the content horizontally */}
          <span className='text-red opacity-20 text-[40px] ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
            Testimonials
          </span>
          <span className='text-white select-none ml-3 text-[25px] ef:text-4xl md:text-7xl z-10'>Testimonials</span>
        </Box>
      </Center>
      <div style={{ position: 'relative', height: `${height1}`, width: '90%' }}>
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
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        ></div>
      </div>
      <div
        style={{
          height: '3px',
          borderRadius: '3px',
          background: '#a81f25',
          width: '50%',
          margin: '0 auto',
          marginTop: '10px',
        }}
      ></div>
    </div>
  );
};

export default Testimonials;
