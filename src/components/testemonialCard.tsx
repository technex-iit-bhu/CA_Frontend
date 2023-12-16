import React from 'react';
import {
  Card,
  Stack,
  Box,
  Heading,
  Text,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';

interface CarouselProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Testes: React.FC<CarouselProps> = ({ title, description, imageSrc }) => {
  const words = title.split(' ');
  const firstWord = words[0];
  const secondWord = words.slice(1).join(' ');

  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [isLargerThan425] = useMediaQuery('(min-width: 425px)');
  const [isLargerThan640] = useMediaQuery('(min-width: 640px)');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const cardWidth = isLargerThan900 ? '630px' : '80vw';
  const padding = isLargerThan900 ? '10px 40px 15px 15px' : '2.5vw';
  const cardHeight = isLargerThan900 ? '315px' : '50vw';
  const fontSize =
    (!isLargerThan425 && '10px') ||
    (isLargerThan425 && !isLargerThan640 && '12px') ||
    (isLargerThan640 && !isLargerThan900 && '20px') ||
    '21px';
  const fontSize1 = isLargerThan900 ? '44px' : '6vw';
  const padding1 = isLargerThan900 ? '15px 0px' : '3vw 0';
  const margin = isLargerThan900 ? '80px 50px 50px 50px' : '8vw';
  return (
    <div style={{ margin: `${margin}` }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          bg='#272727'
          width={cardWidth}
          height={cardHeight}
          padding={padding1}
          borderRadius='5vw'
        >
          <Stack direction='row' height='100%'>
            <Box
              height='70%'
              width='30%'
              borderRadius='10%'
              position='relative'
              marginX='-15%'
              marginY='5%'
            >
              <Image
                src={imageSrc}
                objectFit='contain' // Ensure the image stays inside the box and covers it
                width='100%' // Make sure the image takes 100% width of the Box
                height='100%' // Make sure the image takes 100% height of the Box
                borderRadius='10% 30%'
                alt=''
              />
            </Box>
            <Box
              height='80%'
              width='80%'
              position='absolute'
              marginX='20%'
              textAlign='center'
            >
              <Heading fontSize={fontSize1} fontWeight='bold'>
                <Box as='span' color='white'>
                  {firstWord}
                </Box>{' '}
                <Box as='span' color='#a81f25'>
                  {secondWord}
                </Box>
              </Heading>

              <Text padding={padding} fontSize={fontSize} style={{ fontFamily: "'Spline Sans', sans-serif" }}>
                <Box as='span' color='#a81f25' fontSize='1.5rem'>
                  "
                </Box>
                {description}
                <Box as='span' color='#a81f25' fontSize='1.5rem'>
                  "
                </Box>
              </Text>
            </Box>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default Testes;
