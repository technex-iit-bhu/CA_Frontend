import React, { useRef } from 'react';
import Slider from 'react-slick';
import Head from 'next/head';
import IncentiveCard from './incentive_card';
import { v4 as uuidv4 } from 'uuid';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import ResponsibilityCard from './responsibility_card';
import ResponsibilityCard_Symbol from './responsibility_card_symbol';
import ResponsibilityCard_Symbol_Bottom from './responsibility_card_Symbol_Bottom';

// const titletext = ["Paisa Hi ",  <span key={uuidv4()} style={{color: "#C70039"}}>Paisa</span>, " Hoga"];
// const lor = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque animi nihil deleniti modi hic voluptatibus dolorem. Ea eaque repellendus odio rem illo perferendis eveniet? Molestias doloremque id pariatur reiciendis iste!`

const ResponsibilityCarousel = () => {
  const sliderRef = useRef<any>();

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const ArrowLeft = () => (
    <ArrowLeftIcon
      onClick={previous}
      style={{ position: 'absolute', left: '-20px', top: '50%', zIndex: 3 }}
      className={'prev'}
    ></ArrowLeftIcon>
  );

  const ArrowRight = () => (
    <ArrowRightIcon
      onClick={next}
      style={{ position: 'absolute', right: '-20px', top: '50%' }}
      className={'prev'}
    ></ArrowRightIcon>
  );

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    float: 'left',
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 1098,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 884,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          //   mobileFirst: true,
          //   adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 670,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          //   mobileFirst: true,
          //   adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
      {
        breakpoint: 476,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          //   mobileFirst: true,
          //   adaptiveHeight: true,

          autoplaySpeed: 5000,
        },
      },
    ],
  };

  return (
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
      <Slider {...settings} ref={sliderRef}>
        <ResponsibilityCard_Symbol></ResponsibilityCard_Symbol>
        <ResponsibilityCard></ResponsibilityCard>
        <ResponsibilityCard_Symbol_Bottom></ResponsibilityCard_Symbol_Bottom>
        <ResponsibilityCard></ResponsibilityCard>
        <ResponsibilityCard_Symbol></ResponsibilityCard_Symbol>
        <ResponsibilityCard></ResponsibilityCard>
        <ResponsibilityCard_Symbol_Bottom></ResponsibilityCard_Symbol_Bottom>
        <ResponsibilityCard></ResponsibilityCard>
        <ResponsibilityCard_Symbol></ResponsibilityCard_Symbol>
        <ResponsibilityCard></ResponsibilityCard>
        <ResponsibilityCard_Symbol_Bottom></ResponsibilityCard_Symbol_Bottom>
      </Slider>
    </div>
  );
};

export default ResponsibilityCarousel;
