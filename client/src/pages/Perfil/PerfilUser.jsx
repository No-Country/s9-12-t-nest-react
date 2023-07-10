import React from 'react'
import './perfil.css'
import { calcularReputacion } from './calculaReputacion'

const PerfilUser = () => {
  const objeto = { img: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1686264426/PERFIL_GENERAL_hbngdm.jpg', name: 'guillermo agustin' }

  const reputacionUSer = { intercambiosExitosos: 15, intercambiosFallidos: 2, totalPublicaciones: 32, valoracionesPositivas: 15, valoracionesNegativas: 2, devoluciones: 1 }

  return (
    <div className='container w-100 p-3 d-flex justify-content-center align-items-center'>
      <div className='card'>
        <div className='user text-center'>
          <div className='profile'>
            <img src={objeto.img} className='rounded-circle' width='80' />
          </div>
        </div>
        <div className=' mt-5 text-center'>
          <section className='titulos'>
            <h4 className='mb-0'>{objeto.name}</h4>
            <span className='text-muted d-block mb-2'>Los Angles</span>

          </section>
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
