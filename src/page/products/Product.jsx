import React from 'react';

import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { ButtonNewOffer } from '../../components/offers/ButtonNewOffer';
import ProductPhoto from '../../components/products/ProductPhoto';
import ProductSingleData from '../../components/products/ProductSingleData';
import UserMapProduct from '../../components/products/UserMapProduct';
import { PublicUserAccess } from '../../components/publicUser/PublicUserAccess';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import useProductDetail from '../../hooks/useProductDetail';
import './Product.css';
// Página Producto en Detalle
const Product = (props) => {
	const { product } = useProductDetail();
	const { privateUser } = usePrivateUser();

	return (
		<>
			<JustNav />
			<section className="product-details-section">
				<div className="product-details-container">
					<ProductPhoto />
					<ProductSingleData />

					<div className="leaflet-container">
						<UserMapProduct
							lat={product.lat}
							lon={product.lon}
							name={product.name}
						/>
					</div>
					{/*<PublicUserAccess idUser={product.idUser} />
					<ButtonNewOffer idProduct={product.id} idUser={privateUser.id} />*/}
					<div className="product-details-icons">
						<i className="fa-solid fa-cart-shopping cart"></i>
						<i className="fa-solid fa-heart heart"></i>
						<i class="fa-solid fa-user user" title="Perfil del vendedor"></i>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Product;
