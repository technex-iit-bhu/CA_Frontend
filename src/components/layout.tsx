import React, { FC, ReactNode, useState, useEffect } from 'react';
import Footer from './footer';
import contactUs from './contactUs';
import Navbar from './navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      {/* <Navbar></Navbar> */}
      {/* <contactUs/> */}
      <Footer />
    </>
  );
};

export default Layout;
