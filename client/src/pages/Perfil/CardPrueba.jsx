import React from 'react'
import './card.css'

const CardPrueba = ({ element }) => {
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

          <div className='front'>
            <div className='img'>
              <div className='circle' />
              <div className='circle' id='right' />
              <div className='circle' id='bottom' />
            </div>

            <div className='front-content'>
              <small className='badge'>{element._id}</small>
              <div className='description'>
                <div className='title'>
                  <p className='title'>
                    <strong>{element.description}</strong>
                  </p>
                  <ion-icon name='flame' />
                </div>
                <p className='card-footer'>
                  {element.category} &nbsp; &nbsp; {element.subcategory}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPrueba
