import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

const useLatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [params] = useSearchParams();

  const order = params.get('order') || 'createdAt';
  const direction = params.get('direction') || 'ASC';
  useEffect(() => {
    const getProducts = async () => {
      try {
        let url = `${REACT_APP_LOCALHOST}/?order=${encodeURIComponent(
          order
        )}&direction=${encodeURIComponent(direction)}`;

        setLoading(true);

        const res = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.ok) {
          const body = await res.json();
          console.table(body);
          setError('');
          setProducts(body.featuredProducts);
          console.log(products);
        } else {
          setError('No se han podido recibir los productos más novedosos.');
        }
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    getProducts();
  }, [order, direction]);
  return { products, loading, error };
};

export default useLatestProducts;
