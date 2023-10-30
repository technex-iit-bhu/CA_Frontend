/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react';
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
} from '@chakra-ui/react';

// Custom pxToRem function
const pxToRem = (px: number) => `${px / 16}rem`;

/**
 * Main component to display the reach.
 */
const OurReach = () => (
  <Box p={pxToRem(50)}>
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
    <Box display='flex' justifyContent={justifyContent} py={pxToRem(20)}>
      <Box height={pxToRem(2)} width='60%' bg='red' />
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
export const HeadingTexts = ({ bgText, whiteText, redText, align }: HeadingTextsProps) => (
  <Box
    display='flex'
    flexDirection='column'
    alignItems={align === 'right' ? 'flex-end' : 'flex-start'}
    className='-space-y-14 ef:-space-y-20 sm:-space-y-32 lg:-space-y-36 pb-10'
  >
    <Heading className='text-[5rem] ef:text-[120px] sm:text-[212px] lg:text-[16rem]'>
      <Text
      as='span'
      color='#A81F25'
      className='bgText'
      opacity='0.2'
      >
      {bgText}
      </Text>
    </Heading>
    <span className='sm:pl-1 md:pl-3 mr-1 sm:mr-2 text-white select-none ml-3 text-2xl ef:text-4xl sm:text-[60px] md:text-[73px] z-10'>{whiteText} <span className='text-red'>{redText}</span></span>
  </Box>
);

/**
 * Component to render the main heading.
 */
const HeadingComponent = () => (
  <div>
  <HeadingTexts
    bgText='Reach'
    whiteText='Our'
    redText='Reach'
    align='right'
  />
  </div>
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
    className='circularComponent'
    display='flex'
    flexDirection={{ base: 'row', sm: 'column' }}
    justifyContent='space-around'
    mt={pxToRem(16)}
    py={pxToRem(50)}
    gap={pxToRem(14)}
    flexWrap='wrap'
  >
    <div>
      <CircularProgressWithText
        percent={34}
        value={69}
        text='College Ambassadors'
      />
    </div>
    <div>
      <CircularProgressWithText
        percent={52}
        value={234}
        text='Indian College'
      />
    </div>
    <div>
      <CircularProgressWithText
        percent={77}
        value={987}
        text='International College'
      />
    </div>
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
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is on screen
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setProgressValue(percent);
          }, 800);
          return () => {
            clearTimeout(timer);
          };
        }
      },
      {
        threshold: 0.1, // Adjust this value to control when the observer's callback should be executed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [percent]);

  return (
    <Circle
      ref={ref}
      size={['80px', '130px', '210px'].map((size) => pxToRem(parseInt(size)))}
      border={`${pxToRem(4)} solid red`}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      <CircularProgress
        value={progressValue}
        size={
          ['80px', '130px', '210px'].map((size) =>
            pxToRem(parseInt(size))
          ) as unknown as string | number | undefined
        }
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
  <Box mt={pxToRem(28)} textAlign='left' width={['100%', '80%', '100%']}>

    <HeadingTexts whiteText='Why' redText='CA' align='left'  />

    <Text
      pb={pxToRem(28)}
      mt={pxToRem(12)}
      width={['100%', '70%', '80%']}
      fontSize={pxToRem(15)} className='font-spline'
    >
      The Campus Ambassador Program for Technex'23 offers an exciting chance to
      become an essential part of the organizing team behind India's premier
      technical and innovation fest. As a Campus Ambassador, <span className='text-red'>you'll lead your
      college's contingent at Technex</span>,&nbsp; promoting the event within your
      institution. This role allows you to <span className='text-red'>develop communication and managerial
      skills by interacting with students from diverse backgrounds</span>.&nbsp; You'll also
      showcase your <span className='text-red'>leadership abilities, inspiring and motivating your peers</span>&nbsp; to
      participate. As a Campus Ambassador, you can <span className='text-red'>organize workshops and
      events, gaining hands-on experience in event planning</span>.&nbsp; You'll be the face
      of Technex'23 in your college, serving as a source of information,
      motivation, and a connector. This program is an incredible opportunity to
      <span className='text-red'>grow both personally and professionally</span>&nbsp; while playing a pivotal role in
      promoting technology and innovation at your college. Seize this chance to
      be a leader and influencer in your college's journey towards Technex'23.
    </Text>
  </Box>
);
