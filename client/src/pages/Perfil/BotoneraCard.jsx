import React, { useEffect, useState } from 'react'
import './heart.css'

const BotoneraCard = ({ element, claseCustom }) => {
  const [activaHeart, setActivaHeart] = useState(false)
  const [addProductLike, setAddProductLike] = useState(false)
  // const [valorHeart, setValorHeart] = useState('')

  const onAddMeGusta = () => {
    setActivaHeart(!activaHeart)

    console.log('añadido')
  }

  useEffect(() => {
    if (activaHeart === true) {
      setTimeout(() => {
        setAddProductLike(true)
      }, 3000)
    } else {
      setActivaHeart(false)
      setAddProductLike(false)
    }
  }, [activaHeart])

  return (
    <section className={`botoneraCard ${activaHeart ? 'visible' : claseCustom} `}>
      <div>
        <a className={`heart ${activaHeart ? 'like' : ''} ${addProductLike ? 'activo' : ''}`} onClick={onAddMeGusta}>
          <ion-icon name='heart' style={{ color: activaHeart || addProductLike ? 'red' : 'black' }} />
        </a>
      </div>
    </section>
  )
}

export default BotoneraCard
