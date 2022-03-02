import { useRoutes } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { MyProducts } from '../../components/myProducts/MyProducts';
import { UserReceivedOffers } from '../../components/offers/UserReceivedOffers';
import { UserSendOffers } from '../../components/offers/UserSendOffers';
import { FavoriteProducts } from '../../components/privateUser/FavoriteProducts';
import Ratings from '../../components/ratings/Ratings';
import { UserInfo } from '../../components/privateUser/UserInfo';
import { Sidebar } from '../../components/userMenu/Sidebar';
import { usePrivateUser } from '../../hooks/usePrivateUser';

function UserProfile() {
  const { privateUser } = usePrivateUser();

  let routes = [
    {
      path: '/',
      element: <Sidebar privateUser={privateUser} />,
      children: [
        {
          index: true,
          element: <UserInfo privateUser={privateUser} id='edit' />,
        },
        {
          path: '/myproducts',
          element: <MyProducts privateUser={privateUser} />,
        },
        {
          path: '/favorites',
          element: <FavoriteProducts privateUser={privateUser} />,
        },
        {
          path: '/ratings',
          element: <Ratings privateUser={privateUser} />,
        },
        {
          path: '/sendoffers',
          element: <UserSendOffers idUser={privateUser} />,
        },
        {
          path: '/receivedoffers',
          element: <UserReceivedOffers idUser={privateUser} />,
        },
        { path: '*', element: <Ratings privateUser={privateUser} /> },
      ],
    },
  ];

  let element = useRoutes(routes);

  return privateUser ? (
    <>
      <JustNav />
      <div className='user-profile'>
        {privateUser.active ? (
          ''
        ) : (
          <div>
            El usuario no está activo, para activarlo comprueba tu correo y
            completa el registro!
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: '10rem',
          }}
        >
          {element}
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <div>Usuario borrado o inexistente</div>
  );
}

export { UserProfile };
