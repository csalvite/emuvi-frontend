import { Link } from '@mui/material';
import React, { useContext } from 'react';
import { TokenContext } from '../..';

export const OptionProfile = () => {
  const [token] = useContext(TokenContext);

  function toProfile() {
      if (token) {
        <Link to='/profile' />;
      }
  }
  // onClick={setToken('')}
  return <div onClick={toProfile}>Mi Perfil</div>;
};
