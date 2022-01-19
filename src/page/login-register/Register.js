import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const { REACT_APP_LOCALHOST } = process.env;

function Register() {
  const register = async (e) => {
    e.preventDefault();

    let lat = 0;
    let lon = 0;

    const newUser = {
      username: e.target.elements.username.value
        ? e.target.elements.username.value
        : user.nickname,
      email: user.email,
      name: user.given_name,
      password: '',
      lastname: user.family_name,
      avatar: user.picture,
      birthday: e.target.elements.birthday.value,
      biography: e.target.elements.biography.value,
      phone: e.target.elements.phone.value,
      latitude: lat,
      longitude: lon,
      street: e.target.elements.street.value,
      postalCode: e.target.elements.postalCode.value,
      city: e.target.elements.city.value,
      province: e.target.elements.province.value,
    };

    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}/users`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userRegisted = await response.json();
        console.log(
          'El usuario se ha registrado correctamente, comprobar el correo proporcionado'
        );
        console.log(userRegisted);
      } else {
        console.error('Algo falló al registrar al usuario');
      }
    } catch (error) {
      console.error('Error en el registro');
    }
  };

  // Recogemos los valores del usuario logeado con Auth0
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);

  return (
    isAuthenticated && (
      <div className='register-form'>
        <h1>Formulario para completar el registro en EMUVI</h1>
        <p>
          Para poder poner en venta tus productos en emuvi nos es necesaria
          cierta información a mayores que será utilizada únicamente para las
          ventas :)
        </p>
        <div>
          <img src={user.picture} alt={user.name} />
        </div>
        <form onSubmit={register}>
          <ul>
            <li>
              <label htmlFor='username'>Username: </label>
              <input
                type='text'
                name='username'
                id='text'
                placeholder={user.nickname}
              />
            </li>
            <li>
              <label htmlFor='email'>Email: </label>
              <input
                type='text'
                name='email'
                id='email'
                placeholder={user.email}
                disabled
              />
            </li>
            <li>
              <label htmlFor='birthday'>Fecha de nacimiento: </label>
              <input type='date' name='birthday' id='birthday' required />
            </li>
            <li>
              <label htmlFor='biography'>Biografía: </label>
              <textarea name='biography' id='biography' />
            </li>
            <li>
              <label htmlFor='phone'>Número de teléfono: </label>
              <input type='text' name='phone' id='phone' />
            </li>
            <li>
              <label htmlFor='street'>Calle: </label>
              <input type='text' name='street' id='street' required />
            </li>
            <li>
              <label htmlFor='postalCode'>Código Postal: </label>
              <input type='text' name='postalCode' id='postalCode' required />
            </li>
            <li>
              <label htmlFor='city'>Ciudad: </label>
              <input type='text' name='city' id='city' required />
            </li>
            <li>
              <label htmlFor='province'>Provincia: </label>
              <input type='text' name='province' id='province' required />
            </li>
            <li>
              <button>Registrarse</button>
            </li>
          </ul>
        </form>
      </div>
    )
  );
}

export { Register };
