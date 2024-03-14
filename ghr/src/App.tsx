import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

const App = () => {
  const cart = {
    count: Math.floor(Math.random() * 5) + 1,
  };

  return (
    <div className="cart-container">
      <strong>Cart:</strong>
      <div>You have {cart.count} items in the cart</div>
    </div>
  );
};

const rootElement = document.getElementById('ghr-dev');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement as HTMLElement);
root.render(<App />);

