import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const useProductDetail = (props) => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const { REACT_APP_LOCALHOST } = process.env;
  let { idProduct } = useParams();
  if (props) {
    idProduct = props;
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(
          `${REACT_APP_LOCALHOST}/products/${idProduct}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);

          setProduct(data);
          setError(true);
        }
      } catch (error) {
        console.error('hubo un error al recibir el producto');
        setError(true);
      }
    };
    getProduct();
  }, [REACT_APP_LOCALHOST, idProduct]);
  return { product, setProduct, error };
};

export default useProductDetail;
