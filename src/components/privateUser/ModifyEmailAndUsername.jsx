import { useContext, useState } from "react";
import { TokenContext } from "../..";

const {REACT_APP_LOCALHOST} = process.env;


const ModifyEmailAndUsername = ({privateUser}) => {
   const [token] = useContext(TokenContext);
    const [error, setError] = useState(false);

    const handleChangeUser = async(e) => {
        e.preventDefault();

        const modifyUser = {
            newUsername: e.target.elements.username.value,
            newEmail: e.target.elements.email.value,
        }

        const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}`;
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
                const body = await response.json();

                console.log(body);
                console.log('Usuario modificado');
                window.location.reload();
            } else {
                console.error('No se ha podido cambiar el nombre de usuario o email');
                setError(true);
            }

        } catch(error){
            console.error(error.message);
            setError(true);
        }
    }

    return (
        <div>
            <h3>Editar nombre de usuario o email</h3>
            <form onSubmit={handleChangeUser}>
                <ul>
                    <li>
                        <label>Nuevo nombre de usuario: </label>
                        <input type='text' name='username' placeholder={privateUser.username}/>
                    </li>
                    <li>
                        <label>Cambio de email: </label>
                        <input type="email" name="email" placeholder={privateUser.email} />
                    </li>
                    <li>
                        <button>Modificar</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default ModifyEmailAndUsername;