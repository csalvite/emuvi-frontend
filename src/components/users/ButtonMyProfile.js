import { Link } from 'react-router-dom';
import { useRegistered } from '../../hooks/useRegistered';

const ButtonMyProfile = () => {
  const [isRegistered] = useRegistered();

  return (
    isRegistered && (
      <div>
        <Link to='/register'>
          <button className='btn'>PERFIL</button>
        </Link>
      </div>
    )
  );
};

export { ButtonMyProfile };
