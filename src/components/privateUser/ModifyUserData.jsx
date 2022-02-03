import { useContext, useState } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

const ModifyUserData = ({privateUser}) => {

    const [token] = useContext(TokenContext);
    const [status, setStatus] = useState();

    const handleModifyUserData = async (e) => {
        e.preventDefault();

        const userData = {
            name: e.target.elements.name.value || privateUser.name,
            lastname: e.target.elements.lastname.value || privateUser.lastname,
            biography: e.target.elements.biography.value || privateUser.biography,
            birthday: e.target.elements.birthday.value || privateUser.birthday,
            street: e.target.elements.street.value || privateUser.street,
            province: e.target.elements.province.value || privateUser.province,
            city: e.target.elements.city.value || privateUser.city,
            postalCode: e.target.elements.postalCode.value || privateUser.postalCode,
        }
        
        const url = `${REACT_APP_LOCALHOST}/users/${privateUser.id}/info`;

        try{
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token.token,
                }
            });

            if (response.ok) {
                setStatus('Datos del usuario modificados con éxito');
            } else {
                setStatus('No se han podido modificar los datos del usuario');
            }

        } catch(error) {
            console.error(error.message);
        }
    }

    const userBirthday = new Date(privateUser.birthday).toLocaleDateString();

    return (
        <div>
            <h3>Modificar Información Personal</h3>
            <form onSubmit={handleModifyUserData}>
                <ul>
                    <li>
                        <label htmlFor="name">Nombre: </label>
                        <input type='text' name="name" id="name" placeholder={privateUser.name} />
                    </li>
                    <li>
                        <label htmlFor="lastname">Apellidos: </label>
                        <input type='text' name="lastname" id="lastname" placeholder={privateUser.lastname} />
                    </li>
                    <li>
                        <label htmlFor="biography">Biografía: </label>
                        <textarea type='text' name="biography" id="biography" placeholder={privateUser.biography} />
                    </li>
                    <li>
                        <label htmlFor="birthday">Fecha de nacimiento: (actualmente {userBirthday}) </label>
                        <input type='date' name="birthday" id="birthday" />
                    </li>
                    <li>
                        <label htmlFor="street">Calle: </label>
                        <input type='text' name="street" id="street" placeholder={privateUser.street} />
                    </li>
                    <li>
                        <label htmlFor="city">Ciudad: </label>
                        <input type='text' name="city" id="city" placeholder={privateUser.city} />
                    </li>
                    <li>
                        <label htmlFor="postalCode">Código Postal: </label>
                        <input type='text' name="postalCode" id="postalCode" placeholder={privateUser.postalCode} />
                    </li>
                    <li>
                        <label htmlFor="province">Provincia / Estado: </label>
                        <input type='text' name="province" id="province" placeholder={privateUser.province} />
                    </li>
                    <li>
                        <button>Modificar</button>
                    </li>
                </ul>
            </form>
            <div>{status}</div>
        </div>
    )
}

export default ModifyUserData;