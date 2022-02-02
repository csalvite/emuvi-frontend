import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TokenContext } from '../..';
import Footer from '../../components/footer/Footer';
import Header1 from '../../components/Header';

const { REACT_APP_LOCALHOST } = process.env;

const ConfirmChangeEmail = () => {
  const { registrationCode } = useParams();
  const [error, setError] = useState();
  const [, setToken] = useContext(TokenContext);

  useEffect(() => {
    const changeMail = async () => {
      try {
        const response = await fetch(
          `${REACT_APP_LOCALHOST}/users/mail/${registrationCode}`,
          {
            method: 'POST',
          }
        );

        if (response.ok) {
          setToken('');
          setError(false);
        }
      } catch (error) {
        console.error(error.message);
        setError(true);
      }
    };

    changeMail();
  }, [registrationCode]);

  return (
    <div>
      <Header1 />
      {error ? (
        <div>Ha habido un error en la confirmación del cambio de email</div>
      ) : (
        <div>Email cambiado correctamente :D</div>
      )}
      <Footer />
    </div>
  );
};

export default ConfirmChangeEmail;
