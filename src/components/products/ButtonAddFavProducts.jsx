import { useState } from 'react';
import { useContext } from 'react';
import { TokenContext } from '../..';
import LoadingComponent from '../loading/loading';

export const ButtonFavProduct = ({ idProduct }) => {
  const [token] = useContext(TokenContext);
  const [loading, setLoading] = useState(false);

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
      } else {
        console.error('Hubo un error al añadir el producto como favorito');
      }
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };
  if (loading) {
    return <LoadingComponent />;
  }
  return (
    <button className='btn' onClick={handleAddFavProduct}>
      Añadir a favorito
    </button>
  );
};
