import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';

const { REACT_APP_LOCALHOST } = process.env;

function ValidateRegister() {
  const { registrationCode } = useParams();
  const [error, setError] = useState();
  const [canRegister, setCanRegister] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    let lat = 0;
    let lon = 0;

    const newUser = {
      name: e.target.elements.name.value,
      lastname: e.target.elements.lastname.value,
      birthday: e.target.elements.birthday.value,
      biography: e.target.elements.biography.value,
      phone: e.target.elements.phone.value,
      latitude: lat,
      longitude: lon,
      street: e.target.elements.street.value,
      postalCode: e.target.elements.postalCode.value,
      city: e.target.elements.city.value,
      province: e.target.elements.province.value,
      registrationCode: registrationCode,
    };

    try {
      const response = await fetch(
        `${REACT_APP_LOCALHOST}/users/register/:registrationCode`,
        {
          method: 'POST',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const userRegisted = await response.json();
        console.log(
          'El usuario se ha registrado correctamente y cuenta como activo'
        );
        setError(false);
        console.log(userRegisted);
        setCanRegister(true);
      } else {
        console.error('Algo falló al registrar al usuario');
        setError(true);
      }
    } catch (error) {
      console.error('Error en el registro');
      setError(true);
    }
  };

  if (canRegister) {
    return <Navigate to='/' />;
  }

  return (
    <div className='register-form'>
      <JustNav />
      <h1>Formulario para completar el registro en EMUVI</h1>
      <p>
        Para poder poner en venta tus productos en emuvi nos es necesaria cierta
        información a mayores que será utilizada únicamente para las ventas :)
      </p>

      <form onSubmit={register}>
        <ul>
          <li>
            <label htmlFor='name'>Nombre: </label>
            <input type='text' name='name' id='name' required />
          </li>
          <li>
            <label htmlFor='lastname'>Apellidos: </label>
            <input type='text' name='lastname' id='lastname' required />
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
            <button className='btn'>Registrarse</button>
          </li>
        </ul>
      </form>

      {error ? (
        <div>Comprueba todos los campos marcados como obligatorios</div>
      ) : (
        ''
      )}

      <Footer />
    </div>
  );
}

export { ValidateRegister };
