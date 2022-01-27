import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
      <h1>NUESTRO EQUIPO</h1>
      <div className="container">
        <div className="card">
          <div className="imgBox">
            <img
              src="./resources/images/marco-min.png"
              alt="marco profile"
            ></img>
          </div>
          <div className="details">
            <h4>Marco Muñoz</h4>
            <h5>Especialista en...</h5>
            <p>
              Aquí iría una breve presentación de cada uno de nosotros, así como
              alguna afición o destreza a destacar
            </p>

            <a href="https://www.linkedin.com/in/marco-m-b33a51191/">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/marco.munozgormedino/">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/marco-m-b33a51191/">
              <i class="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img
              src="./resources/images/cesar-min.png"
              alt="cesar profile"
            ></img>
          </div>
          <div className="details">
            <h4>Cesar Alvite</h4>
            <h5>Especialista en...</h5>
            <p>
              Aquí iría una breve presentación de cada uno de nosotros, así como
              alguna afición o destreza a destacar
            </p>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src="./resources/images/alex-min.png" alt="alex profile"></img>
          </div>
          <div className="details">
            <h4>Alex Coba</h4>
            <h5>Especialista en...</h5>
            <p>
              Aquí iría una breve presentación de cada uno de nosotros, así como
              alguna afición o destreza a destacar
            </p>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="card">
          <div className="imgBox">
            <img src="./resources/images/dani-min.png" alt="dani profile"></img>
          </div>
          <div className="details">
            <h4>Dani Seco</h4>
            <h5>Especialista en...</h5>
            <p>
              Aquí iría una breve presentación de cada uno de nosotros, así como
              alguna afición o destreza a destacar
            </p>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
