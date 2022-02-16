import { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../..';

const NewProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
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
        navigate(`/product/${body.data.id}`);
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <form className='form_newproduct' onSubmit={createProduct}>
        <div className='container_input'>
          <label htmlFor='form_product_name'>Nombre</label>
          <input
            className='form_product_name'
            name='form_product_name'
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='container_input'>
          <label htmlFor='form_product_category'>Categoria</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className='form_product_category'
            name='form_product_category'
          >
            <option value='Informática'>Informática</option>
            <option value='Videojuegos'>Videojuegos</option>
            <option value='Música'>Música</option>
            <option value='Moda Vintage'>Moda Vintage</option>
            <option value='Video'>Video</option>
            <option value='Otros'>Otros</option>
          </select>
        </div>
        <div className='container_input'>
          <label htmlFor='form_product_price'>Precio</label>
          <input
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
          <label htmlFor='form_product_description'>Descripcion</label>
          <input
            className='form_product_description'
            name='form_product_description'
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
        <input type='submit' value='Crear producto' />
        {error}
      </form>
    </>
  );
};

export default NewProductForm;
