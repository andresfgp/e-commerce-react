import React from 'react';
import Products from './components/products/Products';
import initialState from '../../initialState';
import MetaHead from '../../components/meta-head/MetaHead';

export const Home = () => {
  const title = "E-commerce Store"
  const description = "Super Store"
  const image = "https://s3.amazonaws.com/gndx.dev/gndxdev.png"
  return (
  <>
    <MetaHead title={title} description={description} image={image} />
    <Products products={initialState.products} />
  </>
  );
};

export default Home;
