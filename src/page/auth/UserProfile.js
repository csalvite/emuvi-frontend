import { Avatar, Link, Rating } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenContext } from '../..';
import { ButtonDeleteUser } from '../../components/privateUser/ButtonDeleteUser';
import { ButtonEditAvatar } from '../../components/privateUser/ButtonEditAvatar';
import { ModifyProfile } from '../../components/privateUser/ModifyProfile';
import { usePrivateUser } from '../../hooks/usePrivateUser';

const { REACT_APP_LOCALHOST } = process.env;

function UserProfile() {
  const [token] = useContext(TokenContext);
  const [privateUser] = usePrivateUser();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log('dentro de timeout');
      <Navigate to='/' />;
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [token]);

  return privateUser ? (
    <div className='user-profile'>
      <h1>
        Perfil de {privateUser.name} {privateUser.lastname}
      </h1>
      <Avatar
        alt='holi'
        src={
          privateUser
            ? `${REACT_APP_LOCALHOST}/avatar/${privateUser.avatar}`
            : '/resources/images/cat_chibi.jpeg'
        }
        sx={{ width: 128, height: 128 }}
      />
      <Rating
        name='size-large'
        value={privateUser.mediaVotes}
        size='large'
        readOnly
      />
      <ButtonEditAvatar id={privateUser.id} />
      {/* Hay que buscar otros estilos para borrar usuario */}
      <ButtonDeleteUser id={privateUser.id} />
      <ModifyProfile privateUser={privateUser} />
    </div>
  ) : (
    <div>Usuario borrado o inexistente</div>
  );
}

export { UserProfile };
