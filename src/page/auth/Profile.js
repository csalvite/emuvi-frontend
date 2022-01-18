import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ButtonRegisterUser } from './ButtonRegisterUser';

const { REACT_APP_LOCALHOST } = process.env;

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const userRegistered = useEffect(() => {
    const authUser = {
      email: user.email,
    };

    // llamada a servidor para saber si está registrado en nuestra bbdd
    const isRegistered = async () => {
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
            console.log('es true ' + emailIsRegistered.isRegistered);
          } else {
            console.log('es false ' + emailIsRegistered.isRegistered);
            return (
              <>
                <ButtonRegisterUser />
              </>
            );
          }
        } else {
          console.error('Respuesta no ok :/');
        }
      } catch (_) {
        console.error('Error al conectar con el servidor');
      }
    };

    isRegistered();
  }, []);

  console.log('UseEffect -> ' + userRegistered);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        {userRegistered}
        <div>
          {
            // existe ese email en la base de datos y está activado?
            // TRUE no mostramos nada
            // FALSE enlace a formulario de registro para insertar TODOS los datos del usuario y simplemente
            //  enviar un correo de activación de cuenta/confirmación de email
          }
        </div>
      </div>
    )
  );
};
