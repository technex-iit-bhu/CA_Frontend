import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const navLinks = [
  { title: "Incentives", href: "/incentives" },
  { title: "Contact Us", href: "/contactus" },
  { title: "FAQs", href: "/faqs" },
];
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

  return (
    <header>
        <div
          className="cursor-pointer lg:hidden text-md text-white"
          onClick={toggleMenu}>
          <HamburgerIcon boxSize={28}/>
        </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#191919] text-white p-10 z-10"
          >
            <div className="flex h-full flex-col">
                <p
                  className="cursor-pointer"
                  onClick={toggleMenu}
                >
                  <CloseIcon boxSize={28}/>
                </p>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-5 "
              >
                <motion.div variants={mobileLinkVars}>
                <Link href={"/about"} className='text-[#A81F25] text-4xl'>About</Link>
                </motion.div>
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
                <Link href={"/login"} className='border-2 text-3xl py-1 px-5 sm:px-7 rounded-e-full border-[#A81F25] rounded-s-full'>Login</Link>
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
    y: "30vh",
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
const MobileNavLink = ({ title, href }: { title: string, href: string }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-3xl uppercase text-white"
    >
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};