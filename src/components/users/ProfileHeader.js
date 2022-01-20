import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ButtonRegisterUser } from '../../components/users/ButtonRegisterUser';

export const ProfileHeader = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <ButtonRegisterUser />
      </div>
    )
  );
};

// existe ese email en la base de datos y está activado?
// TRUE no mostramos nada
// FALSE enlace a formulario de registro para insertar TODOS los datos del usuario y simplemente
//  enviar un correo de activación de cuenta/confirmación de email
