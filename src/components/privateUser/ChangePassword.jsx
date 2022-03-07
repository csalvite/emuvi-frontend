import { useContext, useState } from "react";
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
                <ul>
                    <li>
                        <label>Indica la antigua contraseña: </label>
                    </li>
                    <li>
                        <input type='password' name="oldPasswd" autoComplete="on" required />
                    </li>
                    <li>
                        <label>Indica la nueva contraseña: </label>
                    </li>
                    <li>
                        <input type='password' name="newPasswd" autoComplete="on" required />
                    </li>
                    <li>
                        <button className="btn">Cambiar Contraseña</button>
                    </li>
                </ul>
            </form>
            {error ? <div>Error al cambiar la contraseña, intentalo de nuevo</div> : ''}
        </div>
    );

}

export default ChangePassword;