import useProductDetail from '../../hooks/useProductDetail';

const ProductSingleData = (props) => {
  const { product } = useProductDetail();

  console.log(product);

  return product ? (
    <div className='product-sheet'>
      <h3 id='name'>{product.name}</h3>
      <h4 id='title'>{product.price}</h4>
      <p id='description'>{product.description}</p>
    </div>
  ) : (
    <h2>No hay información</h2>
  );
};

export default ProductSingleData;
