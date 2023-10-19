import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Heading,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Circle,
  VStack,
  ResponsiveValue,
  useTheme,
} from '@chakra-ui/react';

// Custom pxToRem function
const pxToRem = (px: number) => `${px / 16}rem`;

/**
 * Main component to display the reach.
 */
const OurReach = () => (
  <Box>
    <VStack>
      <Container maxW='container.xl'>
        <HeadingComponent />
        <EllipseSection />
        <Line align='right' />
        <LowerSection />
        <Line align='left' />
      </Container>
    </VStack>
  </Box>
);

export default OurReach;

/**
 * Type for the Line component props.
 */
type LineProps = {
  align: 'left' | 'center' | 'right';
};

type TextAlign = 'left' | 'right' | 'center' | 'justify';

/**
 * Component to render a horizontal line with alignment.
 */
const Line = ({ align }: LineProps) => {
  let justifyContent;
  switch (align) {
    case 'left':
      justifyContent = 'flex-start';
      break;
    case 'center':
      justifyContent = 'center';
      break;
    case 'right':
      justifyContent = 'flex-end';
      break;
  }

  return (
    <Box display='flex' justifyContent={justifyContent}>
      <Box height={pxToRem(2)} width='40%' bg='red' />
    </Box>
  );
};

/**
 * Type for the HeadingTexts component props.
 */
type HeadingTextsProps = {
  whiteText: string;
  redText: string;
  align?: ResponsiveValue<TextAlign>;
  fontSize?: ResponsiveValue<string>;
};

/**
 * Component to render a heading with two different text colors.
 */
const HeadingTexts = ({ whiteText, redText, align }: HeadingTextsProps) => (
  <Box display='flex' flexDirection='column' justifyContent={align}>
    <Heading>
      <Text as='span' color='white' className='whiteText'>
        {whiteText}
      </Text>{' '}
      <Text as='span' color='red' className='redText'>
        {redText}
      </Text>
    </Heading>
  </Box>
);

/**
 * Component to render the main heading.
 */
const HeadingComponent = () => (
  <HeadingTexts
    whiteText='Our'
    redText='Reach'
    align='right'
    fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
  />
);

/**
 * Type for the CircularProgressWithText component props.
 */
type CircularProgressWithTextProps = {
  percent: number;
  value: number;
  text: string;
};

/**
 * Component to render a circular progress with a text below it.
 */
const CircularProgressWithText = ({
  percent,
  value,
  text,
}: CircularProgressWithTextProps) => (
  <Box display='flex' flexDirection='column' alignItems='center'>
    <RenderCircularProgress percent={percent} value={value} />
    <Text className='circularText' mt={pxToRem(12)}>
      {text}
    </Text>
  </Box>
);

/**
 * Component to render a section with three circular progress indicators.
 */
const EllipseSection = () => (
  <Box
    display='flex'
    flexDirection={{ base: 'column', md: 'row' }}
    justifyContent='space-between'
    mt={pxToRem(16)}
    py={pxToRem(50)}
    gap={pxToRem(4)}
  >
    <CircularProgressWithText
      percent={34}
      value={69}
      text='College Ambassadors'
    />
    <CircularProgressWithText percent={52} value={234} text='Indian College' />
    <CircularProgressWithText
      percent={87}
      value={987}
      text='International College'
    />
  </Box>
);

/**
 * Function to render a circular progress with animation.
 */
const RenderCircularProgress: React.FC<{ percent: number; value: number }> = ({
  percent,
  value,
}) => {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressValue(percent);
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [percent]);

  return (
    <Circle
      size={[pxToRem(130), pxToRem(210)]}
      border={`${pxToRem(4)} solid red`}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <CircularProgress
        value={progressValue}
        size={pxToRem(210)}
        thickness={pxToRem(8)}
        color='red'
        trackColor='black'
        px={pxToRem(10)}
      >
        <CircularProgressLabel>{value}</CircularProgressLabel>
      </CircularProgress>
    </Circle>
  );
};

/**
 * Component to render the lower section with a heading and a text.
 */
const LowerSection = () => (
  <Box mt={pxToRem(28)} textAlign='left' width={['100%', '60%']}>
    <HeadingTexts whiteText='Why' redText='CA' align='left' />
    <Text pb={pxToRem(28)} mt={pxToRem(12)}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
      aperiam magnam excepturi modi amet. Rerum provident soluta libero incidunt
      nulla dignissimos laudantium earum, voluptate officiis accusantium. Sed
      impedit in molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Distinctio aperiam magnam excepturi modi amet. Rerum provident
      soluta libero incidunt nulla dignissimos laudantium earum, voluptate
      officiis accusantium. Sed impedit in molestiae. Lorem ipsum, dolor sit
      amet consectetur adipisicing elit. Distinctio aperiam magnam excepturi
      modi amet. Rerum provident soluta libero incidunt nulla dignissimos
      laudantium earum, voluptate officiis accusantium. Sed impedit in
      molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Distinctio aperiam magnam excepturi modi amet. Rerum provident soluta
      libero incidunt nulla dignissimos laudantium earum, voluptate officiis
      accusantium. Sed impedit in molestiae.
    </Text>
  </Box>
);
