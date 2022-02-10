import { useContext, useState } from "react";
import { TokenContext } from "../..";

export const DeclineOffer = ({ idUser, idOffer, reserveStatus }) => {

    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState();

    const { REACT_APP_LOCALHOST } = process.env;

    const handleDeclineOffer = async (e) => {

        try {
            const url = `${REACT_APP_LOCALHOST}/users/${idUser}/offers/${idOffer}/deny`;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                const body = await response.json();
                setState(body.message);
                
            } else {
                if (reserveStatus === 'aceptada' || reserveStatus === 'denegada') {
                    setState('Ya has tomado una decisión sobre esta oferta, no puedes cambiar su estado.');
                }
                console.error('Hubo un error al declinar la oferta');
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
        <>
            <button className="btn" onClick={handleDeclineOffer}>Declinar Oferta</button>
            {state ? state : ''}
        </>
    )
}