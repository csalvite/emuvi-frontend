import { Avatar } from '@mui/material';
import { useContext } from 'react';
import { TokenContext } from '../..';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import './EditAvatar.css';

const { REACT_APP_LOCALHOST } = process.env;

export function ButtonEditAvatar({ id }) {
	const [token] = useContext(TokenContext);
	const { privateUser } = usePrivateUser();

	const handleEditAvatar = async (e) => {
		try {
			const avatar = new FormData();
			avatar.append('avatar', e.target.files[0]);

			const response = await fetch(
				`${REACT_APP_LOCALHOST}/users/${id}/avatar`,
				{
					method: 'PUT',
					body: avatar,
					headers: {
						Authorization: token.token,
					},
				},
			);

			if (response.ok) {
				console.log('OK');
				window.location.reload();
			}
		} catch (error) {
			console.error(error);
		}
	};

	/* user-avatar */
	return (
		<div className="user-avatar">
			<input
				type="file"
				id="file"
				name="changeAvatar"
				className="inputfile inputfile-5"
				onChange={handleEditAvatar}
				accept=".png, .jpg, .jpeg, .webp"
			/>

			<label for="file" title="Cambiar imagen de perfil">
				<figure>
					<Avatar
						className="avatar-img"
						src={`${REACT_APP_LOCALHOST}/avatar/${privateUser.avatar}`}
						alt="avatar"
					/>
				</figure>
			</label>
		</div>
	);
}
