import { ButtonDeleteUser } from './ButtonDeleteUser';
import { ButtonEditAvatar } from './ButtonEditAvatar';
import ChangePassword from './ChangePassword';
import ModifyEmailAndUsername from './ModifyEmailAndUsername';
import ModifyUserData from './ModifyUserData';
import './UserInfo.css';

function UserInfo({ privateUser }) {
	const birthday = new Date(privateUser.birthday).toLocaleDateString();

	return (
		<div id="user-profile-main-container">
			<div className="user-profile">
				<div
					className="user-info-container"
					title="Haz clic en la imagen para modificarla">
					<ButtonEditAvatar id={privateUser.id} />
					<div className="user-info">
						<p>
							<i className="fa-solid fa-user-tie corporative-card-icons"></i>{' '}
							{privateUser.username}
						</p>
						<p>
							<i className="fa-solid fa-cake-candles corporative-card-icons"></i>{' '}
							{birthday}
						</p>
						<p>
							<i className="fa-solid fa-building corporative-card-icons"></i>{' '}
							{privateUser.city}
						</p>
						<p>
							<i className="fa-solid fa-envelope corporative-card-icons"></i>{' '}
							{privateUser.email}
						</p>
						<p className="province-postal-code">
							<strong>Provincia:</strong> {privateUser.province}
						</p>
						<p className="province-postal-code">
							<strong>Código Postal:</strong> {privateUser.postalCode}
						</p>
					</div>
				</div>

				<section id="accordion-section">
					<details>
						<summary>
							<strong>Modificar avatar</strong>
						</summary>
						<ButtonEditAvatar id={privateUser.id} />
					</details>
					<details>
						<summary>
							<strong>Editar nombre de usuario o email</strong>
						</summary>
						<ModifyEmailAndUsername privateUser={privateUser} />
					</details>
					<details>
						<summary>
							<strong>Cambiar Contraseña</strong>
						</summary>
						<ChangePassword privateUser={privateUser} />
					</details>
					<details>
						<summary>
							<strong>Modificar Información Personal</strong>
						</summary>
						<ModifyUserData privateUser={privateUser} />
					</details>
					<details>
						<summary>
							<strong>Eliminar Usuario</strong>
						</summary>
						<ButtonDeleteUser id={privateUser.id} />
					</details>
				</section>
			</div>
		</div>
	);
}

export { UserInfo };
