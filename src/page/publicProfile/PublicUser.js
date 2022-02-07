import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { usePublicUser } from '../../hooks/usePublicUser';
import './PublicUser.css';

const PublicUser = () => {
  /* 
        La idea sería que nos pasen el id del usuario por props
        ya que este componenete se montará desde la página de producto en detalle,
        donde se encuentra una pequeña 
    */

  const { idUser } = useParams();

  const [user] = usePublicUser({ idUser });

  console.log(user);

  return (
    <div className='public-user'>
      <JustNav />

      <h1>Usuario Público</h1>

      <div className='componente1'>
        <img src='#' alt='avatar' />
        <h3>Nombre Apellido - Username</h3>
        <p>Media de estrellas</p>
        <div>Info de la ubicacion, ciudad, provincia</div>
      </div>

      <div className='componente2'>Mapa de ubicacion usuario</div>

      <div className='componente3'>Opiniones Sobre el Usuario</div>

      <div className='componente4'>Productos en Venta</div>

      <Footer />
    </div>
  );
};

export default PublicUser;
