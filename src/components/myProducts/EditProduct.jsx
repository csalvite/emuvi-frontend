import { Button, IconButton, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import { TokenContext } from "../..";
import "../popUp/acceptStyle.css";
import { AddProductPhoto } from "./AddProductPhoto";
import { DeleteProductPhoto } from "./DeleteProductPhoto";

const { REACT_APP_LOCALHOST } = process.env;

export const EditProduct = ({ setShowPopUp, editProduct }) => {

    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState();
    const [product, setProduct] = useState(editProduct);
    const [photos, setPhotos] = useState(product.photos);

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

    // Compruebo qué recibe el componente
    console.log(product);

    const handleEditProduct = async (e) => {
        e.preventDefault();

        const newProductData = {
            name: e.target.elements.name.value || product.name,
            price: e.target.elements.price.value || product.price,
            description: e.target.elements.description.value || product.description,
            category: e.target.elements.category.value || product.category,
        }
        
        try {
            const url = `${REACT_APP_LOCALHOST}/products/${product.id}`;
            
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(newProductData),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                const body = await response.json();

                setState(body.message);
                setProduct(newProductData);
                
                setTimeout(() => {
                    window.location.reload();
                }, 2000);

            } else {
                console.error('Hubo un error al editar el producto');
            }

            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div id="popup-background" className="accept-offer" style={{zIndex: '1'}}>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Cambios aplicados"
                action={action}
            />
            <form id="form-accept-offer" onSubmit={handleEditProduct}>
                <span className="close-popup" onClick={() => setShowPopUp(false)}>X</span>
                <h4>Edita información de {product.name} {product.category}</h4>
                <ul>
                    <li>
                        <label htmlFor="name">Nombre: </label>
                        <input type='text' name='name' id="name" placeholder={product.name} />
                    </li>
                    <li>
                        <label htmlFor="price">Precio: </label>
                        <input type='text' name='price' id="price" placeholder={`${product.price}€`} />
                    </li>
                    <li>
                        <label htmlFor="description">Descripción: </label>
                        <textarea type='text' name='description' id="description" placeholder={product.description} ></textarea>
                    </li>
                    <li>
                        <label htmlFor="category">Categoría: </label>
                        <select name="category" id="category" defaultValue={product.category} >
                            <option value="informatica">Informática</option>
                            <option value="videojuegos">Videojuegos</option>
                            <option value="musica">Música</option>
                            <option value="moda-vintage">Moda Vintage</option>
                            <option value="video">Vídeo</option>
                            <option value="otros">Otros</option>
                        </select>
                    </li>
                </ul>

                {photos.length > 0 ? <DeleteProductPhoto productId={product.id} productPhotos={photos} /> : 'No hay fotos'}
                <AddProductPhoto productId={product.id} />
                <button onClick={handleClick} className="btn">Aceptar Cambios</button>
                {state ? <div>{state}</div> : ''}
            </form>
        </div>
    )
}