import './CardProduct.css';

const { REACT_APP_LOCALHOST } = process.env;

export default function CardProduct(props) {
  return (
    <div className='cardproduct'>
      <div className='card__body'>
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

        <p className='card__description'>{props.product.description}</p>
      </div>
      <button className='card__btn'>Proponer compra</button>
    </div>
  );
}