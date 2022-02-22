import { Avatar, Rating } from '@mui/material';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { MyProducts } from '../../components/myProducts/MyProducts';
import { UserReceivedOffers } from '../../components/offers/UserReceivedOffers';
import { UserSendOffers } from '../../components/offers/UserSendOffers';
import { ButtonEditAvatar } from '../../components/privateUser/ButtonEditAvatar';
import { FavoriteProducts } from '../../components/privateUser/FavoriteProducts';
import Ratings from '../../components/privateUser/Ratings';
import { UserInfo } from '../../components/privateUser/UserInfo';
import UserMenu from '../../components/userMenu/UserMenu';
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

      {/* Menú de opciones en el perfil del usuario */}
      <UserMenu privateUser={privateUser} />

      <Footer />
    </div>
  ) : (
    <div>Usuario borrado o inexistente</div>
  );
}

export { UserProfile };
