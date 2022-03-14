import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react"
import { TokenContext } from "../..";
import LoadingComponent from "../loading/loading";
import CardProduct from "../products/CardProduct";
import { DeleteProduct } from "./DeleteProduct";
import { EditProduct } from "./EditProduct";
import './MyProducts.css';

const { REACT_APP_LOCALHOST } = process.env;

export const MyProducts = ({ privateUser }) => {

    const [token] = useContext(TokenContext);
    const [products, setProducts] = useState([]);
    const [state, setState] = useState();
    const [editProduct, setEditProduct] = useState();
    const [showPopUp, setShowPopUp] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMyProducts = async () => {
            try {
                const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}/products`;
                const response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token.token,
                    }
                });

                setLoading(true);

                if (response.ok) {
                    const body = await response.json();
                    setProducts(body.products);
                    setState('Productos del usuario devueltos correctamente');
                } else {
                    setState('No se han encontrado productos publicados por este usuario.')
                }

                setLoading(false);

            } catch(error) {
                console.error(error.message);
            }
        }

        getMyProducts();
    }, [token.token, privateUser.id, setProducts]);

    if (loading) {
        return <LoadingComponent />
    }

    return (
        <div className="my-products">
            <h2>Mis Productos Publicados</h2>
            <div className="list-my-products">
            {products ? products?.map((product) => {
                return (
                    <div key={product.id} 
                        onClick={() => setEditProduct({
                                id: product.id, 
                                name: product.name, 
                                category: product.category,
                                price: product.price, 
                                description: product.description, 
                                photos: product.photos,
                            })}>
                        <CardProduct 
                            setShowPopUp={setShowPopUp} 
                            product={product}
                            products={products}
                            setProducts={setProducts}
                            myProduct={true}
                            />
                    </div>
                )
            }) : state}
            </div>
                {showPopUp && <EditProduct
                                    setShowPopUp={setShowPopUp} 
                                    idUser={privateUser.id} 
                                    editProduct={editProduct}
                                />}
        </div>
    )
}