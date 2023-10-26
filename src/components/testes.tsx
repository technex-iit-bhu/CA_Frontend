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

  const [isLargerThan1000] = useMediaQuery('(min-width: 900px)');
  const [isLargerThan400] = useMediaQuery('(min-width: 400px)');
  const cardWidth = isLargerThan1000 ? '550px' : '70vw';
  const padding = isLargerThan1000 ? '10px 30px 15px 15px' : '2.5vw';
  const cardHeight = isLargerThan1000 ? '275px' : '35vw';
  const fontSize = isLargerThan1000 ? '17px' : '2.5vw';
  const fontSize1 = isLargerThan1000 ? '45px' : '6vw';
  return (
    <div style={{ margin: '50px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card
          bg='#444444'
          width={cardWidth}
          height={cardHeight}
          padding='3vw 0'
          borderRadius='5vw'
        >
          <Stack direction='row' height='100%'>
            <Box
              height='80%'
              width='30%'
              borderRadius='10%'
              position='relative'
              marginX='-15%'
            >
              <Image
                src={imageSrc}
                objectFit='fill' // Ensure the image stays inside the box and covers it
                width='100%' // Make sure the image takes 100% width of the Box
                height='100%' // Make sure the image takes 100% height of the Box
                borderRadius='10% 20%'
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
              <Text padding={padding} fontSize={fontSize}>
                {description}
              </Text>
            </Box>
          </Stack>
        </Card>
      </div>
    </div>
  );
};

export default Testes;
