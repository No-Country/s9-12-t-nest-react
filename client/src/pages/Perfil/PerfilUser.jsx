import React from 'react'
import './perfil.css'
import { calcularReputacion } from './calculaReputacion'

const PerfilUser = () => {
  const objeto = {
    _id: '64aba27c2415d442b78559c1',
    img: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686264426/PERFIL_GENERAL_hbngdm.jpg',
    email: 'guillermoneculqueo@gmail.com',
    password: '@Guille123',
    firstName: 'guillermo agustin',
    lastName: 'neculqueo',
    contact: '2944396887',
    address: 'argentina, rio negro, ingeniero jcobacci'
  }

  const reputacionUSer = { intercambiosExitosos: 15, intercambiosFallidos: 2, totalPublicaciones: 32, valoracionesPositivas: 15, valoracionesNegativas: 2, devoluciones: 1 }

  return (
    <div className='container principalPerfil p-3 d-flex justify-content-center align-items-center'>
      <div className='card d-flex flex-column justify-content-center align-items-center align-content-center flex-nowrap gap-2' style={{ width: '100%', height: '400px' }}>

        <section className='imgName d-flex flex-row justify-content-center align-items-center align-content-center flex-nowrap gap-3 position-relative' style={{ width: '100%', height: '100px' }}>
          <div className='profile overflow-hidden position-static' style={{ width: '64.837px', height: '64.837px' }}>
            <img src={objeto.img} style={{ width: '100%', height: '100%' }} />
          </div>
          <section className='titulos position-static'>
            <div className='d-flex flex-row justify-content-center align-items-center align-content-center flex-nowrap gap-2'>
              <h2 className='' style={{ color: '#333', fontFamily: 'var(--titulo)', fontSize: '20px', fontWeight: '600' }}>{objeto.firstName}</h2>
              <span className='d-flex flex-row justify-content-center align-items-center align-content-center flex-nowrap' style={{ width: '30.512px', height: '30.512px', borderRadius: '50%', backgroundColor: '#fff', fontSize: '1.5rem', background: '#de1252', color: 'white' }}>
                <ion-icon name='checkmark-sharp' />
              </span>
            </div>

            <span className='text-muted d-block mb-2'>Los Angles</span>
          </section>
        </section>

        <div className=' text-center'>
          <div className='d-flex justify-content-between align-items-center mt-4 px-4'>
            <div className='stats'>
              <h6 className='mb-0'>Reputacion</h6>
              <span>{calcularReputacion(reputacionUSer)}</span>
            </div>
            <div className='stats'>
              <h6 className='mb-0'>Publicaciones</h6>
              <span>{reputacionUSer.totalPublicaciones}</span>
            </div>
            <div className='stats'>
              <h6 className='mb-0'>Exitosos</h6>
              <span>{reputacionUSer.intercambiosExitosos}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilUser
