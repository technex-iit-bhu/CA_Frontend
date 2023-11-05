import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

//   import { extendTheme, ChakraProvider, CSSReset} from '@chakra-ui/react'
//   import { accordionTheme } from './accordiantheme'

//   export const theme = extendTheme({
//       components: { Accordion: accordionTheme },
//   })

const FAQ = () => {
  const AccordionData = [
    {
      question: 'Who can become a College Ambassador',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'How to become a College Ambassador',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question: 'How many CAs can be there from a college',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      question:
        'What are the conditions under which I will get a CA Certificate',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

    {
      question: 'How much do I have to work to Top the Leaderboard',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <div className='bg-background'>
      <div className='relative mb-[20px] flex flex-col bg-background pl-[10px] pt-[200px]'>
        <div className=' absolute bottom-3 flex flex-col -space-y-14 ef:-space-y-16 sm:text-left md:-space-y-32 '>
          <span className='text-[62px] text-red opacity-20 ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
            FAQs
          </span>
          <span className='text-white z-10 ml-1 transform select-none text-[25px] transition duration-700 hover:scale-110 ef:text-4xl md:ml-2 md:text-7xl lg:ml-3'>
            FAQs
          </span>
        </div>
      </div>
      <div className='mb-[50px] flex flex-col md:flex-row md:justify-start md:gap-10 md:px-[120px] lg:flex-row lg:justify-start'>
        <div className='w-full md:w-1/2'>
          <Accordion
            allowMultiple={false}
            allowToggle
            className=''
          >
            {AccordionData.slice(0, 3).map((item, index) => (
              <AccordionItem
                key={index}
                className='m-2 rounded-[40px] bg-grey p-3 font-spline'
                borderColor='rgba(#D7ECFF, 0, 0, 0.3)'
                borderWidth='1.4px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon />
                    <Box as='span' flex='1' textAlign='center'>
                      <span style={{ fontSize: '1.6rem', color: 'brown' }}>
                        {item.question.split(' ')[0].charAt(0)}
                      </span>
                      {item.question.slice(1)}{' '}
                      <span style={{ fontSize: '1.6rem', color: 'brown' }}>
                        ?
                      </span>
                    </Box>
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4} className='text-center'>
                  {item.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className='w-full md:w-1/2'>
          <Accordion
            allowMultiple={false}
            allowToggle
            className=''
          >
            {AccordionData.slice(3).map((item, index) => (
              <AccordionItem
                key={index}
                className='m-2 rounded-[40px] bg-grey p-3  font-spline'
                borderColor='rgba(#D7ECFF, 0, 0, 0.3)'
                borderWidth='1.4px'
              >
                <h2>
                  <AccordionButton>
                    <AccordionIcon />
                    <Box as='span' flex='1' textAlign='center'>
                      <span style={{ fontSize: '1.6rem', color: 'brown' }}>
                        {item.question.split(' ')[0].charAt(0)}
                      </span>
                      {item.question.slice(1)}{' '}
                      <span style={{ fontSize: '1.6rem', color: 'brown' }}>
                        ?
                      </span>
                    </Box>
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4} className='text-center'>
                  {item.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
