import React, { useState } from 'react'
import '../pages/styles/UserRegisterLogin.css'
import { createUser } from '../features/authSlice/authSlice';

const initialValues = {
    name: "",
    lastName:"",
    email: "",
    contact: "",
    address: "",
    password: "",
    password2: ""
}

function Register() {
    const [state, setState] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let errorsList = {};
        const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!state.email)
        errorsList = { ...errorsList, email: "Campo obligatorio" };
        else if (!emailRegExp.test(state.email))
        errorsList = {
            ...errorsList,
            email: "Debe ingresar una direccion de correo válida",
        };
        if (!state.name) errorsList = { ...errorsList, name: "Campo obligatorio" };
        if (!state.lastName)
        errorsList = { ...errorsList, lastName: "Campo obligatorio" };
        if (!state.contact)
        errorsList = { ...errorsList, contact: "Campo obligatorio" };
        if (!state.address)
        errorsList = { ...errorsList, address: "Campo obligatorio" };

        if (state.password !== state.password2)
        errorsList = {
            ...errorsList,
            password: ["Los contraseñas deben coincidir"],
            password2: ["Los contraseñas deben coincidir"],
        };

        return errorsList;
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = validate();
        if (Object.keys(response).length < 1) {
            try {
                const body = {
                    name: state.name,
                    lastName: state.lastName,
                    email: state.email,
                    password: state.password,
                    address: state.address,
                    contact: state.contact
                }
                createUser(body);
            } catch (error) {
                console.log(error);
            }
        }
        setErrors(response)
        
    };

    return (
        <main>
            <h3 style={{ textAlign: "center", marginTop:"20px"}}>Crear una cuenta</h3>
            <form
                className='form'
                onSubmit={handleSubmit}
            >
                <div className='form-content'>
                    <label htmlFor='name'>Nombres</label>
                    <input                     
                        id="name"
                        placeholder="Nombres"
                        name="name"
                        onChange={handleChange}
                        defaultValue={state.name}
                    />
                    {errors.name && <p className='error-msg'>{errors.name}</p>}
                    <label htmlFor='lastName'>Apellido</label>
                    <input                   
                        id="lastName"
                        placeholder="Apellido"
                        name="lastName"
                        onChange={handleChange}
                        defaultValue={state.lastName}
                    />
                    {errors.lastName && <p  className='error-msg'>{errors.lastName}</p>}
                    <label htmlFor='contact'>Número de contacto</label>
                    <input                     
                        id="contact"
                        placeholder="Número de contacto"
                        name="contact"
                        onChange={handleChange}
                        defaultValue={state.contact}
                    />
                    {errors.contact && <p className='error-msg'>{errors.contact}</p>}
                    <label htmlFor='address'>Dirección</label>
                    <input                     
                        id="address"
                        placeholder="Dirección"
                        name="address"
                        onChange={handleChange}
                        defaultValue={state.address}
                    />
                    {errors.address && <p className='error-msg'>{errors.address}</p>}
                    <label 
                        htmlFor='email'>Correo Electrónico
                    </label>
                    <input
                        id="email"
                        placeholder="Correo Electrónico"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='error-msg'>{errors.email}</p>}
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        placeholder="Contraseña"
                        id="password"
                        type="password"
                        name='password'
                        onChange={handleChange}
                        defaultValue={state.password}
                    />
                    {errors.password && <p className='error-msg'>{errors.password}</p>}
                    <label htmlFor='password2'>Repetir contraseña</label>
                    <input
                        id="password2"
                        placeholder="Repetir Contraseña"
                        type="password"
                        name='password2'
                        onChange={handleChange}
                        defaultValue={state.password2}
                    />
                    {errors.password2 && <p className='error-msg'>{errors.password2}</p>}
                    <div style={{textAlign:"center", marginTop:"20px"}}>
                        <button
                            className='button'
                            type="submit"
                        >
                            Crear cuenta
                        </button>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Register