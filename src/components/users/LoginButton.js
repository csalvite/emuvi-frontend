import React from 'react';
import { Link } from 'react-router-dom';

export const LoginButton = () => {
  return (
    <Link to='/login'>
      <button className='btn'>LOGIN/REGISTER</button>
    </Link>
  );
};
