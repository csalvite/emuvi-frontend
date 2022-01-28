import React, { useContext } from 'react';
import { TokenContext } from '../..';

export const OptionLogoutButton = () => {
  const [, setToken] = useContext(TokenContext);

  function logout() {
    setToken('');
  }
  // onClick={setToken('')}
  return <div onClick={logout}>Cerrar Sesión</div>;
};
