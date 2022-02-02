import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../..";

const {REACT_APP_LOCALHOST} = process.env;

function FavoriteProducts({privateUser}) {

  const [token] = useContext(TokenContext);
  const [error, setError] = useState();
  const [favProducts, setFavProducts] = useState([]);

  
  useEffect(() => {
        const getFavoriteProducts = async() => {
            try{
                const response = await fetch(`${REACT_APP_LOCALHOST}/users/${privateUser.id}/favorites`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token.token,
                    },
                });

                if(response.ok) {
                    const body = await response.json();
                    console.log('Productos favoritos devueltos');
                    setError(false);
                    setFavProducts(body.data);
                } else {
                    setError(true);
                }
            } catch(error) {
                console.error(error);
                setError(true);
            }
        }
      getFavoriteProducts();
  }, [privateUser.id, token.token]);

  return error ? <div>Hubo un problema al cargar los productos favoritos</div> : (
    <div className='user-profile'>
        Productos Favoritos
        {favProducts.length <= 1 ? <div>No hay productos marcados como favoritos</div> 
        : 
        favProducts.map((product) => {
            return (
                <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>
            )
        })}
    </div>
  )
}

export { FavoriteProducts };
