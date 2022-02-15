import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useProducts = () => {
  /* // const { search } = useLocation();
  // const value = queryString.parse(search).search;
  const location = useLocation();
  const search = location.search;
  const value = new URLSearchParams(search);
  let direction;
  search ? (direction = `?search=${direction}`) : (direction = '');
  */
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [params] = useSearchParams();

  const search = params.get('search');
  const order = params.get('order') || 'createdAt';
  const direction = params.get('direction') || 'DESC';

  useEffect(() => {
    const getProducts = async () => {
      let url = `http://localhost:4000/products?order=${encodeURIComponent(
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
  }, [search, order, direction]);

  return { products, setProducts, loading, error };
};

export default useProducts;
