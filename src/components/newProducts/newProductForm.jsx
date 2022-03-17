import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../..';
import './newProductForm.css';

const NewProductForm = (idProduct) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState();
  const filesInputRef = useRef();
  const [token] = useContext(TokenContext);
  const navigate = useNavigate();
  const { REACT_APP_LOCALHOST } = process.env;

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      setError('');
      const photos = filesInputRef.current.files;
      if (photos.length > 5) {
        throw new Error('solo puedes insertar 5 fotos');
      }
      const payload = new FormData();
      payload.append('name', name);
      payload.append('description', description);
      payload.append('price', price);
      payload.append('category', category);

      for (let i = 0; i < photos.length; i++) {
        payload.append(`photo${i}`, photos[i]);
      }
      const response = await fetch(`${REACT_APP_LOCALHOST}/products/new`, {
        method: 'POST',
        headers: {
          Authorization: token.token,
        },
        body: payload,
      });
      if (response.ok) {
        const body = await response.json();

        console.log(body);
        navigate(`/products/${body.data}`);
      } else {
        const err = await response.json();
        setError(err.message);
        //throw new Error(error.message);
        console.log(err.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className='create_product'>
      <form className='form_newproduct' onSubmit={createProduct}>
        <h1 className='create-product-form-title'>AÑADIR PRODUCTO</h1>
        <div className='container_input'>
          <label htmlFor='form_product_name'></label>
          <input
            type='text'
            className='form_product_name'
            name='form_product_name'
            placeholder='Nombre'
            maxLength={25}
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='container_input'>
          <label htmlFor='form_product_category'></label>
          <select
            placeholder='Categoría'
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className='select_product_category'
            name='form_product_category'
          >
            <option hidden selected>
              Categoría
            </option>
            <option value='informatica'>Informática</option>
            <option value='videojuegos'>Videojuegos</option>
            <option value='musica'>Música</option>
            <option value='modavintage'>Moda-Vintage</option>
            <option value='video'>Vídeo</option>
            <option value='otros'>Otros</option>
          </select>
        </div>
        <div className='container_input'>
          <label htmlFor='form_product_price'></label>
          <input
            type='number'
            maxLength={9}
            placeholder='Máximo 99999.99€'
            className='form_product_price'
            name='form_product_price'
            value={price}
            required
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className='container_input'>
          <label htmlFor='form_product_description'></label>
          <input
            type='text'
            maxLength={250}
            className='form_product_description'
            name='form_product_description'
            placeholder='Descripción'
            value={description}
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <input
          type='file'
          multiple
          ref={filesInputRef}
          accept='.jpg, .png, svg'
        />

        <button className='input_submit'>CREAR PRODUCTO</button>

        {error ? <div style={{color: 'black'}}>{error}</div> : ''}
      </form>
    </div>
  );
};

export default NewProductForm;
