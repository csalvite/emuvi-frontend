import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* import { Login, Register, ValidateRegister } from './auth'; */
import { Login } from './auth/Login';
import { Register } from './auth/Register';
import { ValidateRegister } from './auth/ValidateRegister';
import { Products } from './products';
import App from './home/App';

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
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export { EmuviRoutes };
