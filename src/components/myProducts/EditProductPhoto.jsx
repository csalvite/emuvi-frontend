import { useState } from "react";

const { REACT_APP_LOCALHOST } = process.env;

const EditProductPhoto = () => {
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);

   /*  const handleDeleteProductPhoto = async (e) => {
        e.preventDefault();

        const idPhoto = e.target.name;
        
        try {
            const url = `${REACT_APP_LOCALHOST}/products/${product.id}/photos/${idPhoto}`;
            
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
                setPhotos(product.photos);
            } else {
                console.error('Hubo un error al eliminar la foto');
            }

            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    }
 */
    return (
        <div className="edit-product-photos">

        </div>
    );
} 

export { EditProductPhoto};