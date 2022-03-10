import { useContext, useState } from "react";
import { TokenContext } from "../..";
import "../popUp/acceptStyle.css";

const { REACT_APP_LOCALHOST } = process.env;

export const FormAcceptOffer = ({ setShowPopUp, idUser, idOffer, reserveStatus }) => {

    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState();

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

                setState(body.message);
            } else {
                if (offerData.street === '' || offerData.city === '' || offerData.time === '' || offerData.date === '') {
                    setState('Debes indicar todos los datos para la reunión con el comprador.');
                }
                
                if (reserveStatus === 'aceptada' || reserveStatus === 'denegada') {
                    setState('Ya has tomado una decisión sobre esta oferta, no puedes cambiar su estado.');
                }

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
        <div id="popup-background" className="accept-offer">
            <form id="form-accept-offer" onSubmit={handleAcceptOffer}>
                <span className="close-popup" onClick={() => setShowPopUp(false)}>X</span>
                <h3>Rellena los datos para reunirte con el comprador</h3>
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
                        <input type='date' name="date" id="date" />
                    </li>
                </ul>
                <button className="btn">Aceptar Oferta</button>
                {state ? <div>{state}</div> : ''}
            </form>
        </div>
    )
}