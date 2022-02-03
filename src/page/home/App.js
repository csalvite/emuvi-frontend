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
      </main>
      <Footer />
    </div>
  );
}

export default App;
