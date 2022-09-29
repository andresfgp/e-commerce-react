import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title">PlatziConf Merch</h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
      </div>
    </div>
  );
};

export default Header;