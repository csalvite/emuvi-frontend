import React from 'react';
import './AboutUs.css';
import JustNav from '../../components/justNavHeader/JustNav';
import Footer from '../../components/footer/Footer';

function AboutUs() {
  return (
    <>
      <JustNav />

      <section className='aboutUs-section'>
        <h1 className='aboutUs-title'>Nuestro equipo</h1>
        <div className='aboutUs-container'>
          <div className='card'>
            <div className='imgBox'>
              <img
                src='./resources/images/marco-min.png'
                alt='marco profile'
              ></img>
            </div>
            <div className='details'>
              <h4>Marco Muñoz</h4>
              <h5>Entusiasta del diseño, maquetación y desarrollo web.</h5>
              <p>
                Me gustaría conectar con un trabajo en el que pueda expandir mi
                creatividad, conocimientos y experiencia.
              </p>

              <a href='https://www.linkedin.com/in/marco-m-b33a51191/'>
                <i
                  className='fab fa-linkedin aboutUsIcons'
                  id='linkedinIcon'
                ></i>
              </a>
              <a href='https://github.com/marcomgcal'>
                <i
                  className='fa-brands fa-github aboutUsIcons'
                  id='githubIcon'
                ></i>
              </a>
              <a href='https://www.instagram.com/delagarden/?hl=es'>
                <i
                  className='fab fa-instagram-square aboutUsIcons'
                  id='instagramIcon'
                ></i>
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='imgBox'>
              <img
                src='./resources/images/cesar-min.png'
                alt='cesar profile'
              ></img>
            </div>
            <div className='details'>
              <h4>Cesar Alvite</h4>
              <h5>Minero de código y catador de café</h5>
              <p>
                Soy desarrollador con experiencia en proyectos personales usando
                ReactJS y NodeJS además de haber administrado y creado
                diferentes bases de datos en MySQL y SQL Server
              </p>
              <a href='https://www.linkedin.com/in/cesar-alvite/'>
                <i
                  className='fab fa-linkedin aboutUsIcons'
                  id='linkedinIcon'
                ></i>
              </a>
              <a href='https://github.com/csalvite'>
                <i
                  className='fa-brands fa-github aboutUsIcons'
                  id='githubIcon'
                ></i>
              </a>
              <a href='https://www.instagram.com/cesar_alvite/'>
                <i
                  className='fab fa-instagram-square aboutUsIcons'
                  id='instagramIcon'
                ></i>
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='imgBox'>
              <img
                src='./resources/images/alex-min.png'
                alt='alex profile'
              ></img>
            </div>
            <div className='details'>
              <h4>Alex Coba</h4>
              <h5>Programador de vocación y socio del Racing de Ferrol</h5>
              <p>
                Infórmatico con experiencia en elaboración en Bases de Datos,
                con experiencia académica en desarrollo de proyectos en Node js
                y React para "Hack a Boss"
              </p>
              <a href='https://www.linkedin.com/in/alexandre-coba-vazquez-5bb527213/'>
                <i
                  className='fab fa-linkedin aboutUsIcons'
                  id='linkedinIcon'
                ></i>
              </a>
              <a href='https://github.com/Alexcoba01'>
                <i
                  className='fa-brands fa-github aboutUsIcons'
                  id='githubIcon'
                ></i>
              </a>
              <a href='https://www.instagram.com/alexcoba/'>
                <i
                  className='fab fa-instagram-square aboutUsIcons'
                  id='instagramIcon'
                ></i>
              </a>
            </div>
          </div>
          <div className='card'>
            <div className='imgBox'>
              <img
                src='./resources/images/danuti1.png'
                alt='dani profile'
              ></img>
            </div>
            <div className='details'>
              <h4>Dani Seco</h4>
              <h5>Especialista en...</h5>
              <p>
                Aquí iría una breve presentación de cada uno de nosotros, así
                como alguna afición o destreza a destacar
              </p>
              <a href='https://www.linkedin.com/in/daniel-seco-lozano-1a42b3226/'>
                <i
                  className='fab fa-linkedin aboutUsIcons'
                  id='linkedinIcon'
                ></i>
              </a>
              <a href='https://github.com/danutty'>
                <i
                  className='fa-brands fa-github aboutUsIcons'
                  id='githubIcon'
                ></i>
              </a>
              <i
                className='fab fa-instagram-square aboutUsIcons'
                id='instagramIcon'
              ></i>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutUs;
