import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import { Login, Register, ValidateRegister } from './auth'; */
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { ValidateRegister } from './auth/ValidateRegister';
import { Products } from './products';
import App from './home/App';
import NewProduct from './new_product/NewProduct';
import { UserProfile } from './auth/UserProfile';
import ConfirmChangeEmail from './auth/ConfirmChangeEmail';
import AboutUs from '../components/aboutUs/AboutUs';
import PublicUser from './publicProfile/PublicUser';
import Product from './products/Product';
import E404 from '../components/E404/E404';
import DropDown from '../components/DropDown/DropDown';

function EmuviRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/validate/:registrationCode'
          element={<ValidateRegister />}
        />
        <Route
          path='/users/mail/:registrationCode'
          element={<ConfirmChangeEmail />}
        />
        <Route path='profile/*' element={<UserProfile />} />
        {/* Deberíamos intentar que la ruta pública no incluya el id del user */}
        <Route path='/profile/:idUser/public' element={<PublicUser />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:idProduct' element={<Product />} />
        <Route path='newproduct' element={<NewProduct />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='DD' element={<DropDown />} />
        {/*Importante, esta ruta tiene que ser la ultima para no tocar con problemas de jerarquias*/}
        <Route path='*' element={<E404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export { EmuviRoutes };
