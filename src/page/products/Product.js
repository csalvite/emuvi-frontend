import React from 'react';

import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { ButtonNewOffer } from '../../components/offers/ButtonNewOffer';
import ProductPhoto from '../../components/products/ProductPhoto';
import ProductSingleData from '../../components/products/ProductSingleData';
<<<<<<< HEAD
import UserMapProduct from '../../components/products/UserMapProduct';
=======
import { usePrivateUser } from '../../hooks/usePrivateUser';
>>>>>>> 23a030969efc359bf80c5559198112a5394128dd
import useProductDetail from '../../hooks/useProductDetail';
import './Product.css';
// Página Producto en Detalle
const Product = (props) => {
  const [user] = usePrivateUser();
  const { product } = useProductDetail();

  return (
    <>
      <JustNav />
<<<<<<< HEAD

      <ProductPhoto />
      <ProductSingleData />

      <ButtonNewOffer idProduct={product.id} idUser={product.idUser} />
      <div className='leaflet-container'>
        <UserMapProduct />
=======
      <div id='productpage'>
        <ProductPhoto />
        <ProductSingleData />
        <ButtonNewOffer idProduct={product.id} idUser={user.id} />
>>>>>>> 23a030969efc359bf80c5559198112a5394128dd
      </div>
      <Footer />
    </>
  );
};

export default Product;
