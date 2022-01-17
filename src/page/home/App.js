//import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <video autoPlay loop muted src='./resources/videos/HeaderVideoBG.mp4'>
          Video cannot be loaded :(
        </video>
        <div className='main-header'>
          <h1>EMUVI</h1>
          <form action='#'>
            <input
              type='text'
              name='search'
              placeholder='Indica aquí tu búsqueda...'
            />
          </form>
          <div className='buttons-header'>
            <Link to='/login'>
              <button className='btn-login-register'>Login/Register</button>
            </Link>
          </div>
        </div>

        <div className='header-main-text'>
          <h2>EL MUNDO VINTAGE</h2>
          <h3>PLATAFORMA PARA COMPTA-VENTA DE ARTÍCULOS RETRO</h3>
          <Link to='/products'>
            <button className='btn-products'>PRODUCTOS</button>
          </Link>
        </div>
      </header>

      <main>
        <section id='newest-products'>
          <div>
            <div className='div-modernillo'>
              <img src='./resources/images/gatito01.jpg' alt='Product' />
            </div>
            <h2>ÉCHALE UN VISTAZO A NUESTROS PRODUCTOS MÁS NOVEDOSOS</h2>
          </div>

          <div>
            <div className='newest-products-text'>
              <p>
                En el siguiente enlace encontrarás un listado ordenado con los
                productos vintage en venta más nuevos
              </p>
              <Link to='/login'>
                <button className='btn-newest-products'>Newest Products</button>
              </Link>
            </div>
            <div className='div-modernillo'>
              <img src='./resources/images/gatito02.jpg' alt='Product' />
            </div>
          </div>
        </section>

        <section id='categories'>
          <h2>CATEGORÍAS</h2>
          <ul>
            <li>
              <img
                src='./resources/vectors/computer-svgrepo-com.svg'
                alt='Imagen de categoría'
              />
              <h3>Nombre de Categoría</h3>
              <p>Descripción de la categoría</p>
            </li>
            <li>
              <img
                src='./resources/vectors/joystick-videogame-controller-svgrepo-com.svg'
                alt='Imagen de categoría'
              />
              <h3>Nombre de Categoría</h3>
              <p>Descripción de la categoría</p>
            </li>
            <li>
              <img
                src='./resources/vectors/video-svgrepo-com.svg'
                alt='Imagen de categoría'
              />
              <h3>Nombre de Categoría</h3>
              <p>Descripción de la categoría</p>
            </li>
            <li>
              <img
                src='./resources/vectors/music-svgrepo-com.svg'
                alt='Imagen de categoría'
              />
              <h3>Nombre de Categoría</h3>
              <p>Descripción de la categoría</p>
            </li>
            <li>
              <img
                src='./resources/vectors/hanger-fashion-svgrepo-com.svg'
                alt='Imagen de categoría'
              />
              <h3>Nombre de Categoría</h3>
              <p>Descripción de la categoría</p>
            </li>
            <li>
              <img
                src='./resources/vectors/ellipsis-svgrepo-com.svg'
                alt='Imagen de categoría'
              />
              <h3>Nombre de Categoría</h3>
              <p>Descripción de la categoría</p>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <h2>EMUVI - El Mundo Vintage</h2>
        <div className='enterprise-direction'>
          <p>123 Anywhere St.Any City, ST 12345</p>
          <p>123-456-789</p>
          <p>hiliwi@reallygoodsite:D.com</p>
        </div>
        <div className='social-media'>
          <ul>
            <li>
              <a href='.' target='_blank'>
                <img
                  className='social-icon'
                  src='./resources/vectors/twitter-svgrepo-com.svg'
                  alt='twitter-icon'
                />
              </a>
            </li>
            <li>
              <a href='.' target='_blank'>
                <img
                  className='social-icon'
                  src='./resources/vectors/instagram-svgrepo-com.svg'
                  alt='instagram-icon'
                />
              </a>
            </li>
            <li>
              <a href='.' target='_blank'>
                <img
                  className='social-icon'
                  src='./resources/vectors/linkedin-svgrepo-com.svg'
                  alt='linkedin-icon'
                />
              </a>
            </li>
            <li>
              <a href='.' target='_blank'>
                <img
                  className='social-icon'
                  src='./resources/vectors/twitch-svgrepo-com.svg'
                  alt='twitch-icon'
                />
              </a>
            </li>
            <li>
              <a href='.' target='_blank'>
                <img
                  className='social-icon'
                  src='./resources/vectors/youtube-svgrepo-com.svg'
                  alt='youtube-icon'
                />
              </a>
            </li>
          </ul>
        </div>
        <div className='legal'>
          <ul>
            <li>Términos y Condiciones</li>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
            <li>Cookies</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
