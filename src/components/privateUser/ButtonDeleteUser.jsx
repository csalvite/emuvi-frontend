import { useContext } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

export function ButtonDeleteUser({id}) {
    const [, setToken] = useContext(TokenContext);

    
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
            }
        } catch(error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleOnClick}>
            <input type='text' name="password" />
            <input type='text' name="confirmPassword" />
            <button className="btn">Borrar Usuario</button>
        </form>
    )
}