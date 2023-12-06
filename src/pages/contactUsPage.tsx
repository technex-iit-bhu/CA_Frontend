import ContactUs from '../components/contactUs';
import Navbar from '../components/navbar';
import React from 'react';
import Tnc from '../components/tnc';
import { Box, Center } from '@chakra-ui/react';

const contactUsPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ContactUs></ContactUs>
      <Box
        textAlign='center'
        className='flex flex-col -space-y-11 ef:-space-y-16 md:-space-y-28 lg:-space-y-32'
        m='2vw'
      >
        <Center>
          <span className='text-white z-10 transform select-none text-[20px] transition duration-700 hover:scale-110 ef:text-3xl md:text-6xl'>
            Terms and Conditions
          </span>
        </Center>
      </Box>
      <Tnc text='To be Announced'></Tnc>
      <br />
      <br />
    </div>
  );
};

export default contactUsPage;
