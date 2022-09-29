import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';

import './Header.scss';

export const Header = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;
  return (
    <div className="Header">
      <h1 className="Header-title">PlatziConf Merch</h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
