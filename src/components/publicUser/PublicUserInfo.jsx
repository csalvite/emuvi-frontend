import { Avatar, Rating } from '@mui/material';
import './PublicUserInfo.css';
import NoLandscape from '../../components/noLandscape/NoLandscape';

const { REACT_APP_LOCALHOST } = process.env;

export const PublicUserInfo = ({ publicUser }) => {
	return (
		<>
			<NoLandscape />
			<div className="public-user-stars-name">
				<Avatar
					className="public-profile-avatar"
					alt={publicUser.name}
					src={`${REACT_APP_LOCALHOST}/avatar/${publicUser.avatar}`}
					sx={{ width: '10rem', height: '10rem' }}
				/>
				<Rating
					className="public-profile-stars"
					name="size-large"
					value={Number(publicUser.mediaVotes)}
					size="large"
					readOnly
				/>
				<h2 className="public-profile-name">
					{publicUser.name} {publicUser.lastname}
				</h2>
			</div>
			<div className="public-user-bio">
				<h4 className="public-user-biography-title">Biografía: </h4>
				<p>{publicUser.biography}</p>
			</div>
			<div className="public-user-more-info">
				<p>
					<i className="fa-solid fa-phone public-profile-icons"></i>{' '}
					{publicUser.phone}
				</p>
				<p>
					<i className="fa-solid fa-envelope public-profile-icons"></i>{' '}
					{publicUser.email}
				</p>
			</div>
			<p className="user-location-paragraph">
				<i class="fa-solid fa-map-pin public-profile-icons"></i>{' '}
				{publicUser.city}, {publicUser.province}
			</p>
		</>
	);
};
