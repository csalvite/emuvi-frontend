import { IconButton, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

const DeleteFavProduct = ({ idProduct, idUser, favProducts, setFavProducts }) => {
    const [ token ] = useContext(TokenContext);

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

    // Funcion manejadora para eliminar producto de favoritos
    const handleDeleteFavProduct = async (e) => {

        // Según el botón que pulse se recoge un id de producto u otro
        const url = `${REACT_APP_LOCALHOST}/user/${idUser}/favorites/${idProduct}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            if (response.ok) {
                console.log('Producto eliminado de favoritos correctamente');
                const arrNew = favProducts.filter((item) => item.id !== Number(idProduct));
                setFavProducts(arrNew);
                setText('Producto eliminado de favoritos')
            } else {
                console.error('Error al borrar el producto');
                setText('Error al eliminar producto de favoritos');
            }


        } catch (error) {
            console.error(error.message);
            setText('Error al eliminar producto de favoritos');
        }
    }
    
    return(
        <>
        <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={text}
                action={action}
            />

        <i className="fa-solid fa-heart-crack"
            title="Eliminar de favoritos"
            onClick={() => {
                handleDeleteFavProduct();
                handleClick();
            }}></i>
        </>
    )
}

export { DeleteFavProduct };