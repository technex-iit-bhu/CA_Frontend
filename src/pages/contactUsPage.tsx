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

      {/* <Tnc text='Kaam karna padega'></Tnc>
      <Tnc text='Acche se karna padega'></Tnc>
      <Tnc text='Din raat karna padega'></Tnc>
      <Tnc text='Nahi karoge toh merch nhi milega'></Tnc>
      <Tnc text='PS:Aaj shaam ke GS ke session mein aa jaana sab'></Tnc> */}
      <div className="display: flex; align-items: center; justify-content: center; height: 90vh; width: 90vw; text-align: center;">
    <p>
       &nbsp; &nbsp; &nbsp; By participating in the Technex'24 Campus Ambassador Program, you agree to abide by these terms and conditions. The program is designed to promote Technex'24 on college campuses and build a mutually beneficial relationship  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;between Technex'24 and its ambassadors. Interested students must submit a complete application through Technex'24's official website or designated platform. Technex'24 reserves the right to accept or reject any application  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;without providing a reason. Ambassadors may be required to organize and participate in events, workshops, and promotional activities as directed by Technex'24. Ambassadors should represent Technex'24 in a positive and  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;professional manner at all times. Technex'24 reserves the right to terminate an ambassador's participation in the program at any time for violation of these terms. Ambassadors may receive incentives, discounts, or other benefits as  &nbsp; &nbsp; &nbsp; &nbsp;outlined by Technex'24. Benefits are contingent upon the successful completion of assigned tasks and responsibilities. Ambassadors may have access to confidential information about Technex'24. They are required to maintain the  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;confidentiality of such information both during and after their participation in the program.
    </p>
</div>

      <br />
      <br />
    </div>
  );
};

export default contactUsPage;
