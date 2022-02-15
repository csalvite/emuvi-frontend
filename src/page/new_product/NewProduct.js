import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import NewProductForm from '../../components/newProducts/newProductForm';

const NewProduct = () => {
  return (
    <>
      <JustNav />
      <div className='new_product'>
        <h1 className='create_product'>Añade un nuevo producto:</h1>
        <NewProductForm />
      </div>
      <Footer />
    </>
  );
};
export default NewProduct;
