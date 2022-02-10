import { useState } from "react";
import { useContext } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

export const DeleteDeniedBookings = ({ idUser }) => {

    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState();
    const [state, setState] = useState();

    const handleDeleteDeniedBookings = async () => {

        const url = `${REACT_APP_LOCALHOST}/users/${idUser}/bookings`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                const body = await response.json();
                setState(body.message);
            } else {
                console.error('Hubo un error al borrar las ofertas denegadas.');
                setState('No se han podido eliminar los productos denegados.')
            }
                           
            setLoading(false);
        } catch (error) {
            setState('Error al eliminar los productos denegados.')
            console.error(error.message);
        }
    }

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <>
           <button className="btn" onClick={handleDeleteDeniedBookings}>Eliminar Mis Reservas Denegadas</button>     
           {state ? state : ''}
        </>
    )
}