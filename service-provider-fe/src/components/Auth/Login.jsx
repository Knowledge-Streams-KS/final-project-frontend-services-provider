import React, { useState, useContext, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { login, loading, error } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            toast.error('Invalid credentials')
        } else if (!loading && !error && formData.email && formData.password) {
            toast.success('Login successful')
            navigate('/')
        }
    }, [error, loading])

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <Container maxWidth="xs" className='mt-40'>
            <Typography variant="h4" className="mt-6 mb-4 text-center ">
                Login
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                    Login
                </Button>
            </form>
        </Container>
    );
};

export default Login;
