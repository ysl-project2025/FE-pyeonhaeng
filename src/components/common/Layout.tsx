import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DockBar from './DockBar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC= () => {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <DockBar />
      <Footer />
    </>
  );
};

export default Layout;
