import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../..';
import './UserInfo.css';

const { REACT_APP_LOCALHOST } = process.env;

export function ButtonDeleteUser({ id }) {
	const [, setToken] = useContext(TokenContext);
	const navigate = useNavigate();
	const [state, setState] = useState();

	const handleOnClick = async (e) => {
		e.preventDefault();

		const userPasswds = {
			password: e.target.elements.password.value,
			confirmPassword: e.target.elements.confirmPassword.value,
		};

		try {
			const response = await fetch(`${REACT_APP_LOCALHOST}/users/${id}`, {
				method: 'DELETE',
				body: JSON.stringify(userPasswds),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				setToken('');
				setState('Usuario eliminado, redirigiendo a página principal...');
				setTimeout(() => {
					navigate('/');
				}, 3000);
			} else {
				setState(
					'No se ha podido eliminar el usuario, comprueba que las contraseñas coincidan.',
				);
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="drop-user">
			<form onSubmit={handleOnClick}>
				<ul>
					<li>
						<label>Contraseña: </label>
					</li>
					<li>
						<input type="password" name="password" />
					</li>
					<li>
						<label>Repite Contraseña: </label>
					</li>
					<li>
						<input type="password" name="confirmPassword" />
					</li>
					<li>
						<button className="btn">Borrar Usuario</button>
					</li>
				</ul>
				{state ? <p>{state}</p> : ''}
			</form>
		</div>
	);
}
