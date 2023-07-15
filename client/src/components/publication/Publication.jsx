import './styles/publication.css'
import 'swiper/css'
import Input from './Input'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getCategoriesById } from '../../features/categoriesSlice/categorySlice'
import { createProduct, getProducts } from '../../features/productsSlice/productSlice'
import Carousel from '../carousel/Carousel'
import PBCarousel from './PBCarousel'

function Publication () {
  const [formData, setFormData] = useState({
    owner: '64aba27c2415d442b78559c1',
    name: '',
    category: '',
    subcategory: '',
    images: [],
    location: '',
    description: '',
    lon: '-58.44924',
    lat: '-34.57365'
  })
  const [files, setFiles] = useState([])
  const categories = useSelector((state) => state?.categories?.categories)
  const subCategory = useSelector((state) => state?.categories?.category)

  const dispatch = useDispatch()
  const height = files.length > 0 ? '142px' : '0'
  const opacity = files.length > 0 ? '1' : '0'

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  // const handleSubCategory = (e) => {
  //   const value = e.target.value
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     subcategories: [value]
  //   }))
  // }

  const hanldeFileChange = (e) => {
    const file = e.target.files
    setFiles([...files, ...file])
    const filesArray = Array.from(file)
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: [...prevFormData.images, ...filesArray]
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    formData.name !== '' && formData.category !== '' && formData.subcategories !== '' && formData.images.length > 0 && formData.images.length <= 10 && formData.description !== '' ? dispatch(createProduct(formData)) : console.log('Inputs vacios o excede las 10 imagenes')

    console.log(formData)
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    const categoryId = categories.length > 0 ? categories.find((category) => category.name === formData.category)._id : ''
    setTimeout(() => {
      dispatch(getCategoriesById(categoryId))
    }, 10)
  }, [formData.category])

  return (
    <>
      <form className='publication-container' onSubmit={handleSubmit}>
        <div className='title-container'>
          <p>Publicar un artículo</p>
        </div>

        <div className='custom-container'>
          <Input ids='input-bot' placeh='Ej: Bicicleta BMX, rodado 24' type='text' name='name' onInputChange={handleInputChange}>Indicá producto, marca, modelo y características principales</Input>
        </div>

        <div className='custom-container'>
          <Input type='select' name='category' onInputChange={handleInputChange} categories={categories}>Seleccioná la categoría que corresponde a tu artículo</Input>
        </div>

        <div className='custom-container'>
          <Input type='select' name='subcategory' ids='input-desc' onInputChange={handleInputChange} categories={subCategory.subcategories}>Seleccioná la subcategoría que corresponde a tu artículo</Input>
        </div>

        {/* Funcion de agregar fotos a la publicacion */}

        <div className='custom-container'>
          <div className='title-carousel'>
            <div>
              <p className='input-title'>Cargá las fotos reales de  tu artículo (Hasta 10 fotos)</p>
            </div>

            <div className='carousel-div' style={{ height, opacity }}>
              <PBCarousel data={files} />

            </div>

            <div className='input-container'>
              <label htmlFor='add-image-input' className='label-input'>
                +Cargar fotos
              </label>

              <input type='file' id='add-image-input' name='images' onChange={hanldeFileChange} />
            </div>
          </div>

        </div>

        <div className='custom-container'>
          <Input ids='input-bot' placeh='Ej: Colegiales, CABA' type='text' name='location' onInputChange={handleInputChange}>
            Indicá dónde se encuentra el artículo que querés publicar
          </Input>
        </div>

        <div className='custom-container'>
          <Input ids='input-desc' type='text' name='description' placeh='Detalla las condiciones en las que se encuentra el producto' onInputChange={handleInputChange}>
            Descripción del artículo
          </Input>
        </div>

        <div>
          <button type='submit' className='submit-button-p'>
            Publicar
          </button>
        </div>

      </form>

    </>
  )
}

export default Publication
