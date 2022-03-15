import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

const useProducts = () => {
  const [params] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const order = params.get('order') || 'createdAt';
  const direction = params.get('direction') || 'DESC';
  let rating = Number(params.get('rating'));
  let search = params.get('search');
  let minPrice = params.get('minPrice');
  let maxPrice = params.get('maxPrice');

  useEffect(() => {
    const getProducts = async () => {
      let url = `${REACT_APP_LOCALHOST}/products?order=${encodeURIComponent(
        order
      )}&direction=${encodeURIComponent(direction)}`;

      if (rating) {
        url += `&rating=${encodeURIComponent(rating)}`;
      }

      if (minPrice && maxPrice) {
        url += `&minPrice=${encodeURIComponent(
          minPrice
        )}&maxPrice=${encodeURIComponent(maxPrice)}`;
      }

      if (search) {
        url += `&search=${encodeURIComponent(search)}`;
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
  }, [order, direction, search, rating, minPrice, maxPrice]);

  return { products, setProducts, loading, error };
};

export default useProducts;
