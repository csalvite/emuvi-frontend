import { Rating } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

const NewRating = ({ idUser }) => {
    const [token] = useContext(TokenContext);
    const [value, setValue] = useState();

    const handleNewRating = async (e) => {
        e.preventDefault();

        const newRating = {
            vote: e.target.elements.rating.value,
            comment: e.target.elements.comment.value,
        }

        console.log(newRating);

        try {
            const url = `${REACT_APP_LOCALHOST}/users/${idUser}/votes`;

            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(newRating),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            if (response.ok) {
                const body = await response.json();

                console.log(body);
            } else {
                console.log('Algo ha ido mal');
            }
        } catch(error) {
            console.error(error.message);
        }
    }

    return (
        <form className="new-rating-form" onSubmit={handleNewRating}>
            <h4>Para mejorar la experiencia de otros usuarios con EMUVI deja una reseña del vendedor:</h4>
            <label>Puntuación: </label>
            <Rating
                name="rating"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <label>Tu comentario: </label>
            <input type='text' name='comment' placeholder='Escribe aqui tu comentario...' />
            <button>Submit</button>
        </form>
    );
}

export { NewRating };