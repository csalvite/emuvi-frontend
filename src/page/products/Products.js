import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import ProductList from '../../components/products/ProductList';
//  import CardProduct from '../../components/products/CardProduct';

const Products = (props) => {
  return (
    <>
      <JustNav />
      <ProductList />
      {/* <CardProduct /> */}
      <Footer />
    </>
  );
};

export default Products;
