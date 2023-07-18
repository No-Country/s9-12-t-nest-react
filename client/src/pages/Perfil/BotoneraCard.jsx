import React, { useEffect, useState } from 'react'
import './heart.css'

const BotoneraCard = ({ element }) => {
  const [activaHeart, setActivaHeart] = useState(false)
  // const [activaCart, setActivaCart] = useState('')
  // const [valorHeart, setValorHeart] = useState('')
  const [valorActiveCart, setValorActivoCart] = useState('')

  useEffect(() => {
    if (activaHeart === true) {
      setTimeout(() => {
        setValorActivoCart('like')
      }, 3000)
    } else {
      setTimeout(() => {
        setValorActivoCart('')
      }, 3000)
    }
  }, [])

  const onAddMeGusta = () => {
    console.log('añadido')
  }

  return (
    <section className='botoneraCard'>
      <div>
        <a className={`heart ${valorActiveCart}`} onClick={onAddMeGusta}><ion-icon name='heart' /></a>
        <a className='cart '><ion-icon name='settings' /></a>
      </div>
    </section>
  )
}

export default BotoneraCard
