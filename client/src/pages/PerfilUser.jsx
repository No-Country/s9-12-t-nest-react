import React from 'react'
import { Stack, Row } from 'react-bootstrap'

const PerfilUser = () => {
  return (
    <div className='container'>
      <Stack gap={3}>
        <Row className='perfil '>
          <div className='rounded-circle overflow-hidden' style={{ width: '60px', height: '60px', backgroundColor: 'white', border: '2px solid #6750a4' }}>
            <img className='w-100 h-100 ' src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1686264426/PERFIL_GENERAL_hbngdm.jpg' alt='perfil guille' />
          </div>
          <div className='perfil__info'>
            <h2>Nombre</h2>
          </div>
          <div className='check'>
            <ion-icon name='checkmark-sharp' />
          </div>
        </Row>
        <h2 border='secondary'>algo</h2>
        <h3 border='secondary'>algo mas</h3>
      </Stack>
    </div>
  )
}

export default PerfilUser
