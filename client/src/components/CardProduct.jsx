import { Link } from 'react-router-dom'
import '../components/CardProduct.css'
import LocationSVG from './LocationSVG'
import LocationSVGMobile from './LocationSVGMobile'

export default function card (products) {
  return (
    <>
      {products.props.map((product, i) => (
        <Link to={`/detalle/${product.id}`} className='card-link' key={i}>
          <div className='container-card'>
            <div className='img-container '>
              <img src={product.images} className='card-img-top' alt='product-image' />
            </div>
            <div className='card-grid'>
              <p className='text-card'>{product.name}</p>
              <div className='location-container'>
                <div id='desktop-svg'>
                  <LocationSVG />
                </div>
                <div id='mobile-svg'>
                  <LocationSVGMobile />
                </div>

                <p className='ubi-text'>{product.location}</p>
              </div>

            </div>
          </div>
        </Link>
      ))}

    </>
  )
}
