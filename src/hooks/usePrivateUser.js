import { useContext, useEffect, useState } from 'react';
import { TokenContext } from '..';

const { REACT_APP_LOCALHOST } = process.env;

const usePrivateUser = () => {
  const [token] = useContext(TokenContext);
  const [privateUser, setPrivateUser] = useState(null);

  const getAvatar = async () => {
    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}/profile`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token.token,
        },
      });

      if (response.ok) {
        console.log('respuesta ok');
        const body = await response.json();
        setPrivateUser(body.data);
      } else {
        setPrivateUser('');
      }
    } catch (error) {
      console.error('Error en el hook');
    }
  };

  useEffect(() => {
    getAvatar();
  }, []);

  return [privateUser];
};

export { usePrivateUser };
