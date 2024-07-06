import React, { useState, useContext } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Register = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' })
    const { register, loading, error } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        register(formData)
        if (error) {
            toast.error('Registration failed')
        } else {
            toast.success('Registration successful')
            navigate('/')
        }
    }

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Register
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextField label="First Name" variant="outlined" fullWidth value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                <TextField label="Last Name" variant="outlined" fullWidth value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                <TextField label="Password" type="password" variant="outlined" fullWidth value={formData({ ...formData, password: e.target.value })} />
                <Button type="submit" variant="container" color="primary" fullWidth disabled={loading}>Register</Button>
            </form>
        </Container>
    )
}

export default Register