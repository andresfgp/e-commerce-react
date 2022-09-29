import React from 'react';
import Product from '../product/Product';
import './Products.scss';

export const Products = () => {
  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;