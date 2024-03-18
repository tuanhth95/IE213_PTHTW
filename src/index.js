import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Bt5 from './bt5.js';
import Bt4 from './bt4.js';
//import Bt1 from './bt1.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bt4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
