import { Link } from 'react-router-dom';
import { useRegistered } from '../../hooks/useRegistered';

const ButtonRegisterUser = () => {
  const [isRegistered] = useRegistered();

  console.log(isRegistered);

  // Si email no está en nuestra base de datos o el usuario no está activo mostramos
  // el botón que redirige al formulario de completar registro y activación del usuario
  return (
    !isRegistered && (
      <div>
        <Link to='/register'>
          <button className='btn'>ACTIVAR CUENTA</button>
        </Link>
      </div>
    )
  );
};

export { ButtonRegisterUser };
