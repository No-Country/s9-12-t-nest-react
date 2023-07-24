import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './settingPerfil.css'
import { modifyUser } from '../../features/authSlice/authSlice'

const SettingPerfil = () => {
  const user = useSelector(state => state?.autenticacion?.user)
  const objetoUser = {
    _id: '64b9bb6d821dd7fe3cb11333',
    email: 'pescadorabioso1992@gmail.com',
    firstName: 'pescado',
    lastName: 'rabioso',
    contact: '2944123456',
    address: 'Argentina,rio negro,san carlos de bariloche, ',
    isActive: true,
    roles: [
      'user'
    ],
    products: [],
    incomingOffers: [],
    createdAt: '2023-07-20T22:55:41.634Z',
    updatedAt: '2023-07-20T22:55:41.634Z',
    __v: 0
  }
  // para validar el usuario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')

  const [errors, setErrors] = useState({})

  // permiten editar indivifualmente
  const [editEmail, setEditEmail] = useState(false)
  const [editPassword, setEditPassword] = useState(false)
  const [editFirstName, setEditFirstName] = useState(false)
  const [editLastName, setEditLastName] = useState(false)
  const [editContact, setEditContact] = useState(false)
  const [editAddress, setEditAddress] = useState(false)

  const dispatch = useDispatch()
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

    const newUser = {
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
      console.log(newUser)
      dispatch(modifyUser(objetoUser._id, newUser))
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
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

      <form className='formModifyPerfil' onSubmit={handleSubmit}>
        <div className='formGroup'>
          {
            !editFirstName
              ? (
                <div className='dpFormGen'>
                  <p name='firstName' value={objetoUser.firstName} className='pFormGen'>{objetoUser.firstName || 'Usuario'}</p>
                  <button className='editInputPerfil' onClick={() => setEditFirstName(true)}><ion-icon name='pencil-sharp' /></button>
                </div>
                )
              : (
                <input
                  className='inputFormGen'
                  type='text'
                  name='firstName'
                  placeholder='Nombre'
                  value={firstName}
                  onChange={handleChanges}
                />
                )
          }
          {errors.firstName && <p style={{ width: '100%', padding: '5px', color: 'red', fontFamily: 'var(--titulo)', fontWeight: '500', fontSize: '1rem', textAlign: 'left' }}>{errors.name}</p>}
        </div>

        <div className='formGroup'>
          {
            !editEmail
              ? (
                <div className='dpFormGen'>
                  <p name='email' value={objetoUser.email} className='pFormGen'>{objetoUser.email || 'Email'}</p>
                  <button className='editInputPerfil' onClick={() => setEditEmail(true)}><ion-icon name='pencil-sharp' /></button>
                </div>
                )
              : (
                <input
                  className='inputFormGen'
                  type='text'
                  name='email'
                  placeholder='email'
                  value={email}
                  onChange={handleChanges}
                />
                )
          }
          {errors.email && <p style={{ width: '100%', padding: '5px', color: 'red', fontFamily: 'var(--titulo)', fontWeight: '500', fontSize: '1rem', textAlign: 'left' }}>{errors.email}</p>}
        </div>

        <div className='formGroup'>
          {
            !editPassword
              ? (
                <div className='dpFormGen'>
                  <p name='password' value={objetoUser.password} className='pFormGen'>{objetoUser.password || 'Password'}</p>
                  <button className='editInputPerfil' onClick={() => setEditPassword(true)}><ion-icon name='pencil-sharp' /></button>
                </div>
                )
              : (
                <input
                  className='inputFormGen'
                  type='text'
                  name='password'
                  placeholder='password'
                  value={password}
                  onChange={handleChanges}
                />
                )
          }
          {errors.password && <p style={{ width: '100%', padding: '5px', color: 'red', fontFamily: 'var(--titulo)', fontWeight: '500', fontSize: '1rem', textAlign: 'left' }}>{errors.password}</p>}
        </div>

        <div className='formGroup'>
          {
            !editLastName
              ? (
                <div className='dpFormGen'>
                  <p name='lastName' value={objetoUser.lastName} className='pFormGen'>{objetoUser.lastName || 'Apellido'}</p>
                  <button className='editInputPerfil' onClick={() => setEditLastName(true)}><ion-icon name='pencil-sharp' /></button>
                </div>
                )
              : (
                <input
                  className='inputFormGen'
                  type='text'
                  name='lastName'
                  placeholder='lastName'
                  value={lastName}
                  onChange={handleChanges}
                />
                )
          }
          {errors.lastName && <p style={{ width: '100%', padding: '5px', color: 'red', fontFamily: 'var(--titulo)', fontWeight: '500', fontSize: '1rem', textAlign: 'left' }}>{errors.lastName}</p>}
        </div>

        <div className='formGroup'>
          {
            !editContact
              ? (
                <div className='dpFormGen'>
                  <p name='contact' value={objetoUser.contact} className='pFormGen'>{objetoUser.contact || 'telefono: +54...'} </p>
                  <button className='editInputPerfil' onClick={() => setEditContact(true)}><ion-icon name='pencil-sharp' /></button>
                </div>
                )
              : (
                <input
                  className='inputFormGen'
                  type='text'
                  name='contact'
                  placeholder='telefono +5492944123456'
                  value={contact}
                  onChange={handleChanges}
                />
                )
          }
          {errors.contact && <p style={{ width: '100%', padding: '5px', color: 'red', fontFamily: 'var(--titulo)', fontWeight: '500', fontSize: '1rem', textAlign: 'left' }}>{errors.contact}</p>}
        </div>
        <div className='formGroup'>
          {
            !editAddress
              ? (
                <div className='dpFormGen'>
                  <p name='address' value={objetoUser.address} className='pFormGen'>{objetoUser.address || 'Pais, ciudad, localidad'}</p>
                  <button className='editInputPerfil' onClick={() => setEditAddress(true)}><ion-icon name='pencil-sharp' /></button>
                </div>
                )
              : (
                <input
                  className='inputFormGen'
                  type='text'
                  name='address'
                  placeholder='pais, ciudad, localidad'
                  value={address}
                  onChange={handleChanges}
                />
                )
          }
          {errors.address && <p style={{ width: '100%', padding: '5px', color: 'red', fontFamily: 'var(--titulo)', fontWeight: '500', fontSize: '1rem', textAlign: 'left' }}>{errors.address}</p>}
        </div>
        <div className='ButonGroup'>
          <button className='boton' type='submit' onClick={handleSubmit}>Guardar Cambio</button>
        </div>
      </form>
    </section>
  )
}

export default SettingPerfil
