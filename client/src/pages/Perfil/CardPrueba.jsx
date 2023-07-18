import React, { useState } from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import BotoneraCard from './BotoneraCard'

const CardPrueba = ({ element, funcDeletes }) => {
  const [ishover, setIshover] = useState(false)

  const handleMoueEnter = () => {
    console.log('DENTRO de mouse enter')
    setIshover(true)
  }

  const handleMoueLeave = () => {
    console.log('FUERA de mouse leave')
    setIshover(false)
  }

  return (
    <>
      <div className='cardCustomer' onMouseEnter={handleMoueEnter} onMouseLeave={handleMoueLeave}>
        <div className={`customContent ${ishover ? '' : 'hovered'}`}>
          <div className='back'>
            <div className='back-content'>
              <section className='imgCardPrefil'>
                <img className='imagenCard' src={element.images[0]} alt={element.description} />
              </section>
              <section className='textos'>
                <strong>{element.name}</strong>
                <span>
                  <ion-icon style={{ color: 'red', fontSize: '20px' }} name='location-sharp' />
                  {element.location}
                </span>
              </section>
            </div>
          </div>
          <BotoneraCard element={element} />
        </div>
      </div>
    </>
  )
}

export default CardPrueba
