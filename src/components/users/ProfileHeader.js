import { Avatar } from '@mui/material';
import React, { useContext } from 'react';
import { TokenContext } from '../..';
import { LogoutButton } from './LogoutButton';

export const ProfileHeader = () => {
  const [token] = useContext(TokenContext);

  return (
    token && (
      <div>
        <Avatar alt='User Name' src='' sx={{ width: 56, height: 56 }} />
        <LogoutButton />
      </div>
    )
  );
};
