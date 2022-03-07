import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../..";
import { FormAcceptOffer } from "./FormAcceptOffer";
import { DeclineOffer } from "./DeclineOffer";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { DeleteStatus } from "./DeleteStatus";

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
                const url = `${REACT_APP_LOCALHOST}/users/${idUser.id}/offers`;

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
    }, [token.token, idUser, setOffers]);

    const dropIds = async (e) => {
        e.preventDefault();
        
        console.log(e.target.name);
        const url = `${REACT_APP_LOCALHOST}/users/${idUser.id}/offers?id=`;
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

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <h3>Ofertas Recibidas</h3>
            <DeleteStatus idUser={idUser.id} offers={offers} setOffers={setOffers} />
            <FormGroup>
                {offers.map((offer, index) => {
                    return (
                        <div key={index}>
                            <h4>El usuario {offer.buyerName} te propone la compra de {offer.product} </h4>
                            <FormControlLabel control={<Checkbox onChange={dropIds} name={`${offer.id}`} />} label={`Eliminar oferta en estado ${offer.reserveStatus}`} />
                            <p>Estado de reserva: <strong>{offer.reserveStatus}</strong></p>
                            <p>Fecha de creación: {new Date(offer.createdAt).toLocaleDateString()}</p>
                            {offer.reserveStatus === 'pendiente' ? (
                                <>
                                    <button className="btn" onClick={() => setShowPopUp(true)}>Aceptar Oferta</button>
                                    <DeclineOffer idUser={idUser.id} idOffer={offer.id} reserveStatus={offer.reserveStatus} />
                                    {showPopUp && <FormAcceptOffer setShowPopUp={setShowPopUp} idUser={idUser.id} idOffer={offer.id} reserveStatus={offer.reserveStatus} />}
                                </>
                            ) : ''}
                        </div>
                    )
                })}    
            </FormGroup>        
        </div>
    )
}