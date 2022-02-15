import useProductDetail from '../../hooks/useProductDetail';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';
const ProductPhoto = (props) => {
  const product = useProductDetail();

  let photos;
  product.photos
    ? (photos = product.photos.map((item, index) => (
        <div key={index}>
          <img
            alt='foto de producto'
            src={`http://localhost:4000/avatar/${item.name}`}
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
