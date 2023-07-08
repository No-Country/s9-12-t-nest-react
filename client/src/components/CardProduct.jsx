import { Link } from 'react-router-dom'
import '../components/CardProduct.css'

export default function card (products) {
  return (
    <>
      {products.props.map((product, i) => (
        <Link to={`/detalle/${product.id}`} className='card-link' key={i}>
          <div className='container-card'>
            <div className='img-container'>
              <img src={product.image} className='card-img-top' alt='product-image' />
            </div>
            <div className='card-grid'>
              <p className='text-card'>{product.title}</p>
              <p className='ubi-text'>Ubicacion</p>
            </div>
          </div>
        </Link>
      ))}

    </>
  )
}
