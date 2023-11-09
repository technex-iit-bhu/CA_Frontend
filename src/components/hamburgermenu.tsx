import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };


  const [aboutColor, setAboutColor] = useState('red');
  const [incentivesColor, setIncentivesColor] = useState('white');
  const [contactusColor, setContactusColor] = useState('white');
  const [faqColor, setFaqColor] = useState('white');
  const [leaderboardColor, setLeaderBoardColor] = useState('white');


  const navLinks = [
    { color: incentivesColor, title: 'Incentives', href: '/incentivesPage' },
    { color: contactusColor, title: 'Contact Us', href: '/contactUsPage' },
    { color: faqColor, title: 'FAQs', href: '/faqs' },
    { color: leaderboardColor, title: 'Leaderboard', href: '/leaderboard' },
  ];

  useEffect(() => {
    if (window.location.pathname === '/index') {
      setAboutColor('red');
      setIncentivesColor('white');
      setContactusColor('white');
      setFaqColor('white');
      setLeaderBoardColor('white');
    } else if (window.location.pathname === '/incentivesPage') {
      setAboutColor('white');
      setIncentivesColor('red');
      setContactusColor('white');
      setFaqColor('white');
      setLeaderBoardColor('white');
    } else if (window.location.pathname === '/contactUsPage') {
      setAboutColor('white');
      setIncentivesColor('white');
      setContactusColor('red');
      setFaqColor('white');
      setLeaderBoardColor('white');
    } else if (window.location.pathname === '/faqs') {
      setAboutColor('white');
      setIncentivesColor('white');
      setContactusColor('white');
      setFaqColor('red');
      setLeaderBoardColor('white');
    } else if (window.location.pathname === '/leaderboard') {
      setAboutColor('white');
      setIncentivesColor('white');
      setContactusColor('white');
      setFaqColor('white');
      setLeaderBoardColor('red');
    }
  }, []);

  return (
    <header className='z-20'>
      <div className='text-md text-white cursor-pointer' onClick={toggleMenu}>
        <HamburgerIcon boxSize={28} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial='initial'
            animate='animate'
            exit='exit'
            className='text-white fixed left-0 top-0 z-20 h-screen w-full origin-top bg-[#191919] p-10'
          >
            <div className='flex h-full flex-col'>
              <p className='cursor-pointer' onClick={toggleMenu}>
                <CloseIcon boxSize={28} />
              </p>
              <motion.div
                variants={containerVars}
                initial='initial'
                animate='open'
                exit='initial'
                className='flex h-full flex-col items-center justify-center gap-5 '
              >
                <motion.div variants={mobileLinkVars}>
                <Link href={'/'} className={`text-4xl text-${aboutColor}`}>
                    About
                  </Link>
                </motion.div>
                {navLinks.map((link, index) => {
                  return (
                    <div className='overflow-hidden' key={index}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        color={link.color}
                        href={link.href}
                      />
                    </div>
                  );
                })}
                <Link
                  href={'/login'}
                  className='rounded-e-full rounded-s-full border-2 border-[#A81F25] px-5 py-1 text-3xl sm:px-7'
                >
                  Login
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Hamburger;

const mobileLinkVars = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ color, title, href }: { color:any, title: string; href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className='text-white text-3xl uppercase'
    >
      <Link className={`text-4xl text-${color}`} href={href}>{title}</Link>
    </motion.div>
  );
};