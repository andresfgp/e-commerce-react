import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

export const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;