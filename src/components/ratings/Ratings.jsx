import { Avatar, Rating } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingComponent from '../loading/loading';
import '../privateUser/UserInfo.css';
import './Ratings.css';

const { REACT_APP_LOCALHOST } = process.env;

const Ratings = ({ privateUser }) => {
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [ratings, setRatings] = useState([]);

	useEffect(() => {
		const handleLoadUserRatings = async () => {
			const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}/vote`;

			try {
				const response = await fetch(url, {
					headers: {
						'Content-Type': 'application/json',
					},
				});

				setLoading(true);

				if (response.ok) {
					const body = await response.json();
					setRatings(body.data);
				} else {
					console.error(error.message);
					setError(true);
				}

				setLoading(false);
			} catch (error) {
				console.error(error.message);
				setError(true);
			}
		};

		handleLoadUserRatings();
	}, [privateUser.id, error.message]);

	if (loading) {
		return <LoadingComponent />;
	}

	return (
		<div className="user-ratings">
			<h2 className="user-ratings-title">Opiniones de Usuario</h2>
			{error ? (
				<div>Error al obtener las opiniones del usuario</div>
			) : (
				<>
					{ratings.length > 0
						? ratings.map((rating, index) => {
								return (
									<div key={index} className="rating">
										<div className="rating-title">
											<Avatar
												src={`${REACT_APP_LOCALHOST}/avatar/${rating.avatar}`}
												alt={rating.name}
											/>
											<h4>{rating.name}</h4>
										</div>
										<Rating
											name="size-large"
											value={Number(rating.vote)}
											size="medium"
											readOnly
										/>
										<p>{rating.comment}</p>
									</div>
								);
						  })
						: 'No se han encontrado valoraciones en este usuario.'}
				</>
			)}
		</div>
	);
};

export default Ratings;
