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
      "My journey as a Campus Ambassador for TECHNEX'23 at IIT BHU was an incredible experience that allowed me to grow both personally and professionally. It provided me with the opportunity to contribute to the success of a prestigious technical festival , develop my leadership and organizational skills, and foster a sense of pride in representing my college.",
    imageSrc:
      'cutie_t1.webp', // URL for the image
  },
  {
    title: 'Neha Upadhyay',
    description:
      "At the beginning of february this year, I got an opportunity to became CA of Technex'23 so i enrolled myself and got selected. And  my point of view for myself that i am not good in convincing the people or get my point across totally changed after becoming CA  nd convinced student to participate in fest, a lot of new things I learnt. At last I will finish this with one word Technex is enjoyable nd knowledgeable",
    imageSrc:
      'notcutie_t2.webp', // URL for the image
  },
  {
    title: 'Shakti Nandan',
    description:
      "Hi, I am Shakti Nandan, very happy and proud to be a part of TECHNEX'23 as CAMPUS AMBASSADOR in such a Greenish and Vedic culture campus. TECHNEX, the annual technical festival provided an incredible platform for students to explore itself, expand network with common minded people and showcase their technical & creative abilities on national level. I learn lots of valuable experience, explore leadership abilities, updated with the latest innovation & emerging technology and enjoy campus a lot. I heartly thankful to TECNEX team to provide me that opportunity and  also thankful to my college for support me to work with full effort.",
    imageSrc:
      't3.webp', // URL for the image
  },
  {
    title: 'Manish Gupta',
    description: 
    "Hey everyone my name is Manish and I am from SLIET. I had the opportunity to represent my college as a campus ambassador for Technex, IIT BHU and I would like to say that it has been a wonderful experience for me being a campus ambassador of this prestigious technical fest. As a campus ambassador my role was to promote Technex'23 in my college and reach out to students and all the technical clubs of my college. And as a result, with over 50+ students who not only participated in this event but also achieved remarkable positions there. I Hope that the upcoming Technex will be an even more remarkable experience for everyone. STAY TECHNEXED!",
    imageSrc: "t4.webp",
  },
  {
    title: "Krishna Raj",
    description:
    "I must say, it was an absolutely fantastic experience! Everything from the food to the security arrangements was top-notch. The variety and quality of cuisines offered left us spoilt for choice, and I couldn't help but appreciate the efforts put in by the organizers. Speaking of security, it was evident that a lot of thought and planning went into ensuring everyone felt safe and comfortable throughout the event.It's a testament to the organizers' commitment to creating a welcoming environment for all attendees. It was evident that the organizers went above and beyond to create a memorable experience for all. Looking forward to the next one!",
    imageSrc: "t5 (1).webp",
  },
  {
    title: "Umesh Verma",
    description:
    "Being a campus ambassador of technex iit 2k23 was an enriching experience where I represented my university at events, workshops, and orientations. I had the chance to interact with prospective students and share my insights about campus life.",
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
