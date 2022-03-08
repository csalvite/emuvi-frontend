import { useNavigate } from "react-router-dom"

export const PublicUserAccess = ({ idUser }) => {
    let navigate = useNavigate();

    return (
        <i className="fa-solid fa-user user" title="Perfil del vendedor" onClick={() => navigate(`/profile/${idUser}/public`)}></i>
    )
}