import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import Goback from '../../components/products/Goback';
import ProductList from '../../components/products/ProductList';
import NoLandscape from '../../components/noLandscape/NoLandscape';

const Products = (props) => {
	return (
		<>
			<NoLandscape />
			<Goback />
			<JustNav />
			<ProductList />

			<Footer />
		</>
	);
};

export default Products;
