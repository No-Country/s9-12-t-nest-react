import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import OfertaRecibidaCards from './OfertaRecibidaCards'
import './OfertaRecibida.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
// import PerfilUsuario from './Perfil/PerfilUsuarioConsumeAgustinLorenzi';
import Swal from 'sweetalert2'
import OfertaAceptada from './OfertaAceptada'

import PerfilUsuario from './Perfil/PerfilUsuarioConsumeAgustinLorenzi'
import { useDispatch, useSelector } from 'react-redux'
import { getOfferById } from '../features/offers/offerSlice'
import CardOffer from '../components/cardOffers/cardOffer'

const array = [
  { imagen: 'imagen1', titulo: 'producto1', ubicacion: 'ubicacion1' },
  { imagen: 'imagen2', titulo: 'producto2', ubicacion: 'ubicacion2' }
  // { imagen: "imagen3", titulo: "producto3", ubicacion: "ubicacion3" }

]

const OfertaRecibida = () => {
  const offerProduct = useSelector((state) => state?.offer?.offerById)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { offerId } = useParams()
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getOfferById({ token, id: offerId }))
  }, [])

  useEffect(() => {

  }, [offerProduct])

  function confirmacion () {
    Swal.fire({
      html: '<h4>¿Aceptás la oferta recibida?.</h4> <br/>   <p>Confirmá si aceptás la oferta de trueque que recibiste de tu contraparte.<br/> Podés contactarte antes para asegurarte de que la oferta sea válida.</p>',
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'Aceptar',
      customClass: {
        confirmButton: 'custom-button',
        text: 'texto',
        cancelButton: 'custom-button2'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/oferta-aceptada')
      }
    })
  }

  return (

    <div>

      <div>
        <h3 className='titulo-h3'>¡Recibiste una oferta por tu articulo!.</h3>
        <div className='controlar-cards-recibida'>
          {/* <Card className='cards-recibida'>

            <Card.Img variant='top' src='' />

            <Card.Body>
              <Card.Title className='prod-titulo'>Articulo seleccionado</Card.Title>

            </Card.Body>
          </Card> */}

          <div>
            <CardOffer products={[offerProduct?.offerTargetItem]} />
          </div>

        </div>

        <PerfilUsuario />
        <hr className='hr' />

        <h3 className='titulo-h3'>Te ofrecieron:</h3>

        <div className='ubicar'>
          {offerProduct?.offeredItems?.map((products, i) => (
            <div className='cards-container' key={i}>
              <CardOffer products={[products]} />
            </div>
          ))}
        </div>

        {/* <PerfilUsuario /> */}
        <hr className='hr' />

        <div className='contactar-whatsapp'>
          <img src='/images/WhatsApp 1.png' alt='' />
          <Link to='' className='fw-semibold pb-0 border-bottom border-danger' style={{ fontSize: '15.256px', color: 'var(--background-nav)', textDecoration: 'none', paddingBottom: '5px' }}>
            Contactar al usuario via WhatsApp.
          </Link>

        </div>
        <div className='botones'>
          <button className='ofertar' onClick={confirmacion}>Aceptar Oferta</button>

        </div>

        <div className='botones'>
          <button className='ofertar2'>Rechazar Oferta</button>

        </div>

      </div>

    </div>
  )
}

export default OfertaRecibida
