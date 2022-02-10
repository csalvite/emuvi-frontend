import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../..";
import { FormAcceptOffer } from "./FormAcceptOffer";
import { DeclineOffer } from "./DeclineOffer";
import { DeleteDeniedOffers } from "./DeleteDeniedOffers";

const { REACT_APP_LOCALHOST } = process.env;

// Ofertas recibidas por el usuario
export const UserReceivedOffers = ({ idUser }) => {

    const [token] = useContext(TokenContext);
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        const getUserReceivedOffers = async() => {

            try {
                const url = `${REACT_APP_LOCALHOST}/users/${idUser}/offers`;

                const response = await fetch(url, {
                    headers: {
                        Authorization: token.token,
                    }
                });

                setLoading(true);

                if (response.ok) {
                    const body = await response.json();
                    setOffers(body.data);
                } else {
                    console.error('Hubo un error al cargar las ofertas recibidas.');
                }

                setLoading(false);
            } catch (error) {
                console.error(error.message);
            }
        }

        getUserReceivedOffers();
    }, [token.token, idUser]);

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <h3>Ofertas Recibidas</h3>
            <DeleteDeniedOffers idUser={idUser} />
            {offers.map((offer, index) => {
                return (
                    <div key={index}>
                        <h4>{offer.product}</h4>
                        <p>Estado de reserva: <strong>{offer.reserveStatus}</strong></p>
                        <p>Fecha de creación: {new Date(offer.createdAt).toLocaleDateString()}</p>
                        {offer.reserveStatus === 'pendiente' ? (
                            <>
                                <button className="btn" onClick={() => setShowPopUp(true)}>Aceptar Oferta</button>
                                <DeclineOffer idUser={idUser} idOffer={offer.id} reserveStatus={offer.reserveStatus} />
                                {showPopUp && <FormAcceptOffer setShowPopUp={setShowPopUp} idUser={idUser} idOffer={offer.id} reserveStatus={offer.reserveStatus} />}
                            </>
                        ) : ''}
                    </div>
                )
            })}
        </div>
    )
}