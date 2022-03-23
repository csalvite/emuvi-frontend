import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import Goback from '../../components/products/Goback';
import ProductList from '../../components/products/ProductList';

const Products = (props) => {
  return (
    <>
      <Goback />
      <JustNav />
      <ProductList />

      <Footer />
    </>
  );
};

export default Products;
