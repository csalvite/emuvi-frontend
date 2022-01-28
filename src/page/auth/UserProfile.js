import { Avatar, Link, Rating } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenContext } from '../..';
import { ButtonDeleteUser } from '../../components/privateUser/ButtonDeleteUser';
import { ButtonEditAvatar } from '../../components/privateUser/ButtonEditAvatar';
import { usePrivateUser } from '../../hooks/usePrivateUser';

const { REACT_APP_LOCALHOST } = process.env;

function UserProfile() {
  const [token] = useContext(TokenContext);
  const [user, setUser] = useState('');
  const [ratingValue, setRatingValue] = useState();

  const getAvatar = async () => {
    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}/profile`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.token,
        },
      });

      if (response.ok) {
        console.log('respuesta ok');
        const body = await response.json();
        setUser(body.data);
      } else {
        setUser('');
      }
    } catch (error) {
      console.error('Error en el hook');
    }
  };

  useEffect(() => {
    getAvatar();
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log('dentro de timeout');
      <Navigate to='/' />;
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [token]);

  return user ? (
    <div className='user-profile'>
      <h1>
        Perfil de {user.name} {user.lastname}
      </h1>
      <Avatar
        alt='holi'
        src={
          user
            ? `${REACT_APP_LOCALHOST}/avatar/${user.avatar}`
            : '/resources/images/cat_chibi.jpeg'
        }
        sx={{ width: 128, height: 128 }}
      />
      <Rating name='size-large' value={user.mediaVotes} size='large' />
      <ButtonEditAvatar id={user.id} />
      {/* Hay que buscar otros estilos para borrar usuario */}
      <ButtonDeleteUser id={user.id} />
      <div>
        <p>Ciudad: {user.city}</p>
        <p>Provincia: {user.province}</p>
        <p>Código Postal: {user.postalCode}</p>
      </div>
    </div>
  ) : (
    <div>Usuario borrado o inexistente</div>
  );
}

export { UserProfile };
