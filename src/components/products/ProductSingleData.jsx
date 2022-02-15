import useProductDetail from '../../hooks/useProductDetail';

const ProductSingleData = (props) => {
  const { product } = useProductDetail();

  console.log(product);

  return product.data ? (
    <div className='product-sheet'>
      <h3 id='name'>{product.data.product.name}</h3>
      <h4 id='title'>{product.data.product.price}</h4>
      <p id='description'>{product.data.product.description}</p>
    </div>
  ) : (
    <h2>No hay información</h2>
  );
};

export default ProductSingleData;
