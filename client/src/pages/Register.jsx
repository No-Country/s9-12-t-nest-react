import React, { useState } from 'react'
import { Button, Box, TextField } from '@mui/material';

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
        <Box sx={{ textAlign:"center"}}>
            <h1>Registrarse</h1>
            <form
                onSubmit={handleSubmit}
            >
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <TextField
                        sx={{marginBottom: "10px", width:"250px"}}
                        id="name"
                        label="Nombre de usuario"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        sx={{margin: "10px 0", width:"250px"}}
                        id="email"
                        label="Correo Electrónico"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        sx={{margin: "10px 0", width:"250px"}}
                        id="password"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        sx={{margin: "10px 0", width:"250px"}}
                        id="password2"
                        label="Repetir Contraseña"
                        type="password"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    <Button
                        sx={{marginTop: "10px"}}
                        type="submit"
                        variant='contained'
                    >
                        Crear cuenta
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Register