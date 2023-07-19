import React, { useEffect, useRef, useState } from 'react'
import { calcularReputacion } from './calculaReputacion'
import { useDispatch, useSelector } from 'react-redux'
import { getBarrio } from '../../features/pruebaBarrioSlice/pruebaBarrioSlice'
import Estrellas from './Estrellas'
import { Link } from 'react-router-dom'
import CarruselProductsCard from './CarruselProductsCard/CarruselPruebas'
// import RenderCarrusel from './RenderCarrusel'

const PerfilUser = () => {
  const ubication = useSelector(state => state?.location)
  const barrio = useSelector(state => state?.barrio?.barrio)
  const [calculaRep, setCalculaRep] = useState('')
  const dispatch = useDispatch()
  const lastUbication = useRef(null)
  // console.log('Ubicacion Anterior -->', lastUbication)

  const reputacionUSer = { intercambiosExitosos: 15, intercambiosFallidos: 2, totalPublicaciones: 32, valoracionesPositivas: 15, valoracionesNegativas: 2, devoluciones: 1 }

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
  useEffect(() => {
    setCalculaRep(calcularReputacion(reputacionUSer))
  }, [])

  useEffect(() => {
    if (ubication && ubication !== lastUbication.current) {
      lastUbication.current = ubication
      dispatch(getBarrio(ubication))
    }
  }, [ubication, dispatch])

  return (
    <div className='container principalPerfil p-2 d-flex flex-column justify-content-center align-items-center overflow-hidden mt-3 gap-5' style={{ minWidth: '350px', height: 'auto' }}>

      <div className='card d-flex flex-column justify-content-center align-items-center align-content-center flex-nowrap gap-3' style={{ minWidth: '350px', width: '450px', maxWidth: '600px', height: 'auto', border: 'none' }}>

        {/* head perfil */}
        <section className='imgName d-flex flex-row justify-content-center align-items-center align-content-center flex-nowrap gap-3 position-relative' style={{ width: '100%', height: '70px' }}>
          {/* img Perfil left */}
          <div className='profile overflow-hidden position-static rounded-circle overflow-hidden' style={{ width: '64.837px', height: '64.837px' }}>
            <img src={objeto.img} style={{ width: '100%', height: '100%' }} />
          </div>
          {/* info Perfil right  */}
          <section className='titulos position-static d-flex flex-column justify-content-center align-items-start align-content-center flex-nowrap gap-2'>
            <div className='d-flex flex-row justify-content-start align-items-center align-content-center flex-nowrap gap-3 ' style={{ fontFamily: 'var(--titulo)' }}>
              <h2 className='m-0 p-0' style={{ color: '#333', fontFamily: 'var(--titulo)', fontSize: '20px', fontWeight: '600' }}>{objeto.firstName}</h2>
              <span className='d-flex flex-row justify-content-center align-items-center align-content-center flex-nowrap' style={{ width: '30.512px', height: '30.512px', borderRadius: '50%', fontSize: '1.3rem', backgroundColor: 'var(--background-nav)', color: 'white' }}>
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
        <section className='valoresRep mb-2' style={{ width: '100%', height: 'auto' }}>
          <div className='cajaPAdre d-flex justify-content-center align-items-center rounded-1 p-2  rounded overflow-hidden text-center' style={{ background: 'var(--yellowContenedor)', boxShadow: '2px 2px 4px 0px rgba(222, 18, 82, 0.23)' }}>

            <div className='stats d-flex flex-column justify-content-start align-items-center align-content-start flex-nowrap gap-2' style={{ width: '33%', height: '90px' }}>
              <span className='fw-normal' style={{ fontSize: '32px', fontFamily: 'var(--titulo)' }}>{reputacionUSer.intercambiosExitosos}</span>
              <h3 className='fw-normal' style={{ fontSize: '14px', color: 'var(--textColor3)', fontFamily: 'var(--titulo)' }}>Trueques exitosos</h3>
            </div>
            <div className='' style={{ width: '1px', height: '80px', background: 'var(--lineas)' }} />
            <div className='stats d-flex flex-column justify-content-start align-items-center align-content-start flex-nowrap gap-2' style={{ width: '33%', height: '90px' }}>
              <span className='fw-normal' style={{ fontSize: '32px', fontFamily: 'var(--titulo)' }}>{reputacionUSer.totalPublicaciones}</span>
              <h3 className='fw-normal' style={{ fontSize: '14px', color: 'var(--textColor3)', fontFamily: 'var(--titulo)' }}>Publicaciones</h3>
            </div>
            <div className='' style={{ width: '1px', height: '80px', background: 'var(--lineas)' }} />
            <div className='stats d-flex flex-column justify-content-start align-items-center align-content-start flex-nowrap gap-2' style={{ width: '33%', height: '90px' }}>
              <span className='fw-normal' style={{ fontSize: '32px', fontFamily: 'var(--titulo)' }}>{reputacionUSer.intercambiosFallidos}</span>
              <h3 className='fw-normal' style={{ fontSize: '14px', color: 'var(--textColor3)', fontFamily: 'var(--titulo)' }}>Trueques cancelados</h3>
            </div>
          </div>
        </section>

        {/* info perfil */}
        <section>
          <Link to='/perfil/crudUSer' className='fw-semibold pb-0 border-bottom border-danger' style={{ fontSize: '15.256px', color: 'var(--background-nav)', textDecoration: 'none', paddingBottom: '5px' }}>
            Ver mas datos de este usuario
          </Link>
        </section>
      </div>

      <CarruselProductsCard filtroPor={objeto._id} titulo={objeto.firstName} />

    </div>
  )
}

export default PerfilUser
