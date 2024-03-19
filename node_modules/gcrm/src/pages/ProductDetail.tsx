import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  return (
    <React.Fragment>
      <div>Page B from App2</div>
      <Link to="/products">Go to Products</Link>
    </React.Fragment>
  );
}