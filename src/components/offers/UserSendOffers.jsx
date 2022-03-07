import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useContext, useState } from "react";
import { useEffect } from "react"
import { TokenContext } from "../..";
import LoadingComponent from "../loading/loading";
import { NewRating } from "../ratings/NewRating";
import { DeleteStatus } from "./DeleteStatus";

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
    }, [token.token, idUser, setOffers]);

    const dropIds = async (e) => {
        e.preventDefault();
        
        console.log(e.target.name);
        const url = `${REACT_APP_LOCALHOST}/users/${idUser.id}/bookings?id=`;
        const option = e.target.name;

        try {
            const response = await fetch(url+option, {
                method: 'DELETE',
                headers: {
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                const arrNew = offers.filter((item) => item.id !== Number(option));
                setOffers(arrNew);
            } else {
                console.error('Hubo un error al borrar las ofertas denegadas.');
            }

            setLoading(false);
        } catch (error) {
            console.error(error.message);
        }
    }

    if(loading) {
        return <LoadingComponent />
    }

    return (
        <div>
            <h3>Ofertas Enviadas</h3>
            <DeleteStatus idUser={idUser.id} offers={offers} setOffers={setOffers} whatIs='booking' />
            {/* {offers?.map((offer) => {
                return (
                    <div key={offer.id}>
                        <h4>{offer.product}</h4>
                        <p>Estado de la reserva: <strong>{offer.reserveStatus}</strong></p>
                        <p>Fecha de creación: {new Date(offer.createdAt).toLocaleDateString()}</p>
                        {offer.reserveStatus === 'aceptada' ? <NewRating idUser={offer.sellerId} idProduct={offer.idProduct} /> : ''}
                    </div>
                )
            })} */}
            <FormGroup>
                {offers.map((offer) => {
                    return (
                        <div key={offer.id}>
                            <FormControlLabel control={<Checkbox onChange={dropIds} name={`${offer.id}`} />} label={`Eliminar ${offer.product} en estado ${offer.reserveStatus}`} />
                            <p>Estado de reserva: <strong>{offer.reserveStatus}</strong></p>
                            <p>Fecha de creación: {new Date(offer.createdAt).toLocaleDateString()}</p>
                            {offer.reserveStatus === 'aceptada' ? <NewRating idUser={offer.sellerId} idProduct={offer.idProduct} /> : ''}
                        </div>
                    )
                })}    
            </FormGroup>       
        </div>
    )
}