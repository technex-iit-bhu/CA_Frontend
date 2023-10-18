/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import { 
    Container, Box, Heading, Text, 
    CircularProgress, CircularProgressLabel, 
    Circle, VStack 
} from "@chakra-ui/react";
import { ResponsiveValue } from 'styled-system';

/**
 * Main component to display the reach.
 */
const OurReach = () => (
    <Box>
        <VStack>
            <Container maxW='1120px'>
                <HeadingComponent />
                <EllipseSection />
                <Line align="right" />
                <LowerSection />
                <Line align="left" />
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
        <Box display="flex" justifyContent={justifyContent}>
            <Box height="2px" width="40%" bg="red" />
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
};

/**
 * Component to render a heading with two different text colors.
 */
const HeadingTexts = ({ whiteText, redText, align }: HeadingTextsProps) => (
    <Heading textAlign={align}>
        <Text as="span" color="white" className="whiteText">
            {whiteText}
        </Text>{" "}
        <Text as="span" color="red" className="redText">
            {redText}
        </Text>
    </Heading>
);

/**
 * Component to render the main heading.
 */
const HeadingComponent = () => (
    <HeadingTexts whiteText="Our" redText="Reach" align="right"/>
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
const CircularProgressWithText = ({ percent, value, text }: CircularProgressWithTextProps) => (
    <Box display="flex" flexDirection="column" alignItems="center">
        {renderCircularProgress(percent, value)}
        <Text className="circularText" mt="1.2rem">{text}</Text>
    </Box>
);

/**
 * Component to render a section with three circular progress indicators.
 */
const EllipseSection = () => (
    <Box display="flex" justifyContent="space-between" mt={4} py={50}>
        <CircularProgressWithText percent={34} value={69} text="College Ambassadors" />
        <CircularProgressWithText percent={52} value={234} text="Indian College" />
        <CircularProgressWithText percent={87} value={987} text="International College" />
    </Box>
);

/**
 * Function to render a circular progress with animation.
 */
const renderCircularProgress = (percent: number, value: number) => {
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
        <Circle size="230px" border="4px solid red" display="flex" alignItems="center" justifyContent="center">
            <CircularProgress value={progressValue} size="210px" thickness="8px" color="red" trackColor="black" px={10}>
                <CircularProgressLabel>{value}</CircularProgressLabel>
            </CircularProgress>
        </Circle>
    );
};

/**
 * Component to render the lower section with a heading and a text.
 */
const LowerSection = () => (
    <Box mt="1.8rem" textAlign="left" width="60%">
        <HeadingTexts whiteText="Why" redText="CA" align="left"/>
        <Text pb="2.8rem" mt="1.2rem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio aperiam magnam excepturi modi amet. Rerum provident soluta libero incidunt nulla dignissimos laudantium earum, voluptate officiis accusantium. Sed impedit in molestiae.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio aperiam magnam excepturi modi amet. Rerum provident soluta libero incidunt nulla dignissimos laudantium earum, voluptate officiis accusantium. Sed impedit in molestiae.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio aperiam magnam excepturi modi amet. Rerum provident soluta libero incidunt nulla dignissimos laudantium earum, voluptate officiis accusantium. Sed impedit in molestiae.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio aperiam magnam excepturi modi amet. Rerum provident soluta libero incidunt nulla dignissimos laudantium earum, voluptate officiis accusantium. Sed impedit in molestiae.
        </Text>
    </Box>
);
