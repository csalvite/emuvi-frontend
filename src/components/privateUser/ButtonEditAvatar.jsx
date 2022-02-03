import { useContext, useState } from "react";
import { TokenContext } from "../..";

const { REACT_APP_LOCALHOST } = process.env;

export function ButtonEditAvatar({id}) {
    const [token] = useContext(TokenContext);

    const handleEditAvatar = async(e) => {

        try{
            const avatar = new FormData();
            avatar.append('avatar', e.target.files[0]);

            const response = await fetch(`${REACT_APP_LOCALHOST}/users/${id}/avatar`, {
                method: 'PUT',
                body: avatar,
                headers: {
                    Authorization: token.token,
                },
            });

            if(response.ok) {
                console.log('OK');
                window.location.reload();
            }
        } catch(error){
            console.error(error);
        }
    }

    return <input type='file' name="changeAvatar" onChange={handleEditAvatar} />
}