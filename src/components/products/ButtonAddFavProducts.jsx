import { IconButton, Snackbar } from '@mui/material';
import { useState } from 'react';
import { useContext } from 'react';
import { TokenContext } from '../..';
import LoadingComponent from '../loading/loading';
import { DeleteFavProduct } from '../privateUser/DeleteFavProduct';

export const ButtonFavProduct = ({ idProduct, deleteFav, idUser, favProducts, setFavProducts }) => {
  const [token] = useContext(TokenContext);
  const [loading, setLoading] = useState(false);

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
        const err = await res.json();
        console.error('Hubo un error al añadir el producto como favorito');
        setText(err.message);
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setText(error.message);
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
        {deleteFav ? (
          <DeleteFavProduct idProduct={idProduct} idUser={idUser} favProducts={favProducts} setFavProducts={setFavProducts} />
        ) : (
          <i class="fa-solid fa-heart heart" 
                    title="Añadir a favoritos"
                    onClick={() => {
                      handleAddFavProduct();
                      handleClick();
                    }}></i>
              
        )}
        {/* <i class="fa-solid fa-heart heart" 
                    title="Añadir a favoritos"
                    onClick={() => {
                      handleAddFavProduct();
                      handleClick();
                    }}></i> */}
    </>
    
  );
};
