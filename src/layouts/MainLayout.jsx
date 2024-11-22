import React from 'react';
import Header from '../components/Layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Layout/Footer';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Header />
      <section className='mb-4'>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
