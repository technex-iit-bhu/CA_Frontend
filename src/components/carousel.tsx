import React, { useState } from 'react';
import IncentiveCard from './incentive_card';
import { v4 as uuidv4 } from 'uuid';
import 'src/styles/Incentive.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardPopup from './cardpopup';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const titletext = [
  'Paisa Hi ',
  <span key={uuidv4()} style={{ color: '#C70039' }}>
    Paisa
  </span>,
  ' Hoga',
];
const lor = `COMING SOON...`;

const IncCarousel = () => {
  const [showFull, setShowFull] = useState(false);
  const showFullHandler = () => {
    setShowFull(!showFull);
  };

  const IncentivesCarousel = () => {
    return (
      <Carousel
        showThumbs={true}
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        centerMode
        centerSlidePercentage={25}
      >
        <div>
          <IncentiveCard logo={titletext} text={lor} />
          <button
            className='px-3 py-1 font-semibold text-red'
            onClick={showFullHandler}
          >
            {showFull ? '' : 'Show More'}
          </button>
        </div>
        <div>
          <IncentiveCard logo={titletext} text={lor} />
          <button
            className='px-3 py-1 font-semibold text-red'
            onClick={showFullHandler}
          >
            {showFull ? '' : 'Show More'}
          </button>
        </div>
        <div>
          <IncentiveCard logo={titletext} text={lor} />
          <button
            className='px-3 py-1 font-semibold text-red'
            onClick={showFullHandler}
          >
            {showFull ? '' : 'Show More'}
          </button>
        </div>
        <div>
          <IncentiveCard logo={titletext} text={lor} />
          <button
            className='px-3 py-1 font-semibold text-red'
            onClick={showFullHandler}
          >
            {showFull ? '' : 'Show More'}
          </button>
        </div>
        <div>
          <IncentiveCard logo={titletext} text={lor} />
          <button
            className='px-3 py-1 font-semibold text-red'
            onClick={showFullHandler}
          >
            {showFull ? '' : 'Show More'}
          </button>
        </div>
        <div>
          <IncentiveCard logo={titletext} text={lor} />
          <button
            className='px-3 py-1 font-semibold text-red'
            onClick={showFullHandler}
          >
            {showFull ? '' : 'Show More'}
          </button>
        </div>
        <div>
          <IncentiveCard logo={titletext} text={lor} />
          <button
            className='px-3 py-1 font-semibold text-red'
            onClick={showFullHandler}
          >
            {showFull ? '' : 'Show More'}
          </button>
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    );
  };
  return (
    <div className=''>
      <div>
        <IncentivesCarousel />
        <IncentivesCarousel />
      </div>
      <div className='fixed left-0 top-1/4 z-30 flex items-center justify-center md:left-1/4 lg:left-[28%]'>
        <CardPopup logo={'./logoipsum-284.svg'} text={lor} trigger={showFull}>
          <button
            className='relative px-3 py-1 pb-2 font-semibold text-red'
            onClick={showFullHandler}
          >
            Show {showFull ? 'Less' : 'More'}
          </button>
        </CardPopup>
      </div>
    </div>
  );
};

export default IncCarousel;
