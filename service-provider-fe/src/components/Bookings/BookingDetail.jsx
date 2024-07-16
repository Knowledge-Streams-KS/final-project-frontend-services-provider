// src/components/Bookings/BookingDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookingById } from '../../redux/slices/bookingSlice';
import { Container, Typography, Card, CardContent, Grid, Box, Divider, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';

const BookingDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { booking, loading, error } = useSelector((state) => state.bookings);

    useEffect(() => {
        dispatch(fetchBookingById(id));
    }, [dispatch, id]);

    useEffect(() => {
        console.log("Booking detail data: ", booking); // Log booking detail data
    }, [booking]);

    return (
        <Container className='mt-12'>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {booking && (
                <Card sx={{ boxShadow: 8 }}>
                    <CardContent>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Avatar alt={booking.Service?.serviceName} src="/static/images/avatar/1.jpg" />
                            <Typography variant="h5" component="div" ml={2}>
                                {booking.Service?.serviceName || 'Service Name Not Available'}
                            </Typography>
                        </Box>
                        <Divider />
                        <Grid container spacing={2} mt={2}>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    <PersonIcon /> <strong>Customer Name:</strong> {booking.User ? `${booking.User.firstName} ${booking.User.lastName}` : 'Customer Name Not Available'}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    <strong>Description:</strong> {booking.Service?.description || 'Description not available'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <strong>Price:</strong> ${booking.Service?.price || 'Price not available'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <CategoryIcon /> <strong>Category:</strong> {booking.Service?.Category?.categoryName || 'Category not available'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <LocationOnIcon /> <strong>Location:</strong> {booking.Service?.Location?.name || 'Location not available'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <PersonIcon /> <strong>Provider:</strong> {booking.Service?.Provider?.name || 'Provider not available'}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <EventIcon /> <strong>Date:</strong> {booking.date}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <ScheduleIcon /> <strong>Time:</strong> {booking.time}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <strong>Status:</strong> {booking.status}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <HomeIcon /> <strong>Service Address:</strong> {booking.serviceAddress}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <HomeIcon /> <strong>Customer Address:</strong> {booking.address}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body1">
                                    <PhoneIcon /> <strong>Customer Phone Number:</strong> {booking.phoneNumber}
                                </Typography>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default BookingDetail;
