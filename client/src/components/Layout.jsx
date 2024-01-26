import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col overscroll-x-none">
        <Header />
        <main className="flex flex-grow flex-col">
          {/* Parent element for all child routes should contain className="flex-grow" */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
