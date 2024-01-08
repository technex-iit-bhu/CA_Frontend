import ContactUs from '../components/contactUs';
import Navbar from '../components/navbar';
import React from 'react';
import Tnc from '../components/tnc';
import { Box, Center, Text } from '@chakra-ui/react';

const contactUsPage = () => {
  return (
    <div>
      <div className='z-10 pb-[110px] '>
        <Navbar />
      </div>
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
      <Tnc text="By participating in the Technex'24 Campus Ambassador Program, you agree to abide by these terms and conditions."></Tnc>
      <Tnc text="The program is designed to promote Technex'24 on college campuses and build a mutually beneficial relationship between Technex'24 and its ambassadors."></Tnc>
      <Tnc text="Interested students must submit a complete application through Technex'24's official website or designated platform. Technex'24 reserves the right to accept or reject any application without providing a reason."></Tnc>
      <Tnc text="Ambassadors may be required to organize and participate in events, workshops, and promotional activities as directed by Technex'24. Ambassadors should represent Technex'24 in a positive and professional manner at all times."></Tnc>
      <Tnc text="Technex'24 reserves the right to terminate an ambassadors participation in the program at any time for violation of these terms."></Tnc>
      <Tnc text="Ambassadors may receive incentives, discounts, or other benefits as outlined by Technex'24. Benefits are contingent upon the successful completion of assigned tasks and responsibilities."></Tnc>
      <Tnc text="Ambassadors may have access to confidential information about Technex'24. They are required to maintain the confidentiality of such information both during and after their participation in the program."></Tnc>
      <br />
      <br />
    </div>
  );
};

export default contactUsPage;
