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

      const body = await res.json();
      console.table(body);

      if (res.ok) {
        setError('');
        setProducts(body.data.featuredProducts);
      } else {
        setError(body.message);
      }

      setLoading(false);
    };

    getProducts();
  }, [order, direction]);
  return { products, loading, error };
};

export default useLatestProducts;
