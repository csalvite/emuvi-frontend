import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { ButtonNewOffer } from '../../components/offers/ButtonNewOffer';
import ProductPhoto from '../../components/products/ProductPhoto';
import ProductSingleData from '../../components/products/ProductSingleData';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import useProductDetail from '../../hooks/useProductDetail';
// Página Producto en Detalle
const Product = (props) => {
  const [user] = usePrivateUser();
  const { product } = useProductDetail();

  return (
    <>
      <JustNav />
      <div id='productpage'>
        <ProductPhoto />
        <ProductSingleData />
        <ButtonNewOffer idProduct={product.id} idUser={user.id} />
      </div>
      <Footer />
    </>
  );
};

export default Product;
