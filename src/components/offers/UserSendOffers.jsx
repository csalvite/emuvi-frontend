import { useContext, useState } from "react";
import { useEffect } from "react"
import { TokenContext } from "../..";
import { NewRating } from "../ratings/NewRating";
import { DeleteDeniedBookings } from "./DeleteDeniedBookings";
import { DeleteDeniedOffers } from "./DeleteUserSales";

const { REACT_APP_LOCALHOST } = process.env;

// Propuestas de compra ENVIADAS por el usuario
export const UserSendOffers = ({ idUser }) => {

    const [token] = useContext(TokenContext);
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserSendOffers = async () => {
            try {
                const url = `${REACT_APP_LOCALHOST}/users/${idUser.id}/bookings`;
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
                    console.error('Hubo un error en la petición');
                }

                setLoading(false);
            } catch(error) {
                console.error(error.message);
            }
        }

        getUserSendOffers();
    }, [token.token, idUser]);

    if(loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <h3>Ofertas Enviadas</h3>
            <DeleteDeniedBookings idUser={idUser.id} />
            {offers.map((offer, index) => {
                return (
                    <div key={index}>
                        <h4>{offer.product}</h4>
                        <p>Estado de la reserva: <strong>{offer.reserveStatus}</strong></p>
                        <p>Fecha de creación: {new Date(offer.createdAt).toLocaleDateString()}</p>
                        {offer.reserveStatus === 'aceptada' ? <NewRating idUser={offer.sellerId} idProduct={offer.idProduct} /> : ''}
                    </div>
                )
            })}
        </div>
    )
}