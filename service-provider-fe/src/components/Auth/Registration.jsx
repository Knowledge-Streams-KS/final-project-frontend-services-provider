import React, { useState, useContext, useEffect } from 'react';
import { TextField, Button, Container, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', address: '', phoneNumber: '', role: 'customer' });
    const { register, loading, error, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(formData);
    };

    useEffect(() => {
        if (error) {
            toast.error(error.message || 'Registration failed');
        }
    }, [error,]);

    useEffect(() => {
        if (user) {
            toast.success('Registration successful');
            navigate('/login');
        }
    }, [user, navigate]);
    return (
        <Container maxWidth="xs" className='mt-16'>
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Register
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
                <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
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
                <TextField
                    label="Address"
                    type="address"
                    variant="outlined"
                    fullWidth
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
                <TextField
                    label="Phone Number"
                    type="phone number"
                    variant="outlined"
                    fullWidth
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="role-label">Role</InputLabel>
                    <Select
                        labelId="role-label"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        label="Role"
                    >
                        <MenuItem value="customer">Customer</MenuItem>
                        <MenuItem value="provider">Service Provider</MenuItem>
                    </Select>
                </FormControl>
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                    Register
                </Button>
            </form>
        </Container>
    );
};

export default Register;
