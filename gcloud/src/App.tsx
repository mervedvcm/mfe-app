import React from 'react';
import ReactDOM from 'react-dom/client';
import 'gcrm/GcrmIndex';
import 'ghr/GhrIndex'; 
import './index.scss';

const App = () => (
  <div className='container'>
    <strong>Host</strong>
    <div id='gcrm-dev'></div>
    <div id='ghr-dev'></div>
  </div>
);


const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')
const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(<App />)
