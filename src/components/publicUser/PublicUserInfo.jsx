import { Avatar, Rating } from "@mui/material";

const { REACT_APP_LOCALHOST } = process.env;

export const PublicUserInfo = ({ publicUser }) => {

    return (
        <div className="public-user-info">
            <Avatar
                alt={publicUser.name}
                src={
                `${REACT_APP_LOCALHOST}/avatar/${publicUser.avatar}`
                }
                sx={{ width: "10rem", height: "10rem" }}
            /> 
            <Rating
                name='size-large'
                value={publicUser.mediaVotes}
                size='large'
                readOnly
            />
            <h2>{publicUser.name} {publicUser.lastname}</h2>
            <h4>Biografía: </h4>
            <p>{publicUser.biography}</p>
            <h4>Info de contacto: </h4>
            <p>Teléfono: {publicUser.phone}</p>
            <p>Email: {publicUser.email}</p>
            <p>{publicUser.city}, {publicUser.province}</p>
        </div>
    );
}