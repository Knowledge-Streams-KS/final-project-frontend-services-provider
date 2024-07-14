import React, { useState, useContext, useEffect } from 'react';
import { TextField, Button, Container, Typography, Avatar, IconButton, Card, CardContent, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import AuthContext from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { Password, PhotoCamera } from '@mui/icons-material';
import { fetchUserProfile } from '../../redux/slices/authSlice';

const Profile = () => {
    const { updateUserProfile, loading, error } = useContext(AuthContext);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: "",
    });

    useEffect(() => {
        if (!user) {
            dispatch(fetchUserProfile());
        }
    }, [dispatch, user]);

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.email || '',
                phoneNumber: user.phoneNumber || '',
                address: user.address || '',
                password: user.password || '',
            });
        }
    }, [user]);

    useEffect(() => {
        if (error) {
            toast.error('Update failed')
        }
    }, [error])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            updateUserProfile(formData);
            toast.success('Profile updated successfully');
        } catch (error) {
            toast.error('Update failed');
        }
    };

    return (
        <Container maxWidth="md" className='mt-12'>
            <Card>
                <CardContent>
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Typography variant="h4" className="mt-8 mb-4 text-center">
                            Profile
                        </Typography>
                        <Avatar
                            src="/path/to/profile-pic.jpg"
                            alt="Profile Picture"
                            sx={{ width: 100, height: 100, mb: 2 }}
                        />
                        <IconButton color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                        </IconButton>
                    </Box>
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                            Update Profile
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Profile;
