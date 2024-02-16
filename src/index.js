import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { Provider } from 'react-redux';
// import { persistor, store } from 'redux/store';
import './index.css';
import {BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/rental-car-service'>
         <App />
    </BrowserRouter>
  </React.StrictMode>
);
