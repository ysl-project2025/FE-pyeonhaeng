import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DockBar from './DockBar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC= () => {
  return (
    <>
      <Header />
      <Outlet />
      <DockBar />
      <Footer />
    </>
  );
};

export default Layout;
