import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';

const { REACT_APP_LOCALHOST } = process.env;

function Register() {
  const [error, setError] = useState();
  const [register, setRegister] = useState(false);
  const [loading, setLoading] = useState();

  const handleRegister = async (e) => {
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

      setLoading(true);

      if (response.ok) {
        setError(false);
        setRegister(true);
      } else {
        setError(true);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error en el registro');
      setError(true);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='register-form'>
      <JustNav />
      <h1>Registro de Usuario en EMUVI</h1>
      {register ? (
        <div>
          <p>
            Usuario registrado con éxito, comprueba tu correo para activar el la
            cuenta!
          </p>
          <p>
            Qué tal si metemos aqui una imagen o algo chachi que indique que
            debe comprobar el correo para continuar? :D
          </p>
        </div>
      ) : (
        <form onSubmit={handleRegister}>
          <ul>
            <li>
              <label htmlFor='username'>Username: </label>
              <input type='text' name='username' id='username' required />
            </li>
            <li>
              <label htmlFor='email'>Email: </label>
              <input type='email' name='email' id='email' required />
            </li>
            <li>
              <label htmlFor='passwd'>Password: </label>
              <input
                type='password'
                name='passwd'
                id='passwd'
                autoComplete='on'
                required
              />
            </li>
            <li>
              <button className='btn'>Registro</button>
            </li>
            <li>
              <p>
                Ya tienes una cuenta? <Link to='/login'>Inicia Sesión</Link>
              </p>
            </li>
          </ul>
        </form>
      )}
      {error ? (
        <div>
          Hubo un error en el registro del usuario comprueba los datos
          proporcionados, puede que ya exista un usuario con ese email o nombre.
        </div>
      ) : (
        ''
      )}
      <Footer />
    </div>
  );
}

export { Register };
