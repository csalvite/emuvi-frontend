import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { TokenContext } from '../..';
import JustNav from '../../components/justNavHeader/JustNav';
import './Login.css';

const { REACT_APP_LOCALHOST } = process.env;

function Login() {
	const [error, setError] = useState();
	const [state, setState] = useState();

	// recuperamos del contexto: token y setToken
	const [token, setToken] = useContext(TokenContext);

	const handleLogin = async (e) => {
		e.preventDefault();

		const user = {
			email: e.target.elements.email.value,
			password: e.target.elements.passwd.value,
		};

		try {
			const response = await fetch(`${REACT_APP_LOCALHOST}/users/login`, {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (response.ok) {
				const userLogin = await response.json();
				setToken(userLogin.authToken);
				setError(false);
			} else {
				const err = await response.json();
				setError(true);
				setState(err.message);
			}
		} catch (error) {
			setError(true);
		}
	};

	// Si existe el token significa que se ha logeado, por lo que redirigimos a la página principal
	if (token) {
		return <Navigate to="/" />;
	}

	return (
		<>
			<JustNav />
			<div className="body-container-form">
				<form className="login-form" onSubmit={handleLogin}>
					<h1 className="form-title">Accede a tu cuenta</h1>
					<div id="field">
						<label htmlFor="email" className="form-label">
							<i className="fa-solid fa-square-envelope" id="form-icon"></i>
						</label>
						<input
							className="form-input"
							type="text"
							name="email"
							id="email"
							placeholder="Email"
							required
						/>
					</div>
					<div id="field">
						<label htmlFor="passwd" className="form-label">
							<i className="fa-solid fa-lock" id="form-icon"></i>
						</label>
						<input
							className="form-input"
							type="password"
							name="passwd"
							id="passwd"
							autoComplete="on"
							placeholder="Contraseña"
							required
						/>
					</div>
					<button className="login-form-btn">Iniciar sesión</button>

					<p className="form-paragraph">
						No tienes cuenta?{' '}
						<Link to="/register" className="sign-link">
							Regístrate
						</Link>
						<i class="fa-solid fa-arrow-right" id="sign-link-icon"></i>
					</p>
					{error ? <div className='login-error'>{state}</div> : ''}
				</form>
			</div>
		</>
	);
}

export { Login };
