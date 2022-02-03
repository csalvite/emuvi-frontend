import { useEffect, useState } from 'react';

const { REACT_APP_LOCALHOST } = process.env;

const useAvatar = () => {
  const [avatar, setAvatar] = useState();

  const getAvatar = async () => {
    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}`);
    } catch (error) {
      console.error(error);
    }
  };

  return [avatar, setAvatar];
};

export { useAvatar };
