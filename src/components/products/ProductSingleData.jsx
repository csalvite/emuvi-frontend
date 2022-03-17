import useProductDetail from '../../hooks/useProductDetail';
import './ProductSingleData.css';

const ProductSingleData = (props) => {
  const { product } = useProductDetail();

  return product ? (
    <div className='product-sheet'>
      <h3 id='name'>{product.name}</h3>
      <h4 id='title'>{product.price} €</h4>
      <p id='description'>{product.description}</p>
    </div>
  ) : (
    <h2>No hay información</h2>
  );
};

export default ProductSingleData;
