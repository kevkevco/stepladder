import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ErrorPage from './ErrorPage';

const LayoutWithError = () => {
  return (
    <div className="flex min-h-screen flex-col overscroll-x-none">
      <Header />
      <main className="flex flex-grow flex-col items-stretch">
        <ErrorPage />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutWithError;
