import { useContext, useState } from "react";
import { TokenContext } from "../..";

const {REACT_APP_LOCALHOST} = process.env;


const ModifyEmailAndUsername = ({privateUser}) => {
   const [token, setToken] = useContext(TokenContext);
    const [error, setError] = useState(false);

    const handleChangeUser = async(e) => {
        e.preventDefault();

        const modifyUser = {
            newUsername: e.target.elements.oldPasswd.value,
            newPassword: e.target.elements.newPasswd.value,
        }

        const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}`
        try{
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(modifyUser),
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
            <h3>Información de Usuario</h3>
            <form onSubmit={handleChangeUser}>
                <label>Nuevo nombre de usuario: </label>
                <input type='text' name='username' />
            </form>
        </div>
    )
}

export default ModifyEmailAndUsername;