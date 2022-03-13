import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../..";
import CardProduct from "../products/CardProduct";
import './UserInfo.css';

const {REACT_APP_LOCALHOST} = process.env;

function FavoriteProducts({privateUser}) {

  const [token] = useContext(TokenContext);
  const [error, setError] = useState();
  const [favProducts, setFavProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  }, [privateUser.id, token.token, setFavProducts]);

  if (loading) {
      return (
          <img src="/resources/vectors/loading.svg" alt="loading" />
      )
  }

  return (
    <div className='user-profile'>
        <h2>Productos Favoritos</h2>
        {error ? <div>No hay productos marcados como favoritos</div>
        : (
            <div className="user-fav-products">
            {favProducts.map((product) => {
            return (
                <CardProduct product={product} key={product.id} deleteFav={true} favProducts={favProducts} setFavProducts={setFavProducts} />
                )
            })}
            </div>
        )}
            {/* <div key={index}>

                <button id={product.id} onClick={handleDeleteFavProduct}>X</button>
                
                
                <p>{product.name} <button id={product.id} onClick={handleDeleteFavProduct}>X</button></p>
                <p>{product.price}</p>
                <p>
                    {product.photos.length > 0 ? product.photos.map((photo, index) => {
                        return (
                            <img key={index} src={`${REACT_APP_LOCALHOST}/avatar/${photo.name}`} alt={photo.name} style={{width: '200px'}}/>
                        )
                    }) : ''}
                </p>
            </div> */}
    </div>
  )
}

export { FavoriteProducts };
