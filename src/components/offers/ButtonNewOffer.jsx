import { IconButton, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import { TokenContext } from "../..";

export const ButtonNewOffer = ({ idUser, idProduct }) => {

    const [token] = useContext(TokenContext);

    const { REACT_APP_LOCALHOST } = process.env;

    const [text, setText] = useState(<img src="/resources/vectors/tail-spin.svg" alt="spinner" />);
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

    const handleNewOffer = async () => {
        const url = `${REACT_APP_LOCALHOST}/offers/${idProduct}/new/${idUser}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: token.token,
                }
            });

            if (response.ok) {
                const body = await response.json();
                console.log(body);
                setText('Propuesta enviada correctamente.')
            } else {
                console.error('Ha habido un error en la petición');
                setText('Hubo un error al enviar la propuesta');
            }
        } catch (error) {
            console.error(error.message);
            setText('Hubo un error al enviar la propuesta');
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
            <i class="fa-solid fa-cart-shopping cart"
							title="Proponer compra"
                            onClick={() => {
                                handleNewOffer();
                                handleClick();
                            }}></i>
        </>
    )
}