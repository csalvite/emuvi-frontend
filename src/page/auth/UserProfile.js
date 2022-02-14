import { Avatar, Rating } from '@mui/material';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { UserReceivedOffers } from '../../components/offers/UserReceivedOffers';
import { UserSendOffers } from '../../components/offers/UserSendOffers';
import { ButtonDeleteUser } from '../../components/privateUser/ButtonDeleteUser';
import { ButtonEditAvatar } from '../../components/privateUser/ButtonEditAvatar';
import { FavoriteProducts } from '../../components/privateUser/FavoriteProducts';
import Ratings from '../../components/privateUser/Ratings';
import { UserInfo } from '../../components/privateUser/UserInfo';
import { UserMap } from '../../components/UserMap';
import { usePrivateUser } from '../../hooks/usePrivateUser';

const { REACT_APP_LOCALHOST } = process.env;

function UserProfile() {
  const [privateUser] = usePrivateUser();

  return privateUser ? (
    <div className='user-profile'>
      <JustNav />
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
        alt={privateUser.username}
        src={
          privateUser.avatar
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
        <UserSendOffers idUser={privateUser.id} />
        <UserReceivedOffers idUser={privateUser.id} />
      </div>

      <UserMap className='leaflet-container' />

      <Footer />
    </div>
  ) : (
    <div>Usuario borrado o inexistente</div>
  );
}

export { UserProfile };
