
function ModifyProfile({privateUser}) {

  const birthday = new Date(privateUser.birthday).toLocaleDateString();

  return (
    <div className='user-profile'>
      <div>
        <p>Fecha de nacimiento: {birthday}</p>
        <p>Email: {privateUser.email}</p>
        <p>Ciudad: {privateUser.city}</p>
        <p>Provincia: {privateUser.province}</p>
        <p>Código Postal: {privateUser.postalCode}</p>
      </div>
    </div>
  )
}

export { ModifyProfile };
