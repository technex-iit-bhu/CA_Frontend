import React, { FC, ReactNode } from 'react';
import Footer from './footer';
import contactUs from './contactus';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      {/* <contactUs/> */}
      <Footer />
    </>
  );
};

export default Layout;
