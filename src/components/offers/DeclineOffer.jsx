import { IconButton, Snackbar } from '@mui/material';
import { useContext, useState } from 'react';
import { TokenContext } from '../..';

export const DeclineOffer = ({
	idUser,
	idOffer,
	reserveStatus,
	offers,
	setOffers,
}) => {
	const [token] = useContext(TokenContext);
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState();

	const { REACT_APP_LOCALHOST } = process.env;

	const [text, setText] = useState(
		<img src="/resources/vectors/tail-spin.svg" alt="spinner" />,
	);

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const action = (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleClose}>
				<i class="fa-solid fa-circle-xmark"></i>
			</IconButton>
		</>
	);

	const handleDeclineOffer = async (e) => {
		try {
			const url = `${REACT_APP_LOCALHOST}/users/${idUser}/offers/${idOffer}/deny`;

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					Authorization: token.token,
				},
			});

			setLoading(true);

			if (response.ok) {
				const body = await response.json();
				setState(body.message);
				const arrNew = offers.filter((offer) => offer.id !== Number(idOffer));
				setOffers(arrNew);
				setText('Reserva denegada, se ha avisado al comprador.');
			} else {
				if (reserveStatus === 'aceptada' || reserveStatus === 'denegada') {
					setState(
						'Ya has tomado una decisión sobre esta oferta, no puedes cambiar su estado.',
					);
					setText(
						'Ya has tomado una decisión sobre esta oferta, no puedes cambiar su estado.',
					);
				}
				console.error('Hubo un error al declinar la oferta');
				setText('Error al denegar la reserva');
			}

			setLoading(false);
		} catch (error) {
			console.error(error.message);
			setText('Error al denegar la reserva');
		}
	};

	if (loading) {
		return <h2>Cargando...</h2>;
	}

	return (
		<>
			<Snackbar
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				message={text}
				action={action}
			/>
			<i
				className="fa-solid fa-x declineIcon"
				onClick={handleDeclineOffer}
				title="Declinar Oferta"></i>
			{state ? state : ''}
		</>
	);
};
