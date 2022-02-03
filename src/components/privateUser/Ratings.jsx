import { Avatar, Rating } from "@mui/material";
import { useEffect, useState } from "react";

const { REACT_APP_LOCALHOST } = process.env;

const Ratings = ({privateUser}) => {
    
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [ratings, setRatings] = useState([]);

    useEffect(() => {

        const handleLoadUserRatings = async () => {
            const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}/vote`;

            try {
                const response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                setLoading(true);

                if (response.ok) {
                    const body = await response.json();
                    setRatings(body.data);
                } else {
                    console.error(error.message);
                    setError(true);
                }

                setLoading(false);
                
            } catch (error) {
                console.error(error.message);
                setError(true);
            }
        }

        handleLoadUserRatings();
    }, [privateUser.id, error.message])

    if (loading) {
        return (
          <img src="/resources/vectors/loading.svg" alt="loading" />
      )
    }

    return (
        <div className="user-ratings">
            <h2>Opiniones de Usuario</h2>
            {error ? <div>Error al obtener las opiniones del usuario</div> 
            : (
                <>
                    {ratings.map((rating, index) => {
                        return (
                            <div key={index} className="rating">
                                <Avatar src={`${REACT_APP_LOCALHOST}/avatar/${rating.avatar}`} alt={rating.name} />
                                <h4>{rating.name}</h4>
                                <Rating
                                    name='size-large'
                                    value={Number(rating.vote)}
                                    size='medium'
                                    readOnly
                                />
                                <p>{rating.comment}</p>
                            </div>
                        )
                    })}
                </>
            )}
        </div>
    )
}

export default Ratings;