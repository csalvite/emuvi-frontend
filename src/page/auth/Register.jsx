import { useState } from 'react';
import { Link } from 'react-router-dom';
import JustNav from '../../components/justNavHeader/JustNav';
import './Register.css';

const { REACT_APP_LOCALHOST } = process.env;

function Register() {
	const [error, setError] = useState();
	const [register, setRegister] = useState(false);
	const [loading, setLoading] = useState();

	const handleRegister = async (e) => {
		e.preventDefault();

		const newUser = {
			username: e.target.elements.username.value,
			email: e.target.elements.email.value,
			password: e.target.elements.passwd.value,
		};

		try {
			const response = await fetch(`${REACT_APP_LOCALHOST}/users`, {
				method: 'POST',
				body: JSON.stringify(newUser),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			setLoading(true);

			if (response.ok) {
				setError(false);
				setRegister(true);
			} else {
				setError(true);
			}

			setLoading(false);
		} catch (error) {
			console.error('Error en el registro');
			setError(true);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<JustNav />
			<div className="body-container-form">
				<div className="register-form">
					<h1 className="form-title">Registro de usuario</h1>
					{register ? (
						<div>
							<p>
								Usuario registrado con éxito, comprueba tu correo para activar
								el la cuenta!
							</p>
							<p>
								Qué tal si metemos aqui una imagen o algo chachi que indique que
								debe comprobar el correo para continuar? :D
							</p>
						</div>
					) : (
						<form onSubmit={handleRegister}>
							<div>
								<div id="field">
									<label htmlFor="username" className="form-label">
										<i className="fas fa-user" id="form-icon"></i>
									</label>
									<input
										className="form-input"
										type="text"
										name="username"
										id="username"
										placeholder="Nombre usuario"
										required
									/>
								</div>
								<div id="field">
									<label htmlFor="email" className="form-label">
										<i
											className="fa-solid fa-square-envelope"
											id="form-icon"></i>
									</label>
									<input
										className="form-input"
										type="email"
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
								<div>
									<button className="form-btn">Registro</button>
								</div>
								<div>
									<p className="form-paragraph">
										Ya tienes cuenta?{' '}
										<Link to="/login" className="sign-link">
											Inicia Sesión
										</Link>
										<i className="fas fa-arrow-right" id="sign-link-icon"></i>
									</p>
								</div>
							</div>
						</form>
					)}
					{error ? (
						<div>
							Hubo un error en el registro del usuario comprueba los datos
							proporcionados, puede que ya exista un usuario con ese email o
							nombre.
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
}

export { Register };
