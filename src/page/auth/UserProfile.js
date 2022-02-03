import { Avatar, Rating } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { TokenContext } from '../..';
import Footer from '../../components/footer/Footer';
import Header1 from '../../components/Header';
import { ButtonDeleteUser } from '../../components/privateUser/ButtonDeleteUser';
import { ButtonEditAvatar } from '../../components/privateUser/ButtonEditAvatar';
import { FavoriteProducts } from '../../components/privateUser/FavoriteProducts';
import Ratings from '../../components/privateUser/Ratings';
import { UserInfo } from '../../components/privateUser/UserInfo';
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
      <Header1 />
      {privateUser.active ? (
        ''
      ) : (
        <div>
          El usuario no está activo, para activarlo comprueba tu correo y
          completa el registro!
        </div>
      )}
      <h1>
        {privateUser.name} {privateUser.lastname}
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
      {/* Aqui deberíamos tener el menú de selección para el usuario las etiquetas no son las finales, son de ejemplo*/}
      <menu>
        <select>
          <option>Editar Perfil</option>
          <option>Mis Ofertas</option>
          <option>Favoritos</option>
          <option>Valoraciones</option>
        </select>
      </menu>
      <div>
        {}
        <UserInfo privateUser={privateUser} id='edit' />
        <FavoriteProducts privateUser={privateUser} />
        <Ratings privateUser={privateUser} />
      </div>

      <Footer />
    </div>
  ) : (
    <div>Usuario borrado o inexistente</div>
  );
}

export { UserProfile };
