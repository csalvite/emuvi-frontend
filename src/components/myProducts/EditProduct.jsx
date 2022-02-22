import { useContext, useState } from "react";
import { TokenContext } from "../..";
import "../popUp/acceptStyle.css";

const { REACT_APP_LOCALHOST } = process.env;

export const EditProduct = ({ setShowPopUp, name, price, description, category }) => {

    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState();
    //const [photos, setPhotos] = useState(product.photos);
    const [product, setProduct] = useState({name: name, price: price, description: description, category: category});

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

   /*  const handleDeleteProductPhoto = async (e) => {
        e.preventDefault();

        const idPhoto = e.target.name;
        
        try {
            const url = `${REACT_APP_LOCALHOST}/products/${product.id}/photos/${idPhoto}`;
            
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                setState('Foto de producto eliminada!');
                setPhotos(product.photos);
            } else {
                console.error('Hubo un error al eliminar la foto');
            }

            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    } */

    const handleAddProductPhoto = async (e) => {
        e.preventDefault();

        const idPhoto = e.target.name;
        
        try {
            const url = `${REACT_APP_LOCALHOST}/products/${product.id}/photos/${idPhoto}`;
            
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                setState('Foto de producto eliminada!');
               // setPhotos(product.photos);
            } else {
                console.error('Hubo un error al eliminar la foto');
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

                {/* {photos > 0 ? photos.map((photo, index) => {
                    return (
                        <img
                            key={index}
                            src={`${REACT_APP_LOCALHOST}/avatar/${photo.name}`}
                            alt={photo.id}
                            name={photo.id}
                            onClick={handleDeleteProductPhoto}
                            style={{width: '5rem'}}
                        />
                        )
                    }) : 'No hay fotos'} */}
                <button className="btn">Aceptar Cambios</button>
                {state ? <div>{state}</div> : ''}
            </form>
        </div>
    )
}