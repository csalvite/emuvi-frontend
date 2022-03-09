import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

const useProducts = () => {
  const [params] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const order = params.get('order') || 'price' || 'createAt' || 'category';
  const direction = params.get('direction') || 'DESC' || 'ASC';

  let search = params.get('search');
  useEffect(() => {
    const getProducts = async () => {
      let url = `${REACT_APP_LOCALHOST}/products?order=${encodeURIComponent(
        order
      )}&direction=${encodeURIComponent(direction)}`;

      if (search) {
        url = `${url}&search=${encodeURIComponent(search)}`;
      }

      setLoading(true);

      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (res.ok) {
        setError('');
        setProducts(data.data);
      } else {
        setError(data.message);
      }

      setLoading(false);
    };

    getProducts();
  }, [order, direction, search]);

  return { products, setProducts, loading, error };
};

export default useProducts;
