import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import './ValidateRegister.css';

const { REACT_APP_LOCALHOST } = process.env;

function ValidateRegister() {
  const { registrationCode } = useParams();
  const [error, setError] = useState();
  const [canRegister, setCanRegister] = useState(false);
  let lat = 0;
  let lon = 0;

  const register = async (e) => {
    e.preventDefault();

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

  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    console.log('Latitude is :', lat);
    lon = position.coords.longitude;
    console.log('Longitude is :', lon);
  });

  return (
    <div>
      {/* className='register-form' he quitado esta clase porque dejaba unos estilos "un tanto raros" xD - cesar */}
      <JustNav />
      <div className='body-container-form'>
        <form onSubmit={register} className='login-formRegister'>
          <h1 className='form-title'>Completa el registro </h1>
          {/* <p>
            Para poder poner en venta tus productos en emuvi nos es necesaria
            cierta información a mayores que será utilizada únicamente para las
            ventas
          </p> */}
          <ul id='fieldRegister'>
            <li>
              <label htmlFor='name'></label>
              <input
                className='form-inputRegister'
                type='text'
                name='name'
                id='name'
                placeholder='Nombre'
                required
              />
            </li>
            <li>
              <label htmlFor='lastname'></label>
              <input
                className='form-inputRegister'
                type='text'
                name='lastname'
                id='lastname'
                placeholder='Apellidos'
                required
              />
            </li>
            <li>
              <label htmlFor='birthday'></label>
              <input
                className='form-inputRegister'
                type='date'
                name='birthday'
                id='birthday'
                required
              />
            </li>
            <li>
              <label htmlFor='phone'></label>
              <input
                className='form-inputRegister'
                type='text'
                name='phone'
                placeholder='Telefono'
                id='phone'
              />
            </li>
            <li>
              <label htmlFor='street'></label>
              <input
                className='form-inputRegister'
                type='text'
                name='street'
                id='street'
                placeholder='Calle'
                required
              />
            </li>
            <li>
              <label
                className='form-labelRegister'
                htmlFor='postalCode'
              ></label>
              <input
                className='form-inputRegister'
                type='text'
                name='postalCode'
                id='postalCode'
                placeholder='Codigo Postal'
                required
              />
            </li>
            <li>
              <label htmlFor='city'></label>
              <input
                className='form-inputRegister'
                type='text'
                name='city'
                id='city'
                placeholder='Ciudad'
                required
              />
            </li>
            <li>
              <label htmlFor='province'></label>
              <input
                className='form-inputRegister'
                type='text'
                name='province'
                id='province'
                placeholder='Provincia'
                required
              />
            </li>
            <li>
              <label htmlFor='biography'></label>
              <textarea
                name='biography'
                id='biography'
                placeholder='Biografia'
              />
            </li>
            <li>
              <button className='login-form-btn'>Registrarse</button>
            </li>
          </ul>
        </form>
      </div>

      {error ? (
        <div>
          Comprueba todos los campos marcados como obligatorios o introduce
          datos coherentes.
        </div>
      ) : (
        ''
      )}

      <Footer />
    </div>
  );
}

export { ValidateRegister };
