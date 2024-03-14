import React from 'react'
import ReactDOM from 'react-dom/client'
import { faker } from '@faker-js/faker';

import './index.scss'

let products: any = [];
for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products.push(name);
}

const App = () => (
  <div className='products-container'>
    <strong>Products:</strong>
    {products.map((p) => {
      return <div key={p}>{p}</div>;
    })}
  </div>
);


const rootElement = document.getElementById('gcrm-dev');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);
// ReactDOM.render(<App />, document.getElementById('products-dev'));
