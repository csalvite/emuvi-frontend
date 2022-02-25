import React from 'react';

import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import { ButtonNewOffer } from '../../components/offers/ButtonNewOffer';
import ProductPhoto from '../../components/products/ProductPhoto';
import ProductSingleData from '../../components/products/ProductSingleData';
import UserMapProduct from '../../components/products/UserMapProduct';
import { PublicUserAccess } from '../../components/publicUser/PublicUserAccess';
import useProductDetail from '../../hooks/useProductDetail';
import './Product.css';
// Página Producto en Detalle
const Product = (props) => {
  // const [user] = usePrivateUser();
  const { product } = useProductDetail();

  return (
    <>
      <JustNav />

      <ProductPhoto />
      <ProductSingleData />

      <div className='leaflet-container'>
        <UserMapProduct
          lat={product.lat}
          lon={product.lon}
          name={product.name}
        />
      </div>

      <PublicUserAccess idUser={product.idUser} />
      <ButtonNewOffer idProduct={product.id} idUser={product.idUser} />
      <Footer />
    </>
  );
};

export default Product;
