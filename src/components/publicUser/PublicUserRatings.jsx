import { Avatar, Rating } from "@mui/material";

const { REACT_APP_LOCALHOST } = process.env;

export const PublicUserRatings = ({ rating }) => {

    const date = new Date(rating.date).toLocaleDateString();

    return rating ? (
        <div className="public-user-ratings">
            <Avatar alt={rating.name}
                src={
                    `${REACT_APP_LOCALHOST}/avatar/${rating.userAvatar}`
                }
                sx={{ width: "2.5rem", height: "2.5rem" }} />
            <h2>{rating.name}</h2>
            <p>{date}</p>
            <Rating 
                name='size-medium'
                value={Number(rating.vote)}
                size='medium'
                readOnly 
                />
            <p>{rating.comment}</p>
        </div>
    ) : <div>No se han encontrado valoraciones para el usuario</div>
}