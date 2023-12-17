import { ClassNames } from '@emotion/react';
import React, { FC } from 'react';
import { useState } from 'react';
import 'src/styles/Incentive.module.css';
import Image from 'next/image';
import CardPopup from './cardpopup';

interface CardProps {
  logo: any;
  text: string;
}

const IncentiveCard: FC<CardProps> = ({ logo, text }) => {
  const [showFullDescription, setFullDescription] = useState(false);

  const description = showFullDescription
    ? 'Description'
    : text.slice(0, 150);
  return (
    <main>
      <div
        style={{
          display: 'flex',
          border: '3px solid black',
          borderColor: 'black',
          outline: 'solid 3px #A81F25',
          outlineOffset: '-.7vw',
          borderRadius: '30px',
          borderWidth: '3px',
          backgroundColor: '#272727',
          margin: '10px',
          overflow: 'hidden',
        }}
      >
        <div style={{ margin: '10px' }} className='space-y-3'>
          <div className='flex items-center justify-center p-1'>
            <Image
              alt='companylogo'
              src={'/logoipsum-284.svg' || logo}
              width={100}
              height={100}
            />
          </div>
          <p
            className='px-3 py-1 pb-2'
            style={{
              fontSize: '15px',
              color: 'white',
              padding: '',
            }}
          >
            {showFullDescription ? `${description}` : `${description}...`}
          </p>
        </div>
      </div>
    </main>
  );
};
export default IncentiveCard;
