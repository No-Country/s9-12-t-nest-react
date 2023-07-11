import React, { useState } from 'react'

const initialValues = {
    name: "",
    email: "",
    password: "",
    password2: ""
}

function Register() {
    const [state, setState] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <main>
            <h1 style={{ textAlign: "center", margin:"20px"}}>Crear una cuenta</h1>
            <form
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                onSubmit={handleSubmit}
            >
                <div style={{maxWidth: "396px"}}>
                    <label 
                        htmlFor='email'>Correo Electrónico
                    </label>
                    <input
                        style={{marginBottom: "15px", padding: "10px", border: "2px solid #FF4679", borderRadius:"8px",width: "100%"}}
                        id="email"
                        placeholder="Correo Electrónico"
                        onChange={handleChange}
                    />
                    <label htmlFor='password'>Contraseña</label>
                    <input
                        style={{marginBottom: "15px", padding: "10px", border: "2px solid #FF4679", borderRadius:"8px",width: "100%"}}                        id="password"
                        placeholder="Contraseña"
                        type="password"
                        onChange={handleChange}
                    />
                    <label htmlFor='password2'>Repetir contraseña</label>
                    <input
                        style={{marginBottom: "15px", padding: "10px", border: "2px solid #FF4679", borderRadius:"8px",width: "100%"}}                        id="password2"
                        placeholder="Repetir Contraseña"
                        type="password"
                        onChange={handleChange}
                    />
                    <label htmlFor='name'>Nombres</label>
                    <input
                        style={{marginBottom: "15px", padding: "10px", border: "2px solid #FF4679", borderRadius:"8px",width: "100%"}}                        id="name"
                        placeholder="Nombres"
                        onChange={handleChange}
                    />
                    <label htmlFor='lastName'>Apellido</label>
                    <input
                        style={{marginBottom: "15px", padding: "10px", border: "2px solid #FF4679", borderRadius:"8px",width: "100%"}}                        id="lastName"
                        placeholder="Apellido"
                        onChange={handleChange}
                    />
                    <label htmlFor='userName'>Nombre de Usuario</label>
                    <input
                        style={{marginBottom: "15px", padding: "10px", border: "2px solid #FF4679", borderRadius:"8px",width: "100%"}}                        id="userName"
                        placeholder="Hasta 20 caracteres"
                        onChange={handleChange}
                    />
                    <button
                        style={{backgroundColor:"#FF4679",border: "none", borderRadius:"110px", color:"#FFFFFF", marginTop: "10px", padding:"10px", width:"211px"}}
                        type="submit"
                    >
                        Crear cuenta
                    </button>
                </div>
            </form>
        </main>
    )
}

export default Register