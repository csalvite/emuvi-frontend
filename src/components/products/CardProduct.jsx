import { ButtonNewOffer } from '../offers/ButtonNewOffer';
import './CardProduct.css';
import { Link } from 'react-router-dom';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import { ButtonFavProduct } from './ButtonAddFavProducts';
const { REACT_APP_LOCALHOST } = process.env;

export default function CardProduct(props) {
  const { privateUser } = usePrivateUser();
  return (
    <>
      <div className='cardproduct'>
        <div className='card__body'>
          <Link to={`/products/${props.product.id}`}>
            <img
              className='card__img'
              src={
                props.product.photos.length > 0
                  ? `${REACT_APP_LOCALHOST}/avatar/${props.product.photos[0].name}`
                  : '/resources/images/product-photo-not-found.jpg'
              }
              alt='list_product'
            />

            <h4 className='card__title'>{props.product.name}</h4>
            <h4 className='card__price'>{props.product.price}</h4>
          </Link>
        </div>
        <ButtonNewOffer idProduct={props.product.id} idUser={privateUser.id} />
        <ButtonFavProduct idProduct={props.product.id} />
      </div>
    </>
  );
}
