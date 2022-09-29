import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">PlatziConf Merch</h1>
      <div className="Header-checkout">
        Checkout
      </div>
    </div>
  );
};

export default Header;