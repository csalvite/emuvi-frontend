import { useState } from "react";
import { useContext } from "react";
import { TokenContext } from "../..";
import LoadingComponent from "../loading/loading";

const { REACT_APP_LOCALHOST } = process.env;

export const DeleteStatus = ({ idUser, offers, setOffers, whatIs }) => {

    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState();
    const [state, setState] = useState();

    const handleDeleteOffers = async (e) => {
        e.preventDefault();

        let url;
        if (whatIs === 'booking') {
            url = `${REACT_APP_LOCALHOST}/users/${idUser}/bookings?status=`;
        } else {
            url = `${REACT_APP_LOCALHOST}/users/${idUser}/offers?status=`;
        }
        const option = e.target.elements.state.value;

        try {
            const response = await fetch(url+option, {
                method: 'DELETE',
                headers: {
                    Authorization: token.token,
                }
            });

            setLoading(true);

            if (response.ok) {
                const body = await response.json();
                setState(body.message);
                const arrNew = offers.filter((item) => item.reserveStatus !== option);
                setOffers(arrNew);
            } else {
                console.error('Hubo un error al borrar las ofertas denegadas.');
                setState('No se han podido eliminar las ofertas.')
            }

            setLoading(false);
        } catch (error) {
            console.error(error.message);
            setState('Error al eliminar los productos.')
        }
    }

    if (loading) {
        return <LoadingComponent />
    }

    return (
        <>
            <h5>Eliminar mis ofertas por estado: </h5>
            <form onSubmit={handleDeleteOffers}>
                <select name="state">
                    <option value='pendiente'>Pendientes</option>
                    <option value='denegada'>Denegadas</option>
                    <option value='aceptada'>Aceptadas</option>
                </select>
                <button>Eliminar Por Estado</button>
            </form>
           {state ? state : ''}
        </>
    )
}