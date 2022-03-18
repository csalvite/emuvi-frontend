import { useState } from 'react';
import { useContext } from 'react';
import { TokenContext } from '../..';
import LoadingComponent from '../loading/loading';
import './DeleteStatus.css';

const { REACT_APP_LOCALHOST } = process.env;

export const DeleteStatus = ({ idUser, offers, setOffers, whatIs }) => {
	const [token] = useContext(TokenContext);
	const [loading, setLoading] = useState();
	const [state, setState] = useState();

	const handleDeleteOffers = async (e) => {
		e.preventDefault();

		let url;
		if (whatIs === 'booking') {
			url = `${REACT_APP_LOCALHOST}/users/${idUser}/bookings?status=`;
		} else {
			url = `${REACT_APP_LOCALHOST}/users/${idUser}/offers?status=`;
		}
		const option = e.target.elements.state.value;

		try {
			const response = await fetch(url + option, {
				method: 'DELETE',
				headers: {
					Authorization: token.token,
				},
			});

			setLoading(true);

			if (response.ok) {
				const body = await response.json();
				setState(body.message);
				const arrNew = offers.filter((item) => item.reserveStatus !== option);
				setOffers(arrNew);
			} else {
				console.error('Hubo un error al borrar las ofertas denegadas.');
				setState('No se han podido eliminar las ofertas.');
			}

			setLoading(false);
		} catch (error) {
			console.error(error.message);
			setState('Error al eliminar los productos.');
		}
	};

	if (loading) {
		return <LoadingComponent />;
	}

	return (
		<>
			<div className="delete-offers-by-state">
				<h5 className="delete-offers-by-state-title">
					Eliminar mis ofertas por estado:{' '}
				</h5>
				<form id="delete-offers-by-state-form" onSubmit={handleDeleteOffers}>
					<select id="delete-offers-by-state-select" name="state">
						<option value="pendiente">Pendientes</option>
						<option value="denegada">Denegadas</option>
						<option value="aceptada">Aceptadas</option>
					</select>
					<button
						className="delete-by-state-button"
						title="Eliminar por estado">
						<i class="fa-solid fa-trash-can"></i>
					</button>
				</form>
				{state ? state : ''}
			</div>
		</>
	);
};
