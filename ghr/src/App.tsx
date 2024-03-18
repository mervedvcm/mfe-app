// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { createBrowserHistory } from 'history'; // React 18 uyumlu history kütüphanesi kullanılıyor

// import Landing from './pages/Landing';
// import Pricing from './pages/Pricing';

// const history = createBrowserHistory(); // Tarayıcı geçmişi oluşturuluyor

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/pricing' element={<Pricing />} />
//         <Route path='/' element={<Landing />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import '../public/css/index.scss'

// const App = () => {
//   const cart = {
//     count: Math.floor(Math.random() * 5) + 1,
//   };

//   return (
//     <div className="cart-container">
//       <strong>Cart:</strong>
//       <div>You have {cart.count} items in the cart</div>
//     </div>
//   );
// };

// const rootElement = document.getElementById('ghr-dev-root');
// if (!rootElement) throw new Error('Failed to find the root element');
// const root = ReactDOM.createRoot(rootElement as HTMLElement);
// root.render(<App />);

