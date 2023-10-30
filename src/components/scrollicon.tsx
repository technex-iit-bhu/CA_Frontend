import React, { useState, useEffect } from 'react';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

const ScrollIcon = () => {
  const router = useRouter();
  const [rotate, setRotate] = useState('');
  const [section, setSection] = useState('#aboutUs')

  useEffect((): (() => void) => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 800) {
        setRotate('-rotate-90');
        setSection('#top');
      } else {
        setRotate('rotate-90');
        setSection('#aboutUs');
      }
    };
    
    const ScrollTo=()=>{
      
    }
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
    <div className='flex animate-bounce items-center justify-center pt-10 sticky top-0 z-20'>
      <ArrowRightIcon className={`${rotate}`} boxSize={32} onClick={scrollToSection}/>
    </div>
  );
};

export default ScrollIcon;
