import useProductDetail from '../../hooks/useProductDetail';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

const { REACT_APP_LOCALHOST } = process.env;

const ProductPhoto = (props) => {
  const product = useProductDetail();

  console.log("PRODUCT");
  console.log(product);

  let photos;
  product.product.photos
    ? (photos = product.product.photos.map((item, index) => (
        <div key={index}>
          <img
            alt='foto de producto'
            src={`${REACT_APP_LOCALHOST}/avatar/${item.name}`}
            style={{width: '100vw', height: '20rem', objectFit: 'cover'}}
          ></img>
        </div>
      )))
    : (photos = 'No hay imágenes para mostrar de este producto');

  return product ? (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
      {photos}
    </Carousel>
  ) : (
    <h2>No hay imágenes para mostrar</h2>
  );
};

export default ProductPhoto;
