import React, { useState, useContext, useEffect } from 'react';
import { TextField, Button, Typography, MenuItem, Select, FormControl, InputLabel, Link, FormControlLabel, Checkbox } from '@mui/material';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        role: 'customer'
    });
    const [termsAccepted, setTermsAccepted] = useState(false);
    const { register, loading, error, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (termsAccepted) {
            await register(formData);
        } else {
            toast.error('You must accept the terms and conditions');
        }
    };

    useEffect(() => {
        if (error) {
            toast.error(error.message || 'Registration failed');
        }
    }, [error]);

    useEffect(() => {
        if (user) {
            toast.success('Registration successful');
            navigate('/login');
        }
    }, [user, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('src/assets/Background/2.png')" }}>
            <div className="max-w-md w-full bg-white bg-opacity-75 rounded-lg shadow-md p-8">
                <Typography variant="h4" className="text-center font-semibold mb-6">
                    Register
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="bg-gray-200"
                        />
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="bg-gray-200"
                        />
                    </div>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-200"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="bg-gray-200"
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="bg-gray-200"
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        fullWidth
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="bg-gray-200"
                    />
                    <FormControl fullWidth variant="outlined" className="bg-gray-200">
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
                    <FormControlLabel
                        control={<Checkbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />}
                        label="I accept the Terms and Conditions"
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={loading}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Register
                    </Button>
                    <Typography variant="body2" className="text-center mt-4">
                        Already have an account?{' '}
                        <Link href="/login" className="text-blue-500 hover:underline">
                            Login
                        </Link>
                    </Typography>
                </form>
            </div>
        </div>
    );
};

export default Register;
