//import logo from './logo.svg';
import './App.css';
import Header1 from '../../components/header/Header';
import Categories from '../../components/categories/Categories';
import Footer from '../../components/footer/Footer';
import LatestProducts from '../../components/latestProducts/LatestProducts';
import LatestProductsResponsive from '../../components/latestProducts/LatestProductsResponsive';

function App() {
	return (
		<div className="App">
			<Header1 />
			<main>
				<LatestProducts />
				<LatestProductsResponsive />
				<Categories />
			</main>
			<Footer />
		</div>
	);
}

export default App;
