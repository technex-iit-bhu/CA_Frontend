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
  return (
    <div className='bg-background'>
      <div className='relative mb-[20px] flex flex-col bg-background pl-[10px] pt-[200px]'>
        <div className=' -space-y-14 ef:-space-y-16 md:-space-y-32 absolute bottom-3 flex flex-col sm:text-left '>
          <span className='text-red opacity-20 text-[62px] ef:text-[80px] md:text-[9rem] lg:text-[11rem]'>
            FAQs
          </span>
          <span className='text-white select-none ml-1 md:ml-2 lg:ml-3 text-[25px] ef:text-4xl md:text-7xl z-10 transform transition duration-700 hover:scale-110'>FAQs</span>
        </div>
      </div>
      <div className='mb-[50px] flex flex-col items-start gap-0 px-[30px] md:flex-row md:justify-start md:gap-10 md:px-[120px] lg:flex-row lg:justify-start'>
        <div className='w-full md:w-1/2'>
          {/* <ChakraProvider theme = {theme}>
                        <CSSReset />   */}
          <Accordion defaultIndex={[0]} allowMultiple allowToggle className=''>
            <AccordionItem  className='bg-grey p-4 rounded-[40px]  m-2 '>
              <h2>
                <AccordionButton >
                  <AccordionIcon />
                  <Box as='span' flex='1' textAlign='center' className='font-spline' >
                    Who can become a College Ambassador?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className='text-center font-spline'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className='bg-grey p-4 rounded-[40px] m-2 font-spline'>
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                  <Box as='span' flex='1' textAlign='center'>
                    How to become a College Ambassador?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className='bg-grey p-4 rounded-[40px] m-2 font-spline'>
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                  <Box as='span' flex='1' textAlign='center'>
                    How many CAs can be there from a college?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* </ChakraProvider> */}
        </div>
        <div className='md:px-30 w-full md:w-1/2'>
          {/* <ChakraProvider theme = {theme}>
                        <CSSReset /> */}
          <Accordion >
            <AccordionItem className='bg-grey p-4 rounded-[40px] m-2 font-spline'>
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                  <Box as='span' flex='1' textAlign='center'>
                    What are the conditions under which I will get a CA
                    Certificate?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem className='bg-grey p-4 rounded-[40px] m-2 font-spline'>
              <h2>
                <AccordionButton>
                  <AccordionIcon />
                  <Box as='span' flex='1' textAlign='center'>
                    How much do I have to work to Top the Leaderboard?
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* </ChakraProvider> */}
        </div>
      </div>
    </div>
  );
};
export default FAQ;
