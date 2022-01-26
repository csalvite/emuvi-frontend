import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { EmuviRoutes } from './page/Routes';
import { useLocalStorage } from './hooks/useLocalStorage';

// Creamos el contexto del token
export const TokenContext = createContext();
const TokenProvider = ({ children }) => {
  const [jwt, setJwt] = useLocalStorage('jwtToken', '');
  return (
    <TokenContext.Provider value={[jwt, setJwt]}>
      {children}
    </TokenContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    {/* envolvemos todas las rutas con el contexto del token */}
    <TokenProvider>
      <EmuviRoutes />
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
