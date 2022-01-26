//import logo from './logo.svg';
import './App.css';
import Header1 from '../../components/Header';
import Categories from '../../components/Categories';
import AboutUs from '../../components/AboutUs';
import Footer from '../../components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header1 />

      <main>
        {/*<section id="newest-products">
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
              <Link to="/login">
                <button className="btn-newest-products">Newest Products</button>
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

        </section>*/}
        <Categories />
        <AboutUs />
      </main>

      {/*<footer>
        
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
      </footer>*/}

      {/*<Footer />*/}
    </div>
  );
}

export default App;
