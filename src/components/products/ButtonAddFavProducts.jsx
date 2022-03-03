import { IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';
import { TokenContext } from '../..';
import LoadingComponent from '../loading/loading';

export const ButtonFavProduct = ({ idProduct }) => {
  const [token] = useContext(TokenContext);
  const [loading, setLoading] = useState(false);

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

  const { REACT_APP_LOCALHOST } = process.env;
  const handleAddFavProduct = async () => {
    try {
      const url = `${REACT_APP_LOCALHOST}/products/${idProduct}/favorite`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: token.token,
        },
      });
      setLoading(true);
      if (res.ok) {
        const body = await res.json();
        console.log(body);
        setText('Producto añadido a favoritos');
      } else {
        console.error('Hubo un error al añadir el producto como favorito');
        setText('Error al añadir producto a favoritos');
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setText('Error al añadir producto a favoritos');
    }
  };
  if (loading) {
    return <LoadingComponent />;
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
        <button className='btn' onClick={() => {
            handleAddFavProduct();
            handleClick();
          } }>
          Añadir a favorito
        </button>
    </>
    
  );
};