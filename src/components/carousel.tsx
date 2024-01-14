import React, { useState, useRef, MutableRefObject } from 'react';
import Slider from 'react-slick';
import Head from 'next/head';
import IncentiveCard from './incentive_card';
import 'src/styles/Incentive.module.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardPopup from './cardpopup';

const text1 =
  '⚪Lead CAs to get a rank based Social Media Marketing Internship Certificate from Technex IIT BHU';
const text2 =
  '⚪Exclusively Top Performers will have Letter of Recommendation signed by Chairman';
const text3 =
  '⚪Technex IIT BHU Goodies and Merchandise Discounts on Tickets and Accomodation for Top Performers';
const text4 =
  "⚪Linkedin Endorsement & Weekly Instagram Shoutout On Technex's Social Media Platforms";
const Text_Technex = text1 + '\n\n' + text2 + '\n\n' + text3 + '\n\n' + text4;

const text5 =
  '⚪Exclusive internship opportunities for top performing Campus Ambassadors.';
const text6 =
  '⚪Amazing opportunities to access exclusive career resources, product suite and exciting freebies.';
const Text_Languify = text5 + '\n\n' + text6;

const text7 = '⚪Special Discount on courses of Programming Pathshala for top performing Campus Ambassadors.';
const text8 =
  '⚪Merchandise and Goodies for top performing Campus Ambassadors.';
const Text_Wayspire = text7 + '\n\n' + text8;

const text9 =
  '⚪Exceptional campus ambassadors receive enticing travel vouchers valued at around Rs. 3,000 for flights, buses, and hotels !';
const Text_EaseMyTrip = text9;

const text10 =
  '⚪Free course of ‘Stock Market Made Easy’ for all registering Campus Ambassadors';
const text11 =
  "⚪All registering Campus Ambassadors will receive a complimentary one-month subscription to 'StockEdge Premium’.";
const text12 =
  "⚪Top-performing Campus Ambassadors receive an exclusive 'Stock Market All-in-One Course Combo.";
const TextSE = text10 + '\n\n' + text11 + '\n\n' + text12;

const Text_QuillBot =
  '⚪Top performing Campus Ambassadors will get premium subscription of QuillBot' +
  '\n\n' +
  '⚪Top performers will get discount voucher of 80% on Quillbot.';

const Text_SymbolLab =
  '⚪Premium subscriptions for enthusiasts in Maths for top performing Campus Ambassadors';

const Text_Wayspire2 =
  '⚪Free courses to top performing Campus Ambassadors.' +
  '\n\n' +
  '⚪Course discounts hinge on the exemplary achievements of our Campus Ambassadors';

const Text_Skolar =
  '⚪50% Discount to all campus ambassadors in all courses worth 6500/- off in each courses' +
  '\n\n' +
  '⚪Monetary Internship opportunities to top 20 Campus Ambassadors via an interview round';

const incentiveLogoPaths: [string, string, string][] = [
  [
    '/SE.svg',
    TextSE,
    'https://stockedge.com/premium?utm_source=google&utm_medium=cpc&utm_campaign=NPD_Stockedge_Premium_Brand_Search_Dec23&utm_term=stockedge&gad_source=1&gclid=Cj0KCQiAtOmsBhCnARIsAGPa5yZtbrB2tikTSHCdw4fCecS_uH34zDvuCIHjI4k8sWcGWKuztxlexd4aAvkLEALw_wcB',
  ],
  ['/EaseMyTripLogo.svg', Text_EaseMyTrip, 'https://www.easemytrip.com/'],
  ['/Languify.webp', Text_Languify, 'https://www.languify.in/'],
  ['/wayspire.webp', Text_Wayspire, 'https://programmingpathshala.com/'],
  ['Asset_1.svg', Text_Technex, ''],
  ['/quillBot.png', Text_QuillBot, 'https://quillbot.com/'],
  ['/symboLab.png', Text_SymbolLab, 'https://www.symbolab.com/'],
  ['/skolar.png', Text_Skolar, 'https://www.skolar.in/'],
  ['/wayspire.jpg', Text_Wayspire2, 'https://wayspire.in/'],
];

const IncentivesCarousel = () => {
  const [showFull, setShowFull] = useState(false);
  const [fullLogoText, setFullLogoText] = useState<
    [string, string, string] | null
  >(null);
  const showFullHandler = (content: [string, string, string] | null) => {
    setShowFull(!showFull);
    setFullLogoText(content);
  };
  const sliderRef1 = useRef<any>();
  const sliderRef2 = useRef<any>();

  const next1 = () => {
    sliderRef1.current?.slickNext();
  };
  const previous1 = () => {
    sliderRef1.current?.slickPrev();
  };
  const next2 = () => {
    sliderRef2.current?.slickNext();
  };
  const previous2 = () => {
    sliderRef2.current?.slickPrev();
  };

  const ArrowLeft1 = () => (
    <ArrowLeftIcon onClick={previous1} className={'arrow prev'}></ArrowLeftIcon>
  );
  const ArrowRight1 = () => (
    <ArrowRightIcon onClick={next1} className={'arrow next'}></ArrowRightIcon>
  );
  const ArrowLeft2 = () => (
    <ArrowLeftIcon onClick={previous2} className={'arrow prev'}></ArrowLeftIcon>
  );

  const ArrowRight2 = () => (
    <ArrowRightIcon onClick={next2} className={'arrow next'}></ArrowRightIcon>
  );

  const settings1 = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,

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
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 500,
    slidesToShow: 3.75,
    slidesToScroll: 1,
    rtl: true,

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
          </div>
        </div>
      )}
      {
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

            <Slider
              {...settings1}
              ref={sliderRef1}
              prevArrow={<ArrowLeft1 />}
              nextArrow={<ArrowRight1 />}
            >
              {incentiveLogoPaths.map((logo_text, index) => {
                return (
                  <div key={index}>
                    <IncentiveCard
                      logo={logo_text[0]}
                      text={logo_text[1]}
                      hyperlink={logo_text[2]}
                    />

                    <button
                      className=' font-semibold text-red'
                      onClick={() => showFullHandler(logo_text)}
                    >
                      {'Show More'}
                    </button>
                  </div>
                );
              })}
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
            <Slider
              {...settings2}
              ref={sliderRef2}
              rtl={true}
              prevArrow={<ArrowLeft2 />}
              nextArrow={<ArrowRight2 />}
            >
              {incentiveLogoPaths.map((logo_text, index) => {
                return (
                  <div key={index}>
                    <IncentiveCard
                      logo={logo_text[0]}
                      text={logo_text[1]}
                      hyperlink={logo_text[2]}
                    />

                    <button
                      className=' font-semibold text-red'
                      onClick={() => showFullHandler(logo_text)}
                    >
                      {'Show More'}
                    </button>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      }
      <p className='fixed left-0 top-1/4 z-30 flex items-center justify-center md:left-1/4 lg:left-[28%]'>
        <CardPopup
          logo={(fullLogoText && fullLogoText[0]) || '/logoipsum-284.svg'}
          text={(fullLogoText && fullLogoText[1]) || 'BUG!!!'}
          hyperlink={(fullLogoText && fullLogoText[2]) || 'BUG!!!'}
          trigger={showFull}
        >
          <button
            className='relative px-3 py-1 pb-2 font-semibold text-red'
            onClick={() => showFullHandler(null)}
          >
            Show {showFull ? 'Less' : 'More'}
          </button>
        </CardPopup>
      </p>
    </div>
  );
};

export default IncentivesCarousel;
