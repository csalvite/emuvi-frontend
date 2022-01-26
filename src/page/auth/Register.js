import { useState } from 'react';
import { Link } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

function Register() {
  const [error, setError] = useState();
  const [register, setRegister] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    const newUser = {
      username: e.target.elements.username.value,
      email: e.target.elements.email.value,
      password: e.target.elements.passwd.value,
    };

    console.log(newUser);

    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}/users`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const userRegister = await response.json();
        console.log('Usuario registrado comprobar email para activación');
        setError(false);
        setRegister(true);
        console.log(userRegister);
      } else {
        console.error('Error en el registro del usuario');
        setError(true);
      }
    } catch (error) {
      console.error('Error en el registro');
      setError(true);
    }
  };

  if (register) {
    return (
      <div>
        <p>
          Usuario registrado con éxito, comprueba tu correo para activar el la
          cuenta!
        </p>
        <p>
          Qué tal si metemos aqui una imagen o algo chachi que indique que debe
          comprobar el correo para continuar? :D
        </p>
      </div>
    );
  }

  return (
    <div className='register-form'>
      <h1>Registro de Usuario en EMUVI</h1>

      <form onSubmit={handleRegister}>
        <ul>
          <li>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' id='username' required />
          </li>
          <li>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' required />
          </li>
          <li>
            <label htmlFor='passwd'>Password: </label>
            <input type='password' name='passwd' id='passwd' required />
          </li>
          <li>
            <button className='btn'>Registro</button>
          </li>
          <li>
            <p>
              Ya tienes una cuenta? <Link to='/register'>Inicia Sesión</Link>
            </p>
          </li>
        </ul>
      </form>
      {error ? (
        <div>
          Hubo un error en el registro del usuario comprueba los datos
          proporcionados
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export { Register };
