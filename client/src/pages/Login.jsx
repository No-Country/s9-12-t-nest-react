import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../pages/styles/UserRegisterLogin.css'
import { AuthService } from '../../../server/src/auth/auth.service'

const initialValues = {
    email: "",
    password: ""
}

function Login() {
    const [state, setState] = useState(initialValues);
    const [errors, setErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

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

        return errorsList;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = validate();
        if (Object.keys(res).length < 1) {
            try {
                const user = {
                    email: state.email,
                    password: state.password
                }
                const response = await fetch("http://localhost:3000/api/v1/auth/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });
                if (!response.ok) throw new Error("Datos inválidos, intenta nuevamente")

            } catch (error) {
                setErrors(error)
                console.log(error);
            }
        }
        setErrors(res)
    };

    const googleLogin = async (e) => {
        try {
            const user = {
                email: state.email,
                password: state.password
            }
            const response = await fetch("http://localhost:3000/api/v1/auth/google/callback", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main style={{ textAlign: "center", margin: "20px" }}>
            <img className="logo-img" src="/images/logo-login.svg" alt="Trueka logo image" />
            <p className='slogan'>Encontrá lo que buscás, <br />
                cambialo por lo que ya no necesitás</p>
            <h5>Iniciar Sesión</h5>
            <form onSubmit={handleSubmit} className='form'>
                <div className='form-content'>
                    <input
                        id="email"
                        placeholder="Correo Electrónico"
                        name='email'
                        value={state.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p className='error-msg'>{errors.email}</p>}

                    <div className="pass-positioning">
                        <label htmlFor="password"></label>
                        <input
                            id="password"
                            placeholder="Contraseña"
                            name='password'
                            value={state.password}
                            type={showPassword ? 'text' : 'password'}
                            onChange={handleChange}
                        />
                        <img
                            id="eye-img"
                            src="/images/visibility.svg"
                            alt="Eye icon to show or hidden password"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    {errors.length >= 1 && <p className='error-msg'>{errors}</p>}
                    <div className='forgot-pass'>
                        <Link to="/login" >Olvidé mi contraseña</Link>
                    </div>
                    <button
                        className='button'
                    >Iniciar Sesión</button>
                    <div className='new-account'>
                        <span className="mt-2">
                            ¿No tenés una cuenta? </span>
                        <Link
                            to="/register"
                        >
                            Crear cuenta
                        </Link>
                    </div>
                    <hr id="hr" />
                    <div className='login-alternatives'>
                        <p>Ingresar con</p>
                        <img src="/images/google.svg" alt="Google icon" onClick={googleLogin} />
                        <img src="/images/facebook.svg" alt="Facebook icon" />
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Login;