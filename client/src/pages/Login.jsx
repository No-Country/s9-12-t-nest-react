import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Box, TextField } from '@mui/material';

const initialValues = {
    email: "",
    password: ""
}

function Login() {
    const [state, setState] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <Box sx={{textAlign:"center"}}>
            <h1>Bienvenido</h1>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <TextField
                        sx={{ marginBottom: "10px", width: "250px" }}
                        id="email"
                        label="Correo Electrónico"
                        variant="outlined"
                        value={state.email}
                        onChange={handleChange}
                    />

                    <TextField
                        sx={{ margin: "10px 0", width: "250px" }}
                        id="password"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        value={state.password}
                        onChange={handleChange}
                    />

                    <Button variant='contained'>Iniciar Sesión</Button>

                    <p href="#" className="mt-2">
                        ¿ No tienes un usuario ?
                    </p>

                    <Link
                        to="/register"
                    >
                        Registrarse
                    </Link>

                </Box>
            </form>
        </Box>
    )
}

export default Login;