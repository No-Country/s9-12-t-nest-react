import React, { useEffect, useState } from 'react'
import './perfil.css'
import { calcularReputacion } from './calculaReputacion'
import { useDispatch, useSelector } from 'react-redux'
import { getBarrio } from '../../features/pruebaBarrioSlice/pruebaBarrioSlice'
import Estrellas from './Estrellas'

const PerfilUser = () => {
  const ubicacion = useSelector(state => state?.location)
  const barrio = useSelector(state => state?.barrio?.barrio)

  const [calculaRep, setCalculaRep] = useState('')

  console.log('BARRIO ->', barrio)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBarrio(ubicacion))
      .then((resp) => {
        // console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        console.log('finally')
      })
  }, [dispatch])

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

  useEffect(() => {
    setCalculaRep(calcularReputacion(reputacionUSer))
  }, [])

  return (
    <div className='container principalPerfil p-3 d-flex justify-content-center align-items-center'>
      <div className='card d-flex flex-column justify-content-center align-items-center align-content-center flex-nowrap gap-2' style={{ width: '100%', height: 'auto' }}>
        {/* head perfil */}
        <section className='imgName d-flex flex-row justify-content-center align-items-center align-content-center flex-nowrap gap-3 position-relative' style={{ width: '100%', height: '100px' }}>
          {/* img Perfil left */}
          <div className='profile overflow-hidden position-static rounded-circle overflow-hidden' style={{ width: '64.837px', height: '64.837px' }}>
            <img src={objeto.img} style={{ width: '100%', height: '100%' }} />
          </div>
          {/* info Perfil right  */}
          <section className='titulos position-static d-flex flex-column justify-content-center align-items-start align-content-center flex-nowrap gap-2'>
            <div className='d-flex flex-row justify-content-start align-items-center align-content-center flex-nowrap gap-2 ' style={{ fontFamily: 'var(--titulo)' }}>
              <h2 className='m-0 p-0' style={{ color: '#333', fontFamily: 'var(--titulo)', fontSize: '20px', fontWeight: '600' }}>{objeto.firstName}</h2>
              <span className='d-flex flex-row justify-content-center align-items-center align-content-center flex-nowrap' style={{ width: '30.512px', height: '30.512px', borderRadius: '50%', fontSize: '1.5rem', backgroundColor: 'var(--background-nav)', color: 'white' }}>
                <ion-icon name='checkmark-sharp' />
              </span>
            </div>

            <div className='d-flex flex-row justify-content-start align-items-center align-content-center flex-nowrap gap-1' style={{ width: '100%', height: 'auto', fontSize: '20px' }}>
              {barrio === undefined
                ? (
                  <>
                    <ion-icon name='location-sharp' style={{ color: 'var(--background-nav)' }} />
                    <h3 className='text-muted d-block p-0 m-0' style={{ fontSize: '14px' }}>
                      Ubicación
                    </h3>
                  </>
                  )
                : (
                  <>
                    <ion-icon name='location-sharp' style={{ color: 'var(--background-nav)' }} />
                    <h3 className='text-muted d-block p-0 m-0' style={{ fontSize: '14px' }}>
                      {barrio}
                    </h3>
                  </>
                  )}
            </div>
          </section>
        </section>

        {/* Estrellas valoracion */}
        <Estrellas number={calculaRep} />
        {/* Calificacion Usuario  */}
        <div className=' text-center'>
          <div className='d-flex justify-content-between align-items-center mt-4 px-4'>
            <div className='stats'>
              <span>{calculaRep}</span>
              <h3 className='mb-0'>Reputacion</h3>
            </div>
            <div className='stats'>
              <span>{reputacionUSer.totalPublicaciones}</span>
              <h3 className='mb-0'>Publicaciones</h3>
            </div>
            <div className='stats'>
              <span>{reputacionUSer.intercambiosExitosos}</span>
              <h3 className='mb-0'>Exitosos</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilUser
