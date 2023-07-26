import CardMiniPerfil from '../Perfil/CardMiniPerfil/CardMiniPerfil'
import UserBannerStatistics from '../Perfil/UserBannerStatistics/UserBannerStatistics'
import Stars from '../Perfil/Stars/Stars'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import './calificacionesRecibidas.css'

const CalificacionesRecibidas = () => {
  const usuario = useSelector(state => state?.autenticacion?.user)
  const reputacion = useSelector(state => state?.reputacion)

  const dispatch = useDispatch()

  const [valoracionPositiva, setValoracionPositiva] = useState(true)
  const [valoracionNegativa, setValoracionNegativa] = useState(false)
  const [valoracionCancelada, setValoracionCancelada] = useState(false)

  const renderValoracionPositiva = () => {
    setValoracionPositiva(true)
    setValoracionNegativa(false)
    setValoracionCancelada(false)
  }
  const renderValoracionesNegativa = () => {
    setValoracionNegativa(true)
    setValoracionPositiva(false)
    setValoracionCancelada(false)
  }

  const renderValoracionCancelada = () => {
    setValoracionCancelada(true)
    setValoracionNegativa(false)
    setValoracionPositiva(false)
  }

  return (
    <div className='container principalPerfil p-2 d-flex flex-column justify-content-center align-items-center overflow-hidden mt-3 gap-5'>

      <div className='card d-flex flex-column justify-content-center align-items-center align-content-center flex-nowrap gap-3' style={{ border: 'none' }}>

        {/* head perfil */}
        <CardMiniPerfil />

        {/* Estrellas valoracion */}
        <Stars />

        {/* Calificacion Usuario  */}
        <UserBannerStatistics />

      </div>

      <section className='contCalificaciones d-flex flex-column justify-content-center align-items-center align-content-center flex-nowrap gap-3'>
        <h2 className='titluloCalificacion'>calificaciones del usuario</h2>
        <div className='navCalificacionUser'>
          <section className='containButton'>
            <button className='buttonCalificaciones' onClick={renderValoracionPositiva}>
              Positivas
            </button>
            {valoracionPositiva ? <div style={{ width: '100%', height: '2px', borderRadius: '30px', backgroundColor: 'var(--background-naClaro' }} /> : null}
          </section>

          <section className='containButton'>
            <button className='buttonCalificaciones' onClick={renderValoracionesNegativa}>
              Negativas
            </button>
            {valoracionNegativa ? <div style={{ width: '100%', height: '2px', borderRadius: '30px', backgroundColor: 'var(--background-naClaro' }} /> : null}
          </section>

          <section className='containButton'>
            <button className='buttonCalificaciones' onClick={renderValoracionCancelada}>
              Canceladas
            </button>
            {valoracionCancelada ? <div style={{ width: '100%', height: '2px', borderRadius: '30px', backgroundColor: 'var(--background-naClaro' }} /> : null}
          </section>
        </div>

        <section className='ContRenderCalificaciones'>
          <div className='cardCalificaciones '>
            <h2 className='cardCalificacionesh2'>descripcion</h2>
            <div className='contFooterCardCalificaciones'>
              <p className='cardNameUser'>nombre usuario </p>
              <p className='cardFecha'>fecha</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default CalificacionesRecibidas
