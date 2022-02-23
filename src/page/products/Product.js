import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { ButtonNewOffer } from '../../components/offers/ButtonNewOffer';
import ProductPhoto from '../../components/products/ProductPhoto';
import ProductSingleData from '../../components/products/ProductSingleData';
import useProductDetail from '../../hooks/useProductDetail';
// Página Producto en Detalle
const Product = (props) => {
  const { product } = useProductDetail();
  return (
    <>
      <JustNav />
      <div id='productpage'>
        <ProductPhoto />
        <ProductSingleData />
        <ButtonNewOffer idProduct={product.id} idUser={product.idUser} />
      </div>
      <Footer />
    </>
  );
};

export default Product;
