import { useContext, useState } from 'react';
import { TokenContext } from '../..';
import './UserInfo.css';
import { useNavigate } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

const ModifyEmailAndUsername = ({ privateUser }) => {
	let navigate = useNavigate();
	const [token, setToken] = useContext(TokenContext);
	const [error, setError] = useState(false);
	const [state, setState] = useState();
	const [loading, setLoading] = useState(false);

	const handleChangeUser = async (e) => {
		e.preventDefault();

		const modifyUser = {
			newUsername: e.target.elements.username.value,
			newEmail: e.target.elements.email.value,
		};

		const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}`;
		try {
			const response = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(modifyUser),
				headers: {
					'Content-Type': 'application/json',
					Authorization: token.token,
				},
			});

			setLoading(true);

			if (response.ok) {
				const body = await response.json();
				setState(body.message);
				if (modifyUser.newUsername) {
					window.location.reload();
				} else if (modifyUser.newEmail) {
					setState(
						'Email modificado, comprueba tu correo para volver a activar el usuario.',
					);

					setTimeout(() => {
						navigate('/');
						setToken('');
					}, 3000);
				}
			} else {
				console.error('No se ha podido cambiar el nombre de usuario o email');
				if (modifyUser.newEmail === '' || modifyUser.newUsername === '') {
					setState('Debes indicar un nuevo email o nombre de usuario');
				}
				setError(true);
			}

			setLoading(false);
		} catch (error) {
			console.error(error.message);
			setError(true);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="modify-email">
			<form onSubmit={handleChangeUser}>
				<ul>
					<li>
						<label>Nuevo nombre de usuario: </label>
					</li>
					<li>
						<input
							type="text"
							name="username"
							placeholder={privateUser.username}
						/>
					</li>
					<li>
						<label>Cambio de email: </label>
					</li>
					<li>
						<input type="email" name="email" placeholder={privateUser.email} />
					</li>
					<li>
						<button className="btn">Modificar</button>
					</li>
				</ul>
			</form>
			{state ? state : ''}
		</div>
	);
};

export default ModifyEmailAndUsername;
