import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { TokenContext } from "../..";

const {REACT_APP_LOCALHOST} = process.env;

const ChangePassword = ({privateUser}) => {
    const [token, setToken] = useContext(TokenContext);
    const [error, setError] = useState(false);

    const handleChangePassword = async(e) => {
        e.preventDefault();

        const passwords = {
            oldPassword: e.target.elements.oldPasswd.value,
            newPassword: e.target.elements.newPasswd.value,
        }

        const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}/password`
        try{
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(passwords),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                },
            });

            if(response.ok){
                setToken('');
                window.location.reload();
            } else {
                console.error('Ha habido un error al cambiar la contraseña');
                setError(true);
            }

        } catch(error){
            console.error(error.message);
            setError(true);
        }
    }

    return (
        <div>
            <h3>Cambiar Contraseña</h3>
            <form onSubmit={handleChangePassword}>
                <label>Indica la antigua contraseña: </label>
                <input type='password' name="oldPasswd" required />
                <label>Indica la nueva contraseña: </label>
                <input type='password' name="newPasswd" required />
                <button>Cambiar Contraseña</button>
            </form>
            {error ? <div>Error al cambiar la contraseña, intentalo de nuevo</div> : ''}
        </div>
    );

}

export default ChangePassword;