import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import BotoneraCard from './BotoneraCard'
import BotoneraDelete from './BotoneraDelete/BotoneraDelete'

const CardPrueba = ({ element, funcDeletes }) => {
  return (
    <>
      <div className='cardCustomer'>
        <div className='customContent'>
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
        </div>
      </div>
    </>
  )
}

export default CardPrueba
