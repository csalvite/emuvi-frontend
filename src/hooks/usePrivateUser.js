import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '..';

const { REACT_APP_LOCALHOST } = process.env;

const usePrivateUser = () => {
  const [token] = useContext(TokenContext);
  const [privateUser, setPrivateUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const url = `${REACT_APP_LOCALHOST}/profile`;
      try {
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token.token,
          },
        });

        if (response.ok) {
          const body = await response.json();
          setPrivateUser(body.data);
        } else {
          setPrivateUser('');
        }
      } catch (error) {
        console.error('Error en el hook');
      }
    };

    getUser();
  }, [token.token]);

  return [privateUser];
};

export { usePrivateUser };
