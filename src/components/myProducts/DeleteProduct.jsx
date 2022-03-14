import { useContext, useState } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

const DeleteProduct = ({idUser, idProduct, products, setProducts}) => {

    const [token] = useContext(TokenContext);
    const [error, setError] = useState(false);

    const handleDeleteProduct = async () => {
        try {
            const url = `${REACT_APP_LOCALHOST}/products/${idProduct}`;

            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            if (response.ok) {
                const newArr = products.filter((item) => item.id !== idProduct);
                setProducts(newArr);
            } else {
                setError(true);
            }    
        } catch (error) {
            setError(true);
        }
    }

    return(
        <i className="fa-solid fa-x delete-product" onClick={handleDeleteProduct} title='Eliminar Producto'></i>
    )
}

export { DeleteProduct };