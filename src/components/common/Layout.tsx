import React from 'react';
import Header from './Header';
import Footer from './Footer';
import DockBar from './DockBar';
import { Outlet } from 'react-router-dom';
import { Section } from '../../styles/common.css';

const Layout: React.FC= () => {
  return (
    <>
      <Header />
      <Section>
        <Outlet />
      </Section>
      <DockBar />
      <Footer />
    </>
  );
};

export default Layout;
