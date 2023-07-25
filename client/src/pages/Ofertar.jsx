/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { fetchProductById, getProducts } from '../features/products/fetchProducts'
import './Ofertar.css'
import CardProduct from '../components/CardProduct'
import { getProductById, getProducts } from '../features/productsSlice/productSlice'
import { getUserById } from '../features/authSlice/authSlice'

const Ofertar = () => {
  const product = useSelector((state) => state?.productsDb?.productById)
  const userProducts = useSelector((state) => state.authUser?.userById)
  const products = useSelector((state) => state?.productsDb?.products)
  const dispatch = useDispatch()
  const userIde = localStorage.getItem('userId')
  const token = localStorage.getItem('token')

  const { id, userID } = useParams()

  const [formState, setFormState] = useState({
    status: '',
    offerOwnerId: '',
    offerTargetItem: '',
    offeredItems: []
  })

  const [userProductsList, setUserProductsList] = useState([])

  const cardSelect = (id) => {
    if (formState.offeredItems?.includes(id)) {
      setFormState((prevFormState) => ({
        ...prevFormState,
        offeredItems: prevFormState.offeredItems.filter((cardId) => cardId !== id)
      }))
    } else {
      setFormState((prevFormState) => ({
        ...prevFormState,
        offeredItems: [...prevFormState.offeredItems, id]
      }))
    }
  }

  const submitHandler = () => {
    const formData = new FormData()
    formData.append('status', 'pending')
    formData.append('offerOwnerId', userID)
    formData.append('offerTargetItem', id)
    formState.offeredItems.forEach((item) => {
      formData.append('offeredItems', item)
    })

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
    }
  }

  useEffect(() => {
    // console.log(formState.offeredItems)
  }, [formState])

  useEffect(() => {
    dispatch(getProductById(id))
    dispatch(getProducts())
    if (userID !== '64aba27c2415d442b78559c1') {
      dispatch(getUserById({ token, UserId: userID }))
        .then((res) => {
        // console.log('Usuario obtenido:', res)
        })
        .catch((err) => {
          return err
        })
    }

    console.log(userProducts)
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
        {products?.map((prod, i) =>
          (
          <div key={prod?._id} className='offer-card-container' id='offer-card-container'>
          <label htmlFor={`productCard${i}`}>
          <div
            onClick={() => cardSelect(prod._id)}
          >
            <CardProduct props={[prod]} />
          </div>
          </label>

          <div className='checkbox-card'>
            <input type='checkbox' name='cardSelected' id={`productCard${i}`} />
          </div>

          </div>

          ))}
      </div>
      <div className='boton'>
        <button className='ofertar' product={product} onClick={() => { submitHandler() }}>Confirmar Oferta</button>

      </div>
      <div className='publica'>
        <Link to='/publicacion'><p>+ Publicar otro articulo.</p></Link>

      </div>

    </div>
  )
}

export default Ofertar
