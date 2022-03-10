import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '..';
import { usePrivateUser } from './usePrivateUser';
const { REACT_APP_LOCALHOST } = process.env;

const useFavoriteProduct = () => {
  const [token] = useContext(TokenContext);
  const { privateUser } = usePrivateUser();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const getUserFavProducts = async () => {
      try {
        const response = await fetch(
          `${REACT_APP_LOCALHOST}/users/${privateUser.id}/favorites`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: token.token,
            },
          }
        );

        if (response.ok) {
          setIsFav(true);
        } else {
          setIsFav(false);
        }
      } catch (error) {
        setIsFav(false);
      }
    };

    getUserFavProducts();
  }, [token.token, privateUser.id]);

  return { isFav };
};

export { useFavoriteProduct };
