import { IconButton, Rating, Snackbar } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

const NewRating = ({ idUser, myUser, idProduct, offers, setOffers, idOffer }) => {
    const [token] = useContext(TokenContext);
    const [value, setValue] = useState();
    const [text, setText] = useState();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const action = (
        <>
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <i class="fa-solid fa-circle-xmark"></i>
        </IconButton>
        </>
    );

    const handleNewRating = async (e) => {
        e.preventDefault();

        const newRating = {
            vote: e.target.elements.rating.value,
            comment: e.target.elements.comment.value,
        }

        try {
            const url = `${REACT_APP_LOCALHOST}/users/${idUser}/votes/${idProduct}`;

            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(newRating),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            if (response.ok) {
                
                setText('Comentario enviado con éxito, eliminando oferta!');

                setTimeout(async () => {
                    const url = `${REACT_APP_LOCALHOST}/users/${myUser}/bookings?id=`;
                    const option = idOffer;

                    try {
                        const response = await fetch(url+option, {
                            method: 'DELETE',
                            headers: {
                                Authorization: token.token, 
                            }
                        });

                        if(response.ok){
                            const arrNew = offers.filter((item) => item.id !== idOffer);
                            setOffers(arrNew);
                        }
                    } catch(error){
                        console.error('error');
                    }
                }, 3000);
            } else {
                console.log('Algo ha ido mal');
                setText('Error al enviar el comentario');
            }
        } catch(error) {
            console.error(error.message);
            setText('Error al enviar el comentario');
        }
    }

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={text}
                action={action}
            />
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
                <button onClick={() => handleClick()}>Submit</button>
            </form>
        </>
    );
}

export { NewRating };