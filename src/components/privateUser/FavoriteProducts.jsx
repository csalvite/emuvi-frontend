import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../..";

const {REACT_APP_LOCALHOST} = process.env;

function FavoriteProducts({privateUser}) {

  const [token] = useContext(TokenContext);
  const [error, setError] = useState();
  const [favProducts, setFavProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Estado para recargar productos cuando se elimina uno de favoritos
  const [favEliminated, setFavEliminated] = useState(false);

  // Devolvemos los productos favoritos del usuario
  useEffect(() => {
        const getFavoriteProducts = async() => {
            try{
                const response = await fetch(`${REACT_APP_LOCALHOST}/users/${privateUser.id}/favorites`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token.token,
                    },
                });

                setLoading(true);

                if (response.ok) {
                    const body = await response.json();
                    setFavProducts(body.data);
                    setError(false);
                } else {
                    setError(true);
                }
                
                setLoading(false);

            } catch(error) {
                console.error(error);
                setError(true);
            }
        }
      getFavoriteProducts();

  }, [privateUser.id, token.token, favEliminated]);

  // Funcion manejadora para eliminar producto de favoritos
  const handleDeleteFavProduct = async (e) => {
    e.preventDefault();

    // Según el botón que pulse se recoge un id de producto u otro
    const url = `${REACT_APP_LOCALHOST}/user/${privateUser.id}/favorites/${e.target.id}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token.token,
            }
        });

        setLoading(true);

        if (response.ok) {
            console.log('Producto eliminado de favoritos correctamente');
            setFavEliminated(true);
        } else {
            console.error('Error al borrar el producto');
        }

        setLoading(false);

    } catch (error) {
        console.error(error.message);
        setError(true);
    }
  }

  if (loading) {
      return (
          <img src="/resources/vectors/loading.svg" alt="loading" />
      )
  }

  return (
    <div className='user-profile'>
        <h2>Productos Favoritos</h2>
        {error ? <div>No hay productos marcados como favoritos</div>
        : 
        favProducts.map((product, index) => {
            return (
                <div key={index}>
                    <p>{product.name} <button id={product.id} onClick={handleDeleteFavProduct}>X</button></p>
                    <p>{product.price}</p>
                    <p>
                        {product.photos.length > 0 ? product.photos.map((photo, index) => {
                            return (
                                <img key={index} src={`${REACT_APP_LOCALHOST}/avatar/${photo.name}`} alt={photo.name} style={{width: '200px'}}/>
                            )
                        }) : ''}
                    </p>
                </div>
            )
        })}
    </div>
  )
}

export { FavoriteProducts };
