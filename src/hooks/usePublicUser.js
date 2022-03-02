import { useEffect, useState } from 'react';

const { REACT_APP_LOCALHOST } = process.env;

export const usePublicUser = ({ idUser }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const url = `${REACT_APP_LOCALHOST}/users/${idUser}`;
      try {
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const body = await response.json();

          setUser(body);
        } else {
          console.error('Ha habido un error al recibir los datos');
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    getUser();
  }, [idUser]);

  return user;
};
