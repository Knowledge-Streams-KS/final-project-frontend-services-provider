import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, updateUserProfile, loading, error } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        address: user?.address || '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        updateUserProfile(formData);
        if (error) {
            toast.error('Update failed');
        } else {
            toast.success('Profile updated successfully');
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Profile
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
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                    Update Profile
                </Button>
            </form>
        </Container>
    );
};

export default Profile;
