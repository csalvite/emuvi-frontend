import React from 'react';

import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { ButtonNewOffer } from '../../components/offers/ButtonNewOffer';
import { ButtonFavProduct } from '../../components/products/ButtonAddFavProducts';
import ProductPhoto from '../../components/products/ProductPhoto';
import ProductSingleData from '../../components/products/ProductSingleData';
import UserMapProduct from '../../components/products/UserMapProduct';
import { PublicUserAccess } from '../../components/publicUser/PublicUserAccess';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import useProductDetail from '../../hooks/useProductDetail';
import './Product.css';
import NoLandscape from '../../components/noLandscape/NoLandscape';

// Página Producto en Detalle
const Product = (props) => {
	const { product } = useProductDetail();
	const { privateUser } = usePrivateUser();

	return (
		<>
			<JustNav />
			<section className="product-details-section">
				<NoLandscape />
				<div className="product-details-container">
					<ProductPhoto />
					<ProductSingleData />

					<div className="leaflet-container">
						<UserMapProduct
							lat={product.lat}
							lng={product.lon}
							name={product.name}
						/>
					</div>

					<div className="product-details-icons">
						<ButtonNewOffer idProduct={product.id} idUser={privateUser.id} />
						<ButtonFavProduct idProduct={product.id} />
						<PublicUserAccess idUser={product.idUser} />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Product;
