import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../..';

export const OptionLogoutButton = () => {
  const [, setToken] = useContext(TokenContext);
  const navigate = useNavigate();

  function logout() {
    setToken('');
    navigate('/');
  }

  return <div onClick={logout}>Cerrar Sesión</div>;
};
