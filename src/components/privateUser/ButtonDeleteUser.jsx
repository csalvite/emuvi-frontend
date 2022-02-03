import { useContext, useState } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

export function ButtonDeleteUser({id}) {
    const [, setToken] = useContext(TokenContext);
    const [error, setError] = useState();

    /* 
        Quizá quedaría bien mover esto al fondo de la página rodeado en rojo
        tipo GitHub "Danger Zone" mostrando ya el formulario entero y Borrar Usuario
        que sea un boton que hace submit (antes pensaba que era mejor que mostrara un popUp)
    */
    
    const handleOnClick = async(e) => {
        e.preventDefault();

        const userPasswds = {
            password: e.target.elements.password.value,
            confirmPassword: e.target.elements.confirmPassword.value,
        }

        try{
            const response = await fetch(`${REACT_APP_LOCALHOST}/users/${id}`, {
                method: 'DELETE',
                body: JSON.stringify(userPasswds),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if(response.ok) {
                console.log('Usuario Borrado');
                setToken('');
                setError(false);
                console.log(error);
            } else {
                setError(true);
            }
        } catch(error) {
            console.error(error);
            setError(true);
        }
    }

    return (
        <div style={{border: '1px solid black', margin: '1rem', padding: '1rem'}}>
            <h3 style={{color: 'red'}}>Eliminar Usuario</h3>
            <form onSubmit={handleOnClick}>
                <ul>
                    <li>
                        <label>Contraseña: </label>
                        <input type='text' name="password" />
                    </li>
                    <li>
                        <label>Repite Contraseña: </label>
                        <input type='text' name="confirmPassword" />
                    </li>
                    <li>
                        <button className="btn">Borrar Usuario</button>
                    </li>
                </ul>
                {error ? <p>Error al borrar el usuario</p> : ''}
            </form>
        </div>
    )
}