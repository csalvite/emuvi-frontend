import { Avatar, Rating } from "@mui/material";

const { REACT_APP_LOCALHOST } = process.env;

export const PublicUserRatings = ({ rating }) => {

    const date = new Date(rating.date).toLocaleDateString();

    return rating ? (
        <div className="public-user-ratings">
            <div className="rating-avatar-name">
                <Avatar alt={rating.name}
                    src={
                        `${REACT_APP_LOCALHOST}/avatar/${rating.userAvatar}`
                    }
                    sx={{ width: "2.5rem", height: "2.5rem" }} />
                <h3>{rating.name}</h3>
            </div>
            <div className="rating-avatar-name">
                <Rating 
                    name='size-medium'
                    value={Number(rating.vote)}
                    size='medium'
                    readOnly 
                    />
                <p className="rating-date">{date}</p>
            </div>
            <p>{rating.comment}</p>
        </div>
    ) : <div>No se han encontrado valoraciones para el usuario</div>
}