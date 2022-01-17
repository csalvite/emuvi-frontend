import { Link } from 'react-router-dom';

const { REACT_APP_LOCALHOST } = process.env;

function Register() {
  const register = async (e) => {
    e.preventDefault();

    const newUser = {
      username: e.target.elements.username.value,
      email: e.target.elements.email.value,
      password: e.target.elements.passwd.value,
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

  return (
    <div className='register-form'>
      <form onSubmit={register}>
        <ul>
          <li>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' id='text' />
          </li>
          <li>
            <label htmlFor='email'>Email: </label>
            <input type='text' name='email' id='email' />
          </li>
          <li>
            <label htmlFor='passwd'>Password: </label>
            <input type='password' name='passwd' id='passwd' />
          </li>
          <li>
            <button>Registrarse</button>
          </li>
          <li>
            <p>
              Ya tienes cuenta? <Link to='/login'>Inicia Sesión</Link>
            </p>
          </li>
        </ul>
      </form>
    </div>
  );
}

export { Register };
