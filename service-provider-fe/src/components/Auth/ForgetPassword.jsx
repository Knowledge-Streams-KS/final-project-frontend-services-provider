import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../redux/slices/authSlice';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await dispatch(forgotPassword({ email })).unwrap();
            toast.success(response.message);
        } catch (error) {
            toast.error(error.message || 'Error sending password reset email');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Forgot Password
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Send Reset Email
                </Button>
            </form>
        </Container>
    );
};

export default ForgotPassword;
