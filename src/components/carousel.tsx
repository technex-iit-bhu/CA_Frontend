import React, { useState, useRef, MutableRefObject } from 'react';
import Slider from 'react-slick';
import Head from 'next/head';
import IncentiveCard from './incentive_card';
import { v4 as uuidv4 } from 'uuid';
import 'src/styles/Incentive.module.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardPopup from './cardpopup';
import technex from '../../public/technex_logo.webp';



const text = [
  {
       logo:technex,
       desc:'Lead CAs to get a rank based Social Media Marketing Internship Certificate from Technex IIT BHU.'
  },
  {
       logo:technex,
       desc:'Exclusively Top Performers will have Letter of Recommendation signed by Chairman, Technex IIT BHU.'
  },
  {
       logo:technex,
       desc:'Goodies and Merchandise'
  },
  {
       logo:technex,
       desc:'Discounts on Tickets and Accommodation for Top Performers.'
  },
  {
       logo:technex,
       desc:'LinkedIn Endorsement.'
  },
  {
       logo:technex,
       desc:'Weekly Instagram Shoutout On Technex Social Media Platforms.'
  }
];

const IncentivesCarousel = () => {
  const [showFull, setShowFull] = useState(false);
  const showFullHandler = () => {
    setShowFull(!showFull);
  };
  const sliderRef1 = useRef<any>();
  // const divRef = useRef<MutableRefObject<HTMLDivElement>>()
  // const ref = (divRef.current)
  // const divRefNode = divRef.current
  // if (!showFull) {
  //   ref.classList.add('blur-none')
  //   ref.classList.remove('blur-sm')
  // }
  // else {
  //   ref.classList.add('blur-sm')
  //   ref.classList.remove('blur-none')
  // }

  const next1 = () => {
    sliderRef1.current?.slickNext();
  };

  const previous1 = () => {
    sliderRef1.current?.slickPrev();
  };

  const ArrowLeft1 = () => (
    <ArrowLeftIcon
      onClick={previous1}
      style={{ position: 'absolute', left: '-20px', top: '50%', zIndex: 3 }}
      className={'prev'}
    ></ArrowLeftIcon>
  );

  const ArrowRight1 = () => (
    <ArrowRightIcon
      onClick={next1}
      style={{ position: 'absolute', right: '-20px', top: '50%' }}
      className={'prev'}
    ></ArrowRightIcon>
  );

  const sliderRef2 = useRef<any>();

  const next2 = () => {
    sliderRef2.current?.slickNext();
  };

  const previous2 = () => {
    sliderRef2.current?.slickPrev();
  };

  const ArrowLeft2 = () => (
    <ArrowLeftIcon
      onClick={previous2}
      style={{ position: 'absolute', left: '-20px', top: '50%', zIndex: 3 }}
      className={'prev'}
    ></ArrowLeftIcon>
  );

  const ArrowRight2 = () => (
    <ArrowRightIcon
      onClick={next2}
      style={{ position: 'absolute', right: '-20px', top: '50%' }}
      className={'prev'}
    ></ArrowRightIcon>
  );

  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft1></ArrowLeft1>,
    nextArrow: <ArrowRight1 />,

    lazyload: true,
    //   centerMode: true,

    responsive: [
      {
        breakpoint: 624,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 100,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          mobileFirst: true,
          adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
    ],
  };

  const settings2 = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3.75,
    slidesToScroll: 1,
    rtl: true,
    // centerMode: true,
    prevArrow: <ArrowLeft2></ArrowLeft2>,
    nextArrow: <ArrowRight2 />,
    // centerPadding: '10px',
    // centerMode: true,

    responsive: [
      {
        breakpoint: 624,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          rtl: true,
        },
      },
      {
        breakpoint: 325,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          rtl: true,
        },
      },
      {
        breakpoint: 100,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          mobileFirst: true,
          rtl: true,
          adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
    <div className=''>
      {showFull && (
        <div className='blur-sm'>
          <div
            style={{
              justifyContent: 'center',
              margin: '20px',
            }}
          >
            <Head>
              <link
                rel='stylesheet'
                type='text/css'
                charSet='UTF-8'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
              />
              <link
                rel='stylesheet'
                type='text/css'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
              />
            </Head>

            <Slider {...settings} ref={sliderRef1} className='pb-10'>
              {text.map((txt, index) => (
                <div key={index}>
                  <IncentiveCard logo={txt.logo} text={txt.desc} />
                  <button
                    className='px-3 py-1 font-semibold text-red'
                    onClick={showFullHandler}
                  >
                    {showFull ? '' : 'Show More'}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
          <div style={{ justifyContent: 'center', margin: '20px' }}>
            <Head>
              <link
                rel='stylesheet'
                type='text/css'
                charSet='UTF-8'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
              />
              <link
                rel='stylesheet'
                type='text/css'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
              />
            </Head>
            <Slider {...settings2} ref={sliderRef2}>
              {text.map((txt, index) => (
                <div key={index}>
                  <IncentiveCard logo={txt.logo} text={txt.desc} />
                  <button
                    className='px-3 py-1 font-semibold text-red'
                    onClick={showFullHandler}
                  >
                    {showFull ? '' : 'Show More'}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      {showFull == false && (
        <div className='blur-none'>
          <div
            style={{
              justifyContent: 'center',
              margin: '20px',
            }}
          >
            <Head>
              <link
                rel='stylesheet'
                type='text/css'
                charSet='UTF-8'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
              />
              <link
                rel='stylesheet'
                type='text/css'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
              />
            </Head>

            <Slider {...settings} ref={sliderRef1} className='pb-10'>
              {text.map((txt, index) => (
                <div key={index}>
                  <IncentiveCard logo={txt.logo} text={txt.desc} />
                  <button
                    className='px-3 py-1 font-semibold text-red'
                    onClick={showFullHandler}
                  >
                    {showFull ? '' : 'Show More'}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
          <div style={{ justifyContent: 'center', margin: '20px' }}>
            <Head>
              <link
                rel='stylesheet'
                type='text/css'
                charSet='UTF-8'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
              />
              <link
                rel='stylesheet'
                type='text/css'
                href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
              />
            </Head>
            <Slider {...settings2} ref={sliderRef2}>
              {text.map((txt, index) => (
                <div key={index}>
                  <IncentiveCard logo={txt.logo} text={txt.desc} />
                  <button
                    className='px-3 py-1 font-semibold text-red'
                    onClick={showFullHandler}
                  >
                    {showFull ? '' : 'Show More'}
                  </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
      <div className='fixed left-0 top-1/4 z-30 flex items-center justify-center md:left-1/4 lg:left-[28%]'>
        <CardPopup logo={technex}  trigger={showFull}>
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

export default IncentivesCarousel;
