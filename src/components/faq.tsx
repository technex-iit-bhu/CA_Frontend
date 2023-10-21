import React from 'react'
import { Box } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'


//   import { extendTheme, ChakraProvider, CSSReset} from '@chakra-ui/react'
//   import { accordionTheme } from './accordiantheme'  
  
//   export const theme = extendTheme({
//       components: { Accordion: accordionTheme },
//   })
  
const FAQ=()=>{
    return(
        <div className='bg-background'>
            <div className='flex flex-col bg-background pt-[200px] relative pl-[120px] mb-[20px]'>
                <div className='flex text-5xl absolute align-left left-5 lg:text-7xl lg:p-10 md:p-10 bottom-[10px] sm:text-center'>
                    <span className='text-white select-none'>FAQs</span>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col md:flex-row lg:justify-start md:justify-start items-start md:gap-10 gap-0 md:px-[120px] px-[30px] mb-[50px]">
                <div className="md:w-1/2 w-full">
                    {/* <ChakraProvider theme = {theme}>
                        <CSSReset />   */}
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <AccordionIcon />
                                    <Box as="span" flex='1' textAlign='center'>
                                    Who can become a College Ambassador?
                                    </Box>   
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <AccordionIcon />
                                    <Box as="span" flex='1' textAlign='center'>
                                    How to become a College Ambassador?
                                    </Box>                  
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <AccordionIcon />
                                    <Box as="span" flex='1' textAlign='center'>
                                    How many CAs can be there from a college?
                                    </Box>                                
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    {/* </ChakraProvider> */}
                </div>
                <div className="md:w-1/2 w-full md:px-30">
                    {/* <ChakraProvider theme = {theme}>
                        <CSSReset /> */}
                        <Accordion allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <AccordionIcon />
                                    <Box as="span" flex='1' textAlign='center'>
                                    What are the conditions under which I will get a CA Certificate?
                                    </Box>                                
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                <AccordionButton>
                                    <AccordionIcon />
                                    <Box as="span" flex='1' textAlign='center'>
                                    How much do I have to work to Top the Leaderboard?
                                    </Box>                              
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    {/* </ChakraProvider> */}
                </div>
            </div>
        </div>
    )
}
export default FAQ;