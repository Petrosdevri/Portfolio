import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Profiler id='App' onRender={console.log}>
    <App />
  </Profiler>
);

/* <React.StrictMode>
      <App />
    </React.StrictMode> */
