import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './context/StateProvider';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // by putting the provider at this level, we are able to access it in ALL components
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
);
