import Footer from '../../components/footer/Footer';
import JustNav from '../../components/justNavHeader/JustNav';
import NewProductForm from '../../components/newProducts/newProductForm';
import './NewProduct.css';
const NewProduct = () => {
  return (
    <>
      <JustNav />
      <div className='new_product'>
        <NewProductForm />
      </div>
      <Footer />
    </>
  );
};
export default NewProduct;
