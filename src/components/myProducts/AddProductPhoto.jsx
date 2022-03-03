import { IconButton, Snackbar } from "@mui/material";
import { useRef, useState } from "react";
import { useContext } from "react";
import { TokenContext } from "../..";
import LoadingComponent from "../loading/loading";

const { REACT_APP_LOCALHOST } = process.env;

const AddProductPhoto = ({ productId }) => {
    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const filesInputRef = useRef();
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

    const handleAddProductPhoto = async () => {

        const photos = filesInputRef.current.files;
        if (photos.length > 5) {
            throw new Error('solo puedes insertar 5 fotos');
        }

        const payload = new FormData();

        for (let i = 0; i < photos.length; i++) {
            payload.append(`photo${i}`, photos[i]);
        }
        
        try {
            const url = `${REACT_APP_LOCALHOST}/products/${productId}/photos`;
            
            const response = await fetch(url, {
                method: 'POST',
                body: payload,
                headers: {
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                setText('Fotos añadidas correctamente');
                
            } else {
                setText('Error al añadir las fotos');
                console.error('Hubo un error al eliminar la foto');
            }

            setLoading(false);

        } catch (error) {
            setText('Error al añadir las fotos');
            console.error(error.message);
        }
    }

    if (loading) {
        return (
            <LoadingComponent />
        )
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
            <input
                type='file'
                multiple
                ref={filesInputRef}
                accept='.jpg, .png, svg'
                onChange={() => {
                    handleAddProductPhoto();
                    handleClick();
                }}
            />
        </>
    )
}

export { AddProductPhoto }