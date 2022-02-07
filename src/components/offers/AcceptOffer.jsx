import { useContext, useState } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

export const AcceptOffer = ({ idUser, idOffer }) => {

    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState(false);


    const handleAcceptOffer = async (e) => {
        e.preventDefault();

        const offerData = {
            street: e.target.elements.street.value,
            city: e.target.elements.city.value,
            time: e.target.elements.time.value,
            date: e.target.elements.date.value,
        }
        
        try {
            const url = `${REACT_APP_LOCALHOST}/users/${idUser}/offers/${idOffer}/accept`;
            
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(offerData),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                const body = await response.json();

                console.log(body);
            } else {
                console.error('Hubo un error al aceptar la oferta');
            }

            setLoading(false);

        } catch (error) {
            console.error(error.message);
        }
    }

    if (loading) {
        return <h2>Cargando...</h2>
    }


    return (
        <div className="accept-offer">
            <form onSubmit={handleAcceptOffer}>
                <h4>Rellena los datos para reunirte con el comprador</h4>
                <ul>
                    <li>
                        <label htmlFor="street">Calle: </label>
                        <input type='text' name='street' id="street" />
                    </li>
                    <li>
                        <label htmlFor="city">Ciudad: </label>
                        <input type='text' name='city' id="city" />
                    </li>
                    <li>
                        <label htmlFor="time">Hora: </label>
                        <input type='text' name='time' id="time" />
                    </li>
                    <li>
                        <label htmlFor="date">Fecha: </label>
                        <input type='text' name='date' id="date" />
                    </li>
                </ul>
                <button className="btn">Aceptar Oferta</button>
            </form>
        </div>
    )
}