import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TokenContext } from '../..';
import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import './ConfirmChangeEmail.css';

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
        } else {
          setError(true);
        }
      } catch (error) {
        console.error(error.message);
        setError(true);
      }
    };

    changeMail();
  }, [registrationCode, setToken]);

  return (
    <div>
      <JustNav />
      <div className='change-email-container'>
        {error ? (
          <div className='change-email change-email-error'>
            <i class='fa-solid fa-circle-exclamation'></i>
            <p>Ha habido un error en la confirmación del cambio de email</p>
          </div>
        ) : (
          <div className='change-email change-email-success'>
            <i class='fa-solid fa-circle-check'></i>
            <p>Email cambiado correctamente!</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmChangeEmail;
