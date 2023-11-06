import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const ScrollIcon = () => {
  const [rotate, setRotate] = useState('rotate-90 relative bottom-[10vw]');
  const [section, setSection] = useState('#aboutUs');

  useEffect((): (() => void) => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 720) {
        setRotate('-rotate-90');
        setSection('#top');
      } else {
        setRotate('rotate-90 relative bottom-[10vw]');
        setSection('#aboutUs');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='sticky top-0 z-10 flex animate-bounce items-center justify-center pt-10'>
      <ArrowRightIcon
        className={`${rotate}`}
        boxSize={32}
        onClick={scrollToSection}
      />
    </div>
  );
};

export default ScrollIcon;
