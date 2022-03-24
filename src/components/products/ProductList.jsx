import CardProduct from './CardProduct';

import useProducts from '../../hooks/useProducts';
import './ProductList.css';
import { useState } from 'react';

import FilterProducts from './FilterProducts';
import LoadingComponent from '../loading/loading';

import NoLandscape from '../../components/noLandscape/NoLandscape';

const ProductList = () => {
	const [currentPage, setCurrentPage] = useState(0);
	const { products, loading, error } = useProducts();

	if (loading) return <LoadingComponent />;
	if (error) return <div>{error}</div>;
	const productFiltered = () => {
		return products.slice(currentPage, currentPage + 8);
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const nextPage = () => {
		if (products.length > currentPage + 8) {
			setCurrentPage(currentPage + 8);
		}
	};

	const prevPage = () => {
		if (currentPage > 0) setCurrentPage(currentPage - 8);
	};
	function eventBottonnext() {
		scrollToTop();
		nextPage();
	}
	function eventBottonprev() {
		scrollToTop();
		prevPage();
	}
	return (
		<>
			<section className="products-section">
				<FilterProducts />
				<NoLandscape />

				{products.length > 0 && !products.sold ? (
					<>
						<ul
							className="container_productlist"
							style={{ listStyleType: 'none' }}>
							{productFiltered().map((product, index) => {
								return <CardProduct product={product} key={product.id} />;
							})}
						</ul>
						<div id="pagination-product-container">
							<button className="prev-btn" onClick={eventBottonprev}>
								<i className="fa-solid fa-angle-left prev-pagination-icon"></i>
								PREV
							</button>
							&nbsp;
							{products.length < currentPage + 8 ? (
								<button
									className="next-btn"
									onClick={eventBottonnext}
									style={{ visibility: 'hidden' }}>
									NEXT
									<i className="fa-solid fa-angle-right next-pagination-icon"></i>
								</button>
							) : (
								<button className="next-btn" onClick={eventBottonnext}>
									NEXT
									<i className="fa-solid fa-angle-right next-pagination-icon"></i>
								</button>
							)}
						</div>
					</>
				) : (
					<div className="no-products">
						<h2>No hay productos</h2>
						<i className="fa-solid fa-face-sad-tear no-products-face"></i>
					</div>
				)}
			</section>
		</>
	);
};

export default ProductList;
