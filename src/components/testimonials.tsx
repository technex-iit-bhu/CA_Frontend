import React, { useState, useEffect } from 'react';
import { Box, Button, Center, Text, useMediaQuery } from '@chakra-ui/react';
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
  const fontSize1 = isLargerThan500 ? '20px' : '10px';
  const height1 = isLargerThan900 ? '420px' : '70vw';
  const height2 = isLargerThan900 ? '400px' : '62vw';
  const padding = isLargerThan900 ? '5vw':'10vw';
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideVariants: {
    enter: {
      y: string;
      opacity: number;
    };
    center: {
      y: string;
      opacity: number;
    };
    exit: {
      y: string;
      opacity: number;
    };
  } = {
    enter: {
      y: '100%',
      opacity: 0.5,
    },
    center: {
      y: '0',
      opacity: 0.9,
    },
    exit: {
      y: '-100%',
      opacity: 0.5,
    },
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
  };

  return (
    <div>
      <Center h='20vh'>
        {/* Center the content vertically */}
        <Box textAlign='center'>
          {/* Center the content horizontally */}
          <Text fontSize={fontSize}>Testimonials</Text>
        </Box>
      </Center>
      <div
        style={{ position: 'relative', height: `${height1}`, width: '90%' }}
      >
        <Box
          position='relative'
          height={height2}
          width='auto'
          overflow='hidden'
          id="box"
          paddingLeft={padding}

        >
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            id="motion"
            transition={{ ease: 'easeInOut', duration: 1 }}
            custom={
              (currentIndex + 1) % carouselData.length === 0 ? 'prev' : 'next'
            }
            style={{ position: 'absolute', width: '100%' }}
          >
            <Testes
              title={carouselData[currentIndex]['title']}
              description={carouselData[currentIndex]['description']}
              imageSrc={carouselData[currentIndex]['imageSrc']}
            />
          </motion.div>
        </Box>
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
        </div>
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
