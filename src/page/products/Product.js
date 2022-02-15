import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import ProductPhoto from '../../components/products/ProductPhoto';
import ProductSingleData from '../../components/products/ProductSingleData';

// Página Producto en Detalle
const Product = (props) => {
  return (
    <>
      <JustNav />
      <div id='productpage'>
        <ProductPhoto />
        <ProductSingleData />
      </div>
      <Footer />
    </>
  );
};

export default Product;
