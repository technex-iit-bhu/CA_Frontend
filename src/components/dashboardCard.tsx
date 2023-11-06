import React, { useState, useRef } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
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
    <div className="flex justify-center items-center mb-5 relative">
      <div className="bg-gradient-to-b from-gray-400 to-gray-200 w-full md:w-1/2 lg:w-1/3 rounded-xl p-2 mb-8 relative">
        <div className="flex h-full">
          <div className="bg-gray-500 w-1/3 h-1/3 rounded-xl">
            <img src="" alt="" />
          </div>
          <div className="w-2/3">
            <p className="mt-2 text-left text-xs md:text-sm">
              Month:{month} | Task:{taskNumber}
            </p>
            <p className="text-left font-bold text-2xl md:text-4xl">{heading}</p>
            <p className="text-left text-xs md:text-sm">{text}</p>
            <div className="flex justify-between">
              <p className="text-left text-xs md:text-sm">Expires on: {date}</p>
              <p className="text-left text-xs md:text-sm">Points: {points}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link to="https://www.instagram.com/technexiitbhu/" target="_blank">
                  <img src="/insta.webp" alt="insta" className="w-5 h-5 mr-1" />
                </Link>
                <Link to="https://www.facebook.com/technexiitbhu/" target="_blank">
                  <img src="/facebook.webp" alt="facebook" className="w-5 h-5 mr-1" />
                </Link>
                <Link to="https://www.linkedin.com/company/technex-iit-bhu-varanasi/mycompany/" target="_blank">
                  <img src="/linkedin.webp" alt="linkedIn" className="w-5 h-5 mr-1" />
                </Link>
                <Link to="https://twitter.com/technexiitbhu?lang=en" target="_blank">
                  <img src="/X.webp" alt="twitter" className="w-5 h-5 mr-1" />
                </Link>
              </div>
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileSelect}
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-20 h-6 rounded-full text-white ${isUploaded ? 'bg-green-500' : 'bg-red-500'}`}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Menu>
          <MenuButton as={Button} leftIcon={<ChevronDownIcon />} className="absolute right-0 bottom-0"></MenuButton>
          <MenuList color="red" className="z-10">
            <MenuItem minH="48px" color="red">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              tempore deserunt harum accusamus.
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default Cards;