import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './settingPerfil.css'

const SettingPerfil = () => {
  const user = useSelector(state => state?.autenticacion?.user)

  // para validar el usuario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')

  const [errors, setErrors] = useState({})

  /*
  "email": "string",
  "password": "stringst",
  "firstName": "string",
  "lastName": "string",
  "contact": "string",
  "address": "string"
  */
  const handleChanges = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'contact':
        setContact(value)
        break
      case 'address':
        setAddress(value)
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      email,
      password,
      firstName,
      lastName,
      contact,
      address
    }

    setErrors({})
    const validationErrors = {}

    if (!email) {
      validationErrors.email = 'Email es requerido'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      validationErrors.email = 'ingrese un email valido'
    }

    if (!password) {
      validationErrors.password = 'Password es requeridp'
    } else if (password.length < 8) {
      validationErrors.password = 'El password no puede ser inferior a 8 caracteres'
    } else if (!/(?=.*[!@#$%^&*()\-_=+{};:,<.>])/.test(password)) {
      validationErrors.password = 'La contraseña debe tener al menos un caracter especial'
    } else if (!/(?=.*[a-z])/.test(password)) {
      validationErrors.password = 'La contraseña debe tener al menos una letra minúscula'
    } else if (!/(?=.*[A-Z])/.test(password)) {
      validationErrors.password = 'La contraseña debe tener al menos una letra mayúscula'
    } else if (!/(?=.*\d)/.test(password)) {
      validationErrors.password = 'La contraseña debe tener al menos un número'
    }

    if (!firstName) {
      validationErrors.firstName = 'El Nombre es requerido'
    }

    if (!lastName) {
      validationErrors.lastName = 'El apellido es requerido'
    }

    if (!contact) {
      validationErrors.contact = 'El numero de contacto es requerido'
    } else if (!/^\+(?:[0-9]\s?){6,14}[0-9]$/
      .test(contact)) {
      validationErrors.contact = 'ingrese un numero de contacto valido, ej +5492944123456'
    }

    if (!address) {
      validationErrors.address = 'La direccion es requerida'
    } else if (address.length < 8) {
      validationErrors.address = 'La direccion no puede ser inferior a 8 caracteres'
    } else {
      const addressParts = address.split(',').map((part) => part.trim())
      if (addressParts.length < 2) {
        validationErrors.address = 'La dirección debe contener al menos país y ciudad, localidad, barrio'
      } else {
        for (const part of addressParts) {
          if (!part) {
            validationErrors.address = 'La dirección debe tener valores para país, ciudad/localidad/barrio'
            break
          }
        }
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else if (Object.keys(validationErrors).length === 0) {
      console.log(user)
    }
  }

  return (
    <section className='container mainPerfil' style={{ maxWidth: '450px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '3rem', gap: '1rem' }}>
      <h2>Editar Perfil</h2>
      <section className='containEditProfile'>
        <section className='edit-profile'>
          <img className='edit-profile__img' src={user?.picture} alt={user?.firstName} />
        </section>
        <button className='editImage'>
          <ion-icon name='pencil-sharp' />
        </button>
      </section>

      <form action=''>
        <div className='form-group' style={{ width: '100%' }}>
          <input
            type='text'
            name='firstName'
            placeholder='Nombre'
            value={firstName}
            onChange={handleChanges}
          />
        </div>
        <div className='form-group' style={{ width: '100%' }}>
          <input
            type='text'
            name='email'
            placeholder='email'
            value={email}
            onChange={handleChanges}
          />
        </div>
        <div className='form-group' style={{ width: '100%' }}>
          <input
            type='text'
            name='password'
            placeholder='password'
            value={password}
            onChange={handleChanges}
          />
        </div>
        <div className='form-group' style={{ width: '100%' }}>
          <input
            type='text'
            name='lastName'
            placeholder='lastName'
            value={lastName}
            onChange={handleChanges}
          />
        </div>
        <div className='form-group' style={{ width: '100%' }}>
          <input
            type='text'
            name='contact'
            placeholder='telefono +5492944123456'
            value={contact}
            onChange={handleChanges}
          />
        </div>
        <div className='form-group' style={{ width: '100%' }}>
          <input
            type='text'
            name='address'
            placeholder='pais, ciudad, localidad'
            value={address}
            onChange={handleChanges}
          />
        </div>
        <div className='form-group' style={{ width: '100%' }}>
          <button type='submit' onClick={handleSubmit} className='btn'>Guardar Cambio</button>
        </div>
      </form>
    </section>
  )
}

export default SettingPerfil
