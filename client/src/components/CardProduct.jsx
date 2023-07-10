import { Link } from 'react-router-dom'
import '../components/CardProduct.css'
import LocationSVG from './LocationSVG'

export default function card (products) {
  return (
    <>
      {products.props.map((product, i) => (
        <Link to={`/detalle/${product.id}`} className='card-link' key={i}>
          <div className='container-card'>
            <div className='img-container '>
              <img src={product.image} className='card-img-top' alt='product-image' />
            </div>
            <div className='card-grid'>
              <p className='text-card'>{product.title}</p>
              <div className='location-container'>
                <LocationSVG />
                <p className='ubi-text'>Ubicación</p>
              </div>

            </div>
          </div>
        </Link>
      ))}

    </>
  )
}
