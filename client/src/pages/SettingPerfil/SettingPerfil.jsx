import React from 'react'
import { useSelector } from 'react-redux'

const SettingPerfil = () => {
  const user = useSelector(state => state?.autenticacion?.user)

  return (
    <section className='container' style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
      <h2>Editar Perfil</h2>
      <section className='edit-profile'>
        <img src={user?.picture} alt={user?.firstName} />
      </section>
    </section>
  )
}

export default SettingPerfil
