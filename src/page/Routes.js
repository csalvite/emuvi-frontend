import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import { Login, Register, ValidateRegister } from './auth'; */
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { ValidateRegister } from './auth/ValidateRegister';
import { Products } from './products';
import App from './home/App';
import NewProduct from './new_product/NewProduct';
import { UserProfile } from './auth/UserProfile';

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
        <Route path='profile' element={<UserProfile />} />
        <Route path='products' element={<Products />} />
        <Route path='newproduct' element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export { EmuviRoutes };
