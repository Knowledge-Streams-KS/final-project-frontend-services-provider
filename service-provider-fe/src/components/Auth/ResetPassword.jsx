import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../redux/slices/authSlice';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const { token } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resultAction = await dispatch(resetPassword({ token, password }));
            if (resetPassword.fulfilled.match(resultAction)) {
                toast.success('Password reset successful');
                navigate('/login');
            } else {
                toast.error('Error resetting password');
            }
        } catch (error) {
            toast.error('Error resetting password');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Reset Password
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <TextField
                    label="New Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                    Reset Password
                </Button>
            </form>
        </Container>
    );
};

export default ResetPassword;
