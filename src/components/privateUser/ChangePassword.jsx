import { useContext, useState } from 'react';
import { TokenContext } from '../..';

const { REACT_APP_LOCALHOST } = process.env;

const ChangePassword = ({ privateUser }) => {
	const [token] = useContext(TokenContext);
	const [state, setState] = useState();

	const handleChangePassword = async (e) => {
		e.preventDefault();

		const passwords = {
			oldPassword: e.target.elements.oldPasswd.value,
			newPassword: e.target.elements.newPasswd.value,
		};

		const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}/password`;
		try {
			const response = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(passwords),
				headers: {
					'Content-Type': 'application/json',
					Authorization: token.token,
				},
			});

			if (response.ok) {
				setState('Contraseña modificada correctamente.');
				e.target.elements.oldPasswd.value = '';
				e.target.elements.newPasswd.value = '';
			} else {
				setState('Ha habido un error al cambiar la contraseña.');
			}
		} catch (error) {
			setState('Ha habido un error al cambiar la contraseña.');
		}
	};

	return (
		<div className="change-password-container">
			<form onSubmit={handleChangePassword}>
				<ul>
					<li>
						<label>Indica la antigua contraseña: </label>
					</li>
					<li>
						<input
							type="password"
							name="oldPasswd"
							autoComplete="on"
							required
						/>
					</li>
					<li>
						<label>Indica la nueva contraseña: </label>
					</li>
					<li>
						<input
							type="password"
							name="newPasswd"
							autoComplete="on"
							required
						/>
					</li>
					<li>
						<button className="btn">Cambiar Contraseña</button>
					</li>
				</ul>
			</form>
			{state ? <div>{state}</div> : ''}
		</div>
	);
};

export default ChangePassword;
