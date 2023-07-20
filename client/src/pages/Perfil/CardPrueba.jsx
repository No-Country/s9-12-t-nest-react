import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

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

          <div className='front'>
            <div className='img'>
              <div className='circle' />
              <div className='circle' id='right' />
              <div className='circle' id='bottom' />
            </div>

            <div className='front-content'>
              <small className='badge'>{element._id}</small>
              <section className='crudCard'>
                <button className='modifyCard'><ion-icon name='create' /></button>
                <button className='deleteCard' onClick={(e) => funcDeletes(e, element._id)}><ion-icon name='trash' /></button>
              </section>
              <div className='description'>
                <div className='title'>
                  <p>
                    <strong>{element.description}</strong>
                  </p>
                  <ion-icon name='flame' />
                </div>
                <div className='card-footer'>
                  <Link to={`/product/${element._id}`} className='category'>
                    {element.category}
                  </Link>
                  <Link to={`/product/${element._id}`} className='category'>
                    {element.subcategory}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPrueba