import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '../..';
import CardProduct from '../products/CardProduct';
import './UserInfo.css';
import './FavoriteProducts.css';
const { REACT_APP_LOCALHOST } = process.env;

function FavoriteProducts({ privateUser }) {
	const [token] = useContext(TokenContext);
	const [favProducts, setFavProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	// Devolvemos los productos favoritos del usuario
	useEffect(() => {
		const getFavoriteProducts = async () => {
			try {
				const response = await fetch(
					`${REACT_APP_LOCALHOST}/users/${privateUser.id}/favorites`,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: token.token,
						},
					},
				);

				setLoading(true);

				if (response.ok) {
					const body = await response.json();
					setFavProducts(body.data);
				}

				setLoading(false);
			} catch (error) {
				console.error(error);
			}
		};
		getFavoriteProducts();
	}, [privateUser.id, token.token, setFavProducts]);

	if (loading) {
		return <img src="/resources/vectors/loading.svg" alt="loading" />;
	}

	return (
		<div className="user-profile">
			<h2 id="favorite-product-h2">Productos Favoritos</h2>
			{favProducts.length > 0 ? (
				<div className="user-fav-products">
					{favProducts.map((product) => {
						return (
							<CardProduct
								product={product}
								key={product.id}
								deleteFav={true}
								favProducts={favProducts}
								setFavProducts={setFavProducts}
							/>
						);
					})}
				</div>
			) : (
				<div>No hay productos marcados como favoritos</div>
			)}
		</div>
	);
}

export { FavoriteProducts };
