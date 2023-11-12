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
    {/* <div className='z-10 mb-96 lg:pb-64 xl:pb-96'>
          <Navbar />
        </div> */}
        
      <main>{children}</main>
      {/* <Navbar></Navbar> */}
      {/* <contactUs/> */}
      <Footer />
    </>
  );
};

export default Layout;
