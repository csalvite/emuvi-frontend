import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import CardProduct from '../../components/products/CardProduct';
import UserMapProduct from '../../components/products/UserMapProduct';
import { PublicUserInfo } from '../../components/publicUser/PublicUserInfo';
import { PublicUserRatings } from '../../components/publicUser/PublicUserRatings';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import './PublicUser.css';

const { REACT_APP_LOCALHOST } = process.env;

const PublicUser = () => {
	const [user, setUser] = useState([]);
	const [ratings, setRatings] = useState([]);
	const [products, setProducts] = useState([]);
	const { idUser } = useParams();
	const { privateUser } = usePrivateUser();

	useEffect(() => {
		const getPublicUser = async () => {
			const url = `${REACT_APP_LOCALHOST}/users/${idUser}`;
			try {
				const response = await fetch(url, {
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if (response.ok) {
					const body = await response.json();

					setUser(body.data.userInfo);
					setProducts(body.data.userProducts);
					setRatings(body.data.userVotes);
				} else {
					console.error('Ha habido un error al recibir los datos');
				}
			} catch (error) {
				console.error(error.message);
			}
		};

		getPublicUser();
	}, [idUser]);

	return (
		<>
			<JustNav />
			<section className="public-user-section">
				<div className="public-user-profile">
					<PublicUserInfo publicUser={user} />
					<div className="public-user-map">
						<div className="leaflet-container">
							<UserMapProduct
								lat={privateUser.latitude}
								lng={privateUser.longitude}
								name={privateUser.username}
							/>
						</div>
					</div>
					<h2 className="public-user-ratings">Opiniones Sobre el Usuario</h2>
					{/*{ratings.data?.map((rating, index) => {
						return <PublicUserRatings key={index} rating={rating} />;
					})}

					
					<h2 className="public-user-products">Productos en Venta</h2>
					{products.data?.map((product) => {
						return {
							 NO ENCONTRÉ LA MANERA DE ALINEAR ESTE COMPONENTE :(
							<div className="on-sale-products">
								<CardProduct product={product} key={product.id} />
							</div>
							
					}; })}
					*/}
				</div>
			</section>
			<Footer />
		</>
	);
};

export default PublicUser;
