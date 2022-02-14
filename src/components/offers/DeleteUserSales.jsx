import { useState } from "react";
import { useContext } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

export const DeleteDeniedOffers = ({ idUser }) => {

    const [token] = useContext(TokenContext);
    const [loading, setLoading] = useState();
    const [state, setState] = useState();

    const handleDeleteDeniedOffers = async (e) => {
        e.preventDefault();

        const url = `${REACT_APP_LOCALHOST}/users/${idUser}/offers?status=`;
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
                console.log(body);
                setState(body.message);
            } else {
                console.error('Hubo un error al borrar las ofertas denegadas.');
                setState('No se han podido eliminar los productos denegados.')
            }

            setLoading(false);
        } catch (error) {
            console.error(error.message);
            setState('Error al eliminar los productos denegados.')
        }
    }

    if (loading) {
        return <h2>Cargando...</h2>
    }

    return (
        <>
            <h5>Eliminar mis ofertas por estado: </h5>
            <form onSubmit={handleDeleteDeniedOffers}>
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