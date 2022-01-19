import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const { REACT_APP_LOCALHOST } = process.env;

const useRegistered = () => {
  const { user } = useAuth0();
  const [isRegistered, setIsRegistered] = useState(false);

  const userIsRegistered = async () => {
    const authUser = {
      email: user.email,
    };

    // llamada a servidor para saber si está registrado en nuestra bbdd
    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}/newuser`, {
        method: 'POST',
        body: JSON.stringify(authUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const emailIsRegistered = await response.json();
        console.log('Respuesta OK');
        //console.log(emailIsRegistered);
        // si emailIsRegistered es TRUE -> NO muestro el COMPONENTE botón ACTIVAR USUARIO (que sería para registrar por completo el usuario)
        // si es FALSE -> cargo el componente de boton registro y activación
        if (emailIsRegistered.isRegistered) {
          console.log('Registrado ' + emailIsRegistered.isRegistered);
          setIsRegistered(true);
        } else {
          console.log('Registrado ' + emailIsRegistered.isRegistered);
          setIsRegistered(false);
        }
      } else {
        console.error('Respuesta no ok :/');
      }
    } catch (_) {
      console.error('Error al conectar con el servidor');
    }
  };

  useEffect(() => {
    userIsRegistered();
  }, [isRegistered]);

  return [isRegistered];
};

export { useRegistered };
