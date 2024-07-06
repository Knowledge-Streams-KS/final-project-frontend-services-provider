import React, { useContext, useState } from "react"
import { TextField, Button, Container, Typography } from '@mui/material'
import AuthContext from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'





const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const { login, loading, error } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        login(formData)
        if (error) {
            toast.error('Invalid credentials')
        } else {
            toast.success('Login successful')
            navigate('/')
        }
    }

    return (
        <Container maxWidth='xs'>
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Login
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextField label='Email'
                    variant='outlined'
                    fullWidth
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <TextField label="Password"
                    type="password"
                    variant="outline"
                    fullWidth
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                    Login
                </Button>
            </form>
        </Container>
    )
}

export default Login
