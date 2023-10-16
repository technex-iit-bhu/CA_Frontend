
import React, { FC, ReactNode } from 'react';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* add <Navbar /> here */}
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;