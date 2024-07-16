import React, { useState, useContext, useEffect } from 'react';
import { TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@mui/material';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const { login, loading, error } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (error) {
            toast.error('Invalid credentials');
        } else if (!loading && !error && formData.email && formData.password) {
            toast.success('Login successful');
            navigate('/');
        }
    }, [error, loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (termsAccepted) {
            login(formData);
        } else {
            toast.error('You must accept the terms and conditions');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('src/assets/Background/2.png')" }}>
            <div className="max-w-md w-full bg-white bg-opacity-75 rounded-lg shadow-md p-8">
                <Typography variant="h4" className="text-center font-semibold mb-6">
                    Login
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-50"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="bg-gray-50"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />}
                        label="I accept the Terms and Conditions"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                        Login
                    </Button>
                    <Typography variant="body2" className="text-center mt-4">
                        Don't have an account? <Link href="/register">Register</Link>
                    </Typography>
                </form>
            </div>
        </div>
    );
};

export default Login;
