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
const lor = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque animi nihil deleniti modi hic voluptatibus dolorem. Ea eaque repellendus odio rem illo perferendis eveniet? Molestias doloremque id pariatur reiciendis iste!`;

const IncentivesCarousel = () => {
  const [showFull, setShowFull] = useState(false)
  const showFullHandler = () => {
    setShowFull(!showFull);
  }
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
      {showFull && <div className='blur-sm'>
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
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
            </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
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
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className=' text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              Show {showFull ? "" : "More"}
            </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          </Slider>
        </div>
      </div> }
      {showFull==false && <div className='blur-none'>
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
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
            </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
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
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className=' text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              Show {showFull ? "" : "More"}
            </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard logo={titletext} text={lor} />
          </div> */}
          <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>

          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          <div>
            <IncentiveCard logo={titletext} text={lor} />
            <button className='px-3 py-1 text-red font-semibold' onClick={showFullHandler}>
              {showFull ? "" : "Show More"}
          </button>
          </div>
          </Slider>
        </div>
      </div>}
      <div className='flex items-center fixed z-30 justify-center top-1/4 left-0 md:left-1/4 lg:left-[28%]'>
      <CardPopup logo={'./logoipsum-284.svg'} text={lor} trigger={showFull}>
      <button className='px-3 py-1 pb-2 text-red font-semibold relative' onClick={showFullHandler}>
        Show {showFull ? "Less" : "More"}
      </button>
      </CardPopup>
      </div>
    </div>
  );
};

export default IncentivesCarousel;
