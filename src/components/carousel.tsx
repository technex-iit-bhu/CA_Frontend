import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Head from 'next/head';
import IncentiveCard from './incentive_card';
import { v4 as uuidv4 } from 'uuid';
import 'src/styles/Incentive.module.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const sliderRef1 = useRef<any>();

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
        breakpoint: 264,
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
        breakpoint: 264,
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
    <div>
      <div
        style={{
          justifyContent: 'center',
          margin: '30px',
          position: 'relative',
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

        <Slider {...settings} ref={sliderRef1}>
          <div>
            <IncentiveCard title={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard title={titletext} text={lor} />
          </div> */}
          </div>

          <div>
            <IncentiveCard title={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard title={titletext} text={lor} />
          </div> */}
          </div>

          <div>
            <IncentiveCard title={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard title={titletext} text={lor} />
          </div> */}
          </div>

          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
        </Slider>
      </div>
      <div style={{ justifyContent: 'center', margin: '30px' }}>
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
            <IncentiveCard title={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard title={titletext} text={lor} />
          </div> */}
          </div>

          <div>
            <IncentiveCard title={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard title={titletext} text={lor} />
          </div> */}
          </div>

          <div>
            <IncentiveCard title={titletext} text={lor} />
            {/* <div style={{ marginLeft: 'max(20px, 15vw)' }}>
            <IncentiveCard title={titletext} text={lor} />
          </div> */}
          </div>

          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
          <div>
            <IncentiveCard title={titletext} text={lor} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default IncentivesCarousel;
