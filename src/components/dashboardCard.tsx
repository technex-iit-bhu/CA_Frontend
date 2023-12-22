/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Button, Input } from '@chakra-ui/react';
import Image from 'next/image';

interface Props {
  date: string;
  points: string;
  description: string;
  title: string;
  taskNumber: string;
  taskID: string;
  month: string;
  activeTab: string;
}

const Cards: React.FC<Props> = ({
  date,
  points,
  description,
  title,
  taskNumber,
  taskID,
  month,
  activeTab
}) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [buttonText, setButtonText] = useState('Upload');
  const fileInputRef = useRef<HTMLInputElement>(null!);
  const [dropdown, setDropdown] = useState(false);
  const [gdriveLink, setGdriveLink] = useState('');

  const handleSubmit = async () => {
    // console.log('Selected File:', file);
    // console.log('Selected File Name:', file.name);
    // setTimeout(() => {
    //   setIsUploaded(true);
    //   setButtonText('Uploaded');
    // }, 2000);

    try {
      const response = await fetch(`https://ca-backend-qknd.onrender.com/tasks/submit/${taskID}/`, {
        method: 'post',
        body: JSON.stringify({ link: gdriveLink }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      console.log(gdriveLink);
      if (response.status === 201) {
        console.log('Uploaded');
        setIsUploaded(true);
        setButtonText('Uploaded');
        setDropdown(false);
      }
      else if (response.status === 400) {
        console.log('Invalid Link or Task Already Submitted');
        setDropdown(false);
      }
      else if (response.status === 401) {
        console.log('Unauthorized');
        setDropdown(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = () => {
    setDropdown(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGdriveLink(e.target.value);
  };

  return (
    <div className='relative mb-5 flex items-center justify-center'>
      <div className='from-gray-400 to-gray-200 relative mb-8 w-full content-center rounded-xl bg-grey bg-gradient-to-b p-6  md:w-1/2 lg:w-1/3'>
        <div className='flex h-full items-center'>
          <div className='h-1/3 w-1/3 rounded-xl bg-black'>
            {activeTab === 'live' && <Image src='/tasks/2155223-removebg-preview.png' alt='Live Task' width={120} height={120}/>}
            {activeTab === 'submitted' && <Image src='/tasks/3255337-removebg-preview.png' alt='Submitted Task' width={120} height={120}/>}
            {activeTab === 'completed' && <Image src='/tasks/5995357-removebg-preview.png' alt='Completed Task' width={120} height={120}/>}
            {activeTab === 'expired' && <Image src='/tasks/8356278-removebg-preview.png' alt='Expired Task' width={120} height={120}/>}
          </div>
          <div className='w-2/3'>
            <p className='mt-2 text-left text-xs md:text-sm'>
              Month:{month} | Task:{taskNumber}
            </p>
            <p className='text-left font-bold md:text-xl lg:text-2xl'>
              {title}
            </p>
            <p className='text-left text-xs md:text-sm'>{description}</p>
            <div className='flex justify-between'>
              <p className='text-left text-xs md:text-sm'>Expires on: {date}</p>
              <p className='text-left text-xs md:text-sm'>Points: {points}</p>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <a
                  href='https://www.instagram.com/technexiitbhu/'
                  target='_blank'
                >
                  <img src='/insta.webp' alt='insta' className='mr-1 h-5 w-5' />
                </a>
                <a
                  href='https://www.facebook.com/technexiitbhu/'
                  target='_blank'
                >
                  <img
                    src='/facebook.webp'
                    alt='facebook'
                    className='mr-1 h-5 w-5'
                  />
                </a>
                <a
                  href='https://www.linkedin.com/company/technex-iit-bhu-varanasi/mycompany/'
                  target='_blank'
                >
                  <img
                    src='/linkedin.webp'
                    alt='linkedIn'
                    className='mr-1 h-5 w-5'
                  />
                </a>
                <a
                  href='https://twitter.com/technexiitbhu?lang=en'
                  target='_blank'
                >
                  <img src='/X.webp' alt='twitter' className='mr-1 h-5 w-5' />
                </a>
              </div>
              <div>
                {activeTab === "live" && <button
                  onClick={handleUpload}
                  className={`text-white h-6 w-20 rounded-full bg-red ${
                    isUploaded ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {buttonText}
                </button>}
              </div>
            </div>
          </div>
        </div>
        {dropdown && <form className='py-5 flex flex-col items-center'>
          <Input placeholder='Your Google Drive Link Here' className='w-full bg-[#191919] h-10 px-5 rounded-[50px]' value={gdriveLink} onChange={handleChange}/>
          <Button className='w-[30%] bg-[#A81F25] h-10 rounded-[50px] mt-2' onClick={handleSubmit}>Submit</Button>
        </form>}
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<ChevronDownIcon />}
            className='absolute bottom-0 right-0'
          ></MenuButton>
          <MenuList className='z-10'>
            <MenuItem
              minH='48px'
              maxW='350px'
              className='menuItem flex-shrink-1 flex bg-[#A81F25] p-[10px] md:w-1/2 lg:w-1/3'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Cards;
