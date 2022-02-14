import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../..";
import { FormAcceptOffer } from "./FormAcceptOffer";
import { DeclineOffer } from "./DeclineOffer";
import { DeleteDeniedOffers } from "./DeleteUserSales";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

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

    const dropIds = (e) => {
        e.preventDefault();
        
        console.log(e.target.name);
    }

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <div>
            <h3>Ofertas Recibidas</h3>
            <DeleteDeniedOffers idUser={idUser} />
            <FormGroup>
                {offers.map((offer, index) => {
                    return (
                        <div key={index}>
                            <FormControlLabel control={<Checkbox onChange={dropIds} name={`${offer.id}`} />} label={`Eliminar ${offer.product} en estado ${offer.reserveStatus}`} />
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
            </FormGroup>        
        </div>
    )
}