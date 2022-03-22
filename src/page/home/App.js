//import logo from './logo.svg';
import './App.css';
import Header1 from '../../components/header/Header';
import Categories from '../../components/categories/Categories';
import Footer from '../../components/footer/Footer';
import LatestProducts from '../../components/latestProducts/LatestProducts';
import LatestProductsCards from '../../components/latestProducts/LatestProductsCards';
import { useState } from 'react';
import { Warning } from '../../components/projectwarning/Warning';
import NoLandscape from '../../components/noLandscape/NoLandscape';

function App() {
	const [showWarning, setShowWarning] = useState(true);

	return (
		<div className="App">
			{showWarning ? <Warning setShowWarning={setShowWarning} /> : ''}
			<Header1 />
			<NoLandscape />
			<main>
				<LatestProducts />
				<LatestProductsCards />
				<Categories />
			</main>
			<Footer />
		</div>
	);
}

export default App;
