import { useState } from "react";
import { useContext } from "react";
import { TokenContext } from "../..";
import LoadingComponent from "../loading/loading";

const { REACT_APP_LOCALHOST } = process.env;

const AddProductPhoto = ({ productId }) => {
    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState();

    const handleAddProductPhoto = async (e) => {
        e.preventDefault();

        const idPhoto = e.target.name;
        
        try {
            const url = `${REACT_APP_LOCALHOST}/products/${productId}/photos`;
            
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                setState('Foto de producto eliminada!');
               // setPhotos(product.photos);
            } else {
                console.error('Hubo un error al eliminar la foto');
            }

            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    if (loading) {
        return (
            <LoadingComponent />
        )
    }

    return (
        <form>
            <input type='file' name='productPhoto' />
        </form>
    )
}

export { AddProductPhoto }