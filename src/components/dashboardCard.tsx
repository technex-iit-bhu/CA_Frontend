/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  date: string;
  points: string;
  text: string;
  heading: string;
  taskNumber: string;
  month: string;
}

const Cards: React.FC<Props> = ({
  date,
  points,
  text,
  heading,
  taskNumber,
  month,
}) => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [buttonText, setButtonText] = useState('Upload');
  const fileInputRef = useRef<HTMLInputElement>(null!);

  const onFileSelect = (file: File) => {
    console.log('Selected File:', file);
    console.log('Selected File Name:', file.name);
    setTimeout(() => {
      setIsUploaded(true);
      setButtonText('Uploaded');
    }, 2000);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className='relative mb-5 flex items-center justify-center'>
      <div className='from-gray-400 to-gray-200 relative mb-8 w-full content-center rounded-xl bg-grey bg-gradient-to-b p-6 md:w-1/2 lg:w-1/3'>
        <div className='flex h-full'>
          <div className='h-1/3 w-1/3 rounded-xl bg-black'>
            <img src='' alt='' />
          </div>
          <div className='w-2/3'>
            <p className='mt-2 text-left text-xs md:text-sm'>
              Month:{month} | Task:{taskNumber}
            </p>
            <p className='text-left font-bold md:text-xl lg:text-2xl'>
              {heading}
            </p>
            <p className='text-left text-xs md:text-sm'>{text}</p>
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
                <input
                  type='file'
                  ref={fileInputRef}
                  className='hidden'
                  onChange={handleFileSelect}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className={`text-white h-6 w-20 rounded-full bg-red ${
                    isUploaded ? 'bg-green-500' : 'bg-red-500'
                  }`}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
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
              className='menuItem bg-[#A81F25] p-[10px] flex-shrink-1 flex md:w-1/2 lg:w-1/3'
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
