import { Link } from "react-router-dom"

export const PublicUserAccess = ({ idUser }) => {
    return (
        <div className="product-user-options">
            <button className="btn">
                <Link to={`/profile/${idUser}/public`}>Ver Perfil</Link>
            </button>
        </div>
    )
}