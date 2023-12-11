import React, { useState, CSSProperties } from 'react';
import { Box, useMediaQuery, Text, Center } from '@chakra-ui/react';
interface Props {
  text: string;
}

const Tnc: React.FC<Props> = ({ text }) => {
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)');
  const width = isLargerThan1200 ? '1100px' : '91.66vw';
  const height = isLargerThan1200 ? 'auto' : 'auto';
  const p = isLargerThan1200 ? '8px' : '0.83vw';
  const br = isLargerThan1200 ? '20px' : '3vw';
  const b = isLargerThan1200 ? '2px' : '0.16vw';
  return (
    <Center>
      <Box
        w={width}
        h={height}
        style={{
          background:
            'linear-gradient(90deg, rgba(100, 100, 100, 0.5) 0%, rgba(100, 100, 100, 0.3) 100%)',
        }}
        p={p}
        borderRadius={br}
        m={p}
      >
        <Center>
          <Text align='center' fontSize={br}>
            {text}
          </Text>
        </Center>
      </Box>
    </Center>
  );
};

export default Tnc;
