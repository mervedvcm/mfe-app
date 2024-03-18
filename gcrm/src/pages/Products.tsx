import React from 'react';
import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';

const Products = () => {
  let products: any = [];
  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products.push(name);
  }

  return (
    <React.Fragment>
      <div className='products-container'>
        <strong>Products:</strong>
        {products.map((p: string) => {
          return <div key={p}>{p}</div>;
        })}
        
        <Link to="/productDetail">Go to Product Detail</Link>
      </div>
    </React.Fragment>
  );
};

export default Products;