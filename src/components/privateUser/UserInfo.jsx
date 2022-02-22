import { ButtonDeleteUser } from "./ButtonDeleteUser";
import ChangePassword from "./ChangePassword";
import ModifyEmailAndUsername from "./ModifyEmailAndUsername";
import ModifyUserData from "./ModifyUserData";

function UserInfo({privateUser, show}) {

  const birthday = new Date(privateUser.birthday).toLocaleDateString();

  return show ? (
    <div className='user-profile'>
      <h2>Información del usuario</h2>
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
  ) : ''
}

export { UserInfo };
