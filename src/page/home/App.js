//import logo from './logo.svg';
import './App.css';
import Header1 from '../../components/header/Header';
import Categories from '../../components/categories/Categories';
import AboutUs from '../../components/aboutUs/AboutUs';
import Footer from '../../components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header1 />

      <main>
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
