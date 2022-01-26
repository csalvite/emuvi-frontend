import React, { useContext } from 'react';
import { TokenContext } from '../..';

export const LogoutButton = () => {
  const [, setToken] = useContext(TokenContext);

  function logout() {
    setToken('');
  }
  // onClick={setToken('')}
  return (
    <button onClick={logout} className='btn'>
      Cerrar Sesión
    </button>
  );
};
