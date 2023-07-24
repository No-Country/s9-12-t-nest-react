/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchProductById, getProducts } from '../features/products/fetchProducts'
import './Ofertar.css'
import CardProduct from '../components/CardProduct'
import { getProductById, getProducts } from '../features/productsSlice/productSlice'

const Ofertar = () => {
  const product = useSelector((state) => state?.productsDb?.productById)
  const products = useSelector((state) => state?.productsDb?.products)
  const dispatch = useDispatch()
  const { id } = useParams()

  const [selectedCards, setSelectedCards] = useState([])

  const cardSelect = (id) => {
    if (selectedCards?.includes(id)) {
      setSelectedCards(selectedCards?.filter((cardId) => cardId !== id))
    } else {
      setSelectedCards([...selectedCards, id])
    }
  }

  useEffect(() => {
    console.log(selectedCards)
  }, [selectedCards])

  useEffect(() => {
    dispatch(getProductById(id))
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div>
      <h3 className='titulo-detalle'>{product?.name}</h3>
      <div className='imagen-descripcion'>
        <div className='contenedor-imagen'>
          <img src={product?.images} alt='' className='imagen-producto' />
        </div>
      </div>

      <hr />

      <div className='articulo-ofrecer'>
        <h3>¿Qué artículo/s querés ofrecer por este?</h3>
      </div>

      <div className='ver-todos'>
        <Link><h6>Ver todos.</h6></Link>
      </div>

      <div className='acomodar'>
        {products?.map(prod =>
          (
          <div key={prod?._id} className='offer-card-container' id='offer-card-container'>
          <label htmlFor='productCard'>
          <div
            onClick={() => cardSelect(prod._id)}
            id='ProductCard'
          >
            <CardProduct props={[prod]} />
          </div>
          </label>

          <div className='checkbox-card'>
            <input type='checkbox' name='cardSelected' id='productCard' />
          </div>

          </div>

          ))}
      </div>
      <div className='boton'>
        <button className='ofertar' product={product}>Confirmar Oferta</button>

      </div>
      <div className='publica'>
        <Link to='/publicacion'><p>+ Publicar otro articulo.</p></Link>

      </div>

    </div>
  )
}

export default Ofertar
