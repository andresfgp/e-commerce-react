import React from 'react';
import Products from './components/products/Products';
import initialState from '../../initialState';

export const Home = () => {
  return <Products products={initialState.products} />;
};

export default Home;
