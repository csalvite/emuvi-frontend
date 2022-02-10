import { useContext } from "react";
import { TokenContext } from "../..";

export const ButtonNewOffer = ({ idUser, idProduct }) => {

    const [token] = useContext(TokenContext);

    const { REACT_APP_LOCALHOST } = process.env;

    const handleNewOffer = async () => {
        const url = `${REACT_APP_LOCALHOST}/offers/${idProduct}/new/${idUser}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: token.token,
                }
            });

            if (response.ok) {
                const body = await response.json();
                console.log(body);
            } else {
                console.error('Ha habido un error en la petición');
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <button className="btn" onClick={handleNewOffer}>Proponer Compra</button>
    )
}