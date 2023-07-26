import React, { useEffect, useRef } from 'react'
import CardMiniPerfil from '../Perfil/CardMiniPerfil/CardMiniPerfil'
import UserBannerStatistics from '../Perfil/UserBannerStatistics/UserBannerStatistics'
import Stars from '../Perfil/Stars/Stars'
import { getBarrio } from '../../features/pruebaBarrioSlice/pruebaBarrioSlice'
import { useDispatch, useSelector } from 'react-redux'

const CalificacionesRecibidas = () => {
  const ubication = useSelector(state => state?.location)
  const user = useSelector(state => state?.autenticacion?.user)
  const barrio = useSelector(state => state?.barrio?.barrio)

  const dispatch = useDispatch()
  const lastUbication = useRef(null)

  useEffect(() => {
    if (ubication && ubication !== lastUbication.current) {
      lastUbication.current = ubication
      dispatch(getBarrio(ubication))
    }
  }, [ubication, dispatch])

  return (
    <div className='container principalPerfil p-2 d-flex flex-column justify-content-center align-items-center overflow-hidden mt-3 gap-5'>

      <div className='card d-flex flex-column justify-content-center align-items-center align-content-center flex-nowrap gap-3' style={{ border: 'none' }}>

        {/* head perfil */}
        <CardMiniPerfil usuario={user} barrio={barrio} />

        {/* Estrellas valoracion */}
        <Stars />

        {/* Calificacion Usuario  */}
        <UserBannerStatistics />

      </div>
    </div>
  )
}

export default CalificacionesRecibidas
