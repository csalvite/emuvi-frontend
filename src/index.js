import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './page/home/App';
import { Login } from './page/login-register/Login';
import { Register } from './page/login-register/Register';
import Products from './page/products/Products';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-zq3gwiom.us.auth0.com'
      clientId='DFMyYLRlLm2sCbGn8vKJUcrC3LsgbPtf'
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='products' element={<Products />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
