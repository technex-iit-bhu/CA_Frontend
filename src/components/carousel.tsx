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

const info = `
  • Lead CAs to get a rank based Social Media Marketing Internship Certificate from Technex IIT BHU.
  • Exclusively Top Performers will have Letter of Recommendation signed by Chairman, Technex IIT BHU.
  • Goodies and Merchandise Discounts on Tickets and Accommodation for Top Performers.
  • LinkedIn Endorsement.
  • Weekly Instagram Shoutout On Technex Social Media Platforms.
`;


const text = info.trim();

const SlickButtonFix = (
  props: {
    children: JSX.Element;
  } & object
) => {
  const { children, ...otherProps } = props;
  return <span {...otherProps}>{children}</span>;
};

const titletext = [
  'Paisa Hi ',
  <span key={uuidv4()} style={{ color: '#C70039' }}>
    Paisa
  </span>,
  ' Hoga',
];
const lor = `COMING SOON...`;

const IncentivesCarousel = () => {
  const [showFull, setShowFull] = useState(false);
 
  const [selectedCard, setSelectedCard] = useState({ logo: '', text: '' });

  const showFullHandler = (logo: any, text: any) => {
    setShowFull(!showFull);
    setSelectedCard({ logo, text });
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
              <div>
                <IncentiveCard logo={technex} text={text} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler(technex, text)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
                <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
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
              <div>
                <IncentiveCard logo={technex} text={text} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className=' font-semibold text-red'
                  onClick={() => showFullHandler(technex, text)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  Show {showFull ? '' : 'More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
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
              <div>
                <IncentiveCard logo={technex} text={text} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler(technex, text)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
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
              <div>
                <IncentiveCard logo={technex} text={text} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className=' font-semibold text-red'
                  onClick={() => showFullHandler(technex, text)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  Show {showFull ? '' : 'More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>

              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
              <div>
              <IncentiveCard logo={'./logoipsum-284.svg'} text={lor} />
                <button
                  className='px-3 py-1 font-semibold text-red'
                  onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
                >
                  {showFull ? '' : 'Show More'}
                </button>
              </div>
            </Slider>
          </div>
        </div>
      )}
      <div className='fixed left-0 top-1/4 z-30 flex items-center justify-center md:left-1/4 lg:left-[28%]'>
      <CardPopup logo={selectedCard.logo} text={selectedCard.text} trigger={showFull}>
          <button
            className='relative px-3 py-1 pb-2 font-semibold text-red'
            onClick={() => showFullHandler('./logoipsum-284.svg', lor)}
          >
            Show {showFull ? 'Less' : 'More'}
          </button>
        </CardPopup>
      </div>
    </div>
  );
};

export default IncentivesCarousel;