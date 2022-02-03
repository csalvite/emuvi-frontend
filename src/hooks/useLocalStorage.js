import { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const initialState = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : defaultValue;
  const [data, setData] = useState(initialState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);
  return [data, setData];
};

export { useLocalStorage };
