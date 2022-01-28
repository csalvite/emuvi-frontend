import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { TokenContext } from '../..';

const { REACT_APP_LOCALHOST } = process.env;

function UserProfile() {
  const [error, setError] = useState();

  return (
    <div className='register-form'>
      <h1>Perfil de usuario</h1>

      <form>
        <ul>
          <li>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' required />
          </li>
          <li>
            <label htmlFor='passwd'>Password: </label>
            <input type='password' name='passwd' id='passwd' required />
          </li>
          <li>
            <button className='btn'>Iniciar Sesión</button>
          </li>
          <li>
            <p>
              No tienes cuenta? <Link to='/register'>Regístrate</Link>
            </p>
          </li>
        </ul>
      </form>
      {error ? (
        <div>Error en el login ACORDARSE DE DARLE UNA CLASE A ESTO :d</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export { UserProfile };
