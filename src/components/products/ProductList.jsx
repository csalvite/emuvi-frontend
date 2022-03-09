import CardProduct from './CardProduct';

import useProducts from '../../hooks/useProducts';
import './ProductList.css';
import { useState } from 'react';

import FilterProducts from './FilterProducts';

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { products, loading, error } = useProducts();

  if (loading) return 'Cargando....';
  if (error) return <div>{error}</div>;
  const productFiltered = () => {
    return products.slice(currentPage, currentPage + 8);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 8);
  };
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 8);
  };

  return products.length > 0 && !products.sold ? (
    <>
      <section className='products-section'>
        <h1 className='products-main-title'>PRODUCTOS</h1>
        {/* <SearchBar2 /> */}
        <FilterProducts />

        <ul className='container_productlist' style={{ listStyleType: 'none' }}>
          {productFiltered().map((product, index) => {
            return <CardProduct product={product} key={product.id} />;
          })}
        </ul>
        <div id='pagination-product-container'>
          <button className='prev-btn' onClick={prevPage}>
            <i className='fa-solid fa-angle-left prev-pagination-icon'></i>
            PREV
          </button>
          &nbsp;
          <button className='next-btn' onClick={nextPage}>
            NEXT
            <i className='fa-solid fa-angle-right next-pagination-icon'></i>
          </button>
        </div>
      </section>
    </>
  ) : (
    <div>No hay productos</div>
  );
};

export default ProductList;
