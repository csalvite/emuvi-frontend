import { ButtonDeleteUser } from './ButtonDeleteUser';
import { ButtonEditAvatar } from './ButtonEditAvatar';
import ChangePassword from './ChangePassword';
import ModifyEmailAndUsername from './ModifyEmailAndUsername';
import ModifyUserData from './ModifyUserData';
import './UserInfo.css';

function UserInfo({ privateUser }) {
	const birthday = new Date(privateUser.birthday).toLocaleDateString();

	return (
		<div className="user-profile">
			<h2 id="user-info-title">Información del usuario</h2>
			<div className="user-info-container">
				<ButtonEditAvatar id={privateUser.id} />
				<div className="user-info">
					<p>
						<strong>
							<i class="fa-solid fa-user-tie"></i>
						</strong>{' '}
						{privateUser.username}
					</p>

					<p>
						<strong>
							<i class="fa-solid fa-cake-candles"></i>
						</strong>{' '}
						{birthday}
					</p>
					<p>
						<strong>
							<i class="fa-solid fa-building"></i>
						</strong>{' '}
						{privateUser.city}
					</p>
					<p className="province-postal-code">
						<strong>Provincia:</strong> {privateUser.province}
					</p>
					<p className="province-postal-code">
						<strong>Código Postal:</strong> {privateUser.postalCode}
					</p>
					<p>
						<strong>
							<i class="fa-solid fa-envelope"></i>
						</strong>{' '}
						{privateUser.email}
					</p>
				</div>
			</div>
			<ModifyEmailAndUsername privateUser={privateUser} />
			<ChangePassword privateUser={privateUser} />
			<ModifyUserData privateUser={privateUser} />
			<ButtonDeleteUser id={privateUser.id} />
		</div>
	);
}

export { UserInfo };
