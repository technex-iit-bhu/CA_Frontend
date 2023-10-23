import React, { FC, ReactNode } from 'react';
import Footer from './footer';
import Contactus from './contactus';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Contactus />
      <Footer />
    </>
  );
};

export default Layout;
