import { useState } from 'react/cjs/react.development';

const { REACT_APP_LOCALHOST } = process.env;

function Login() {
  const [token, setToken] = useState(''); // aqui va a ir el contexto

  const login = async (e) => {
    e.preventDefault();

    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.passwd.value,
    };

    try {
      const response = await fetch(`${REACT_APP_LOCALHOST}/users/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer' + token,
        },
      });

      if (response.ok) {
        const userLoged = await response.json();
        console.log('El usuario se ha logeado correctamente');
        console.log(userLoged);
      } else {
        console.error('Algo falló al logear al usuario');
      }
    } catch (error) {
      console.error('Error en el login');
    }
  };

  return (
    <div className='login'>
      <form onSubmit={login}>
        <ul>
          <li>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' />
          </li>
          <li>
            <label htmlFor='passwd'>Password: </label>
            <input type='password' name='passwd' id='passwd' />
          </li>
          <li>
            <button>Iniciar Sesión</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export { Login };
