import { ButtonDeleteUser } from "./ButtonDeleteUser";
import { ButtonEditAvatar } from "./ButtonEditAvatar";
import ChangePassword from "./ChangePassword";
import ModifyEmailAndUsername from "./ModifyEmailAndUsername";
import ModifyUserData from "./ModifyUserData";

function UserInfo({privateUser}) {

  const birthday = new Date(privateUser.birthday).toLocaleDateString();

  return (
    <div className='user-profile'>
      <h2>Información del usuario</h2>
        <ButtonEditAvatar id={privateUser.id} />
        <p>Nombre de usuario: {privateUser.username}</p>
        <p>Email: {privateUser.email}</p>
        <p>Fecha de nacimiento: {birthday}</p>
        <p>Ciudad: {privateUser.city}</p>
        <p>Provincia: {privateUser.province}</p>
        <p>Código Postal: {privateUser.postalCode}</p>
        <ModifyEmailAndUsername privateUser={privateUser} />
        <ChangePassword privateUser={privateUser} />
        <ModifyUserData privateUser={privateUser} />
        <ButtonDeleteUser id={privateUser.id} />
    </div>
  )
}

export { UserInfo };
