//import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import Header1 from '../../components/Header';
import FooterComp from '../../components/footered/FooterComp';

function App() {
  return (
    <div className='App'>
      <Header1 />
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
        <FooterComp />
      </footer>
    </div>
  );
}

export default App;
