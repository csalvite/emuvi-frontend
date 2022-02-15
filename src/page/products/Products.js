import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import ProductList from '../../components/products/ProductList';

const Products = (props) => {
  return (
    <>
      <JustNav />
      <ProductList />
      <Footer />
    </>
  );
};

export default Products;
