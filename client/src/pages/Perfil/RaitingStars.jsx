import React, { useState } from 'react'

const RaitingStars = ({ raiting }) => {
  const total = 5
  const ratingReal = raiting / 2
  const starIconLleno = <ion-icon name='star-sharp' />
  const starIconMedioLleno = <ion-icon name='star-half-sharp' />
  const starIconVacio = <ion-icon name='star-outline' />

  const [estrellas, setEstrellas] = useState([])

  const array = []

  if (ratingReal % 2 === 0) {
    for (let index = 0; index < raiting; index++) {
      array.push(starIconLleno)
    }
    for (let index = 0; index < (total - ratingReal); index++) {
      array.push(starIconVacio)
    }
    setEstrellas(array)
  }

  return (
    <div className='d-flex flex-row justify-content-center align-items-center align-content-center flex-nowrap gap-1' style={{ width: '100%', height: '50px', fontSize: '2rem' }}>
      {
      ratingReal % 2 === 0
      }

    </div>
  )
}

export default RaitingStars
