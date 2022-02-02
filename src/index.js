import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './page/home/App';
import { Register } from './page/auth/Register';
import Products from './page/products/Products';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import AboutUs from './components/aboutUs/AboutUs';

const { REACT_APP_AUTH0_DOMAIN, REACT_APP_AUTH0_CLIENT_ID } = process.env;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={REACT_APP_AUTH0_DOMAIN}
      clientId={REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="products" element={<Products />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
