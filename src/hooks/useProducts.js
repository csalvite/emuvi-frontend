import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

const useProducts = () => {
  const [params] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const order =
    params.get('order') || 'price' || 'createAt' || 'category' || 'rating';
  const direction = params.get('direction') || 'DESC' || 'ASC';
  let rating = params.get('rating');
  let search = params.get('search');
  let minPrice = params.get('minPrice');
  let maxPrice = params.has('maxPrice')
    ? params.get('maxPrice')
    : params.get('');
  useEffect(() => {
    const getProducts = async () => {
      let url = `${REACT_APP_LOCALHOST}/products?order=${encodeURIComponent(
        order
      )}&direction=${encodeURIComponent(direction)}`;

      if ((minPrice && maxPrice) || rating) {
        url = `${url}
        )}&minPrice=${encodeURIComponent(
          minPrice
        )}&maxPrice=${encodeURIComponent(maxPrice)}&rating=${encodeURIComponent(
          rating
        )}`;
      }
      if (search) {
        url = `${url}&minPrice=${encodeURIComponent(
          minPrice
        )}&maxPrice=${encodeURIComponent(maxPrice)}&rating=${encodeURIComponent(
          rating
        )}&search=${encodeURIComponent(search)}`;
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
