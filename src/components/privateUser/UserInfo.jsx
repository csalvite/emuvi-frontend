import { ButtonDeleteUser } from "./ButtonDeleteUser";
import { ButtonEditAvatar } from "./ButtonEditAvatar";
import ChangePassword from "./ChangePassword";
import ModifyEmailAndUsername from "./ModifyEmailAndUsername";
import ModifyUserData from "./ModifyUserData";
import './UserInfo.css';

function UserInfo({privateUser}) {

  const birthday = new Date(privateUser.birthday).toLocaleDateString();

  return (
    <div className='user-profile'>
      <h2>Información del usuario</h2>
        <div className="user-info">  
          <ButtonEditAvatar id={privateUser.id} />
          <div>
            <p><strong>Nombre de usuario:</strong> {privateUser.username}</p>
            <p><strong>Email:</strong> {privateUser.email}</p>
            <p><strong>Fecha de nacimiento:</strong> {birthday}</p>
            <p><strong>Ciudad:</strong> {privateUser.city}</p>
            <p><strong>Provincia:</strong> {privateUser.province}</p>
            <p><strong>Código Postal:</strong> {privateUser.postalCode}</p> 
          </div>
        </div>
        <ModifyEmailAndUsername privateUser={privateUser} />
        <ChangePassword privateUser={privateUser} />
        <ModifyUserData privateUser={privateUser} />
        <ButtonDeleteUser id={privateUser.id} />
    </div>
  )
}

export { UserInfo };
