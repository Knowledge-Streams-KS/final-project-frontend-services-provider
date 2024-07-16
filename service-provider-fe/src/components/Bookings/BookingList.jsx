import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserBookings } from '../../redux/slices/bookingSlice';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BookingList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { bookings, loading, error } = useSelector((state) => state.bookings);

    useEffect(() => {
        dispatch(fetchUserBookings());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error(`Failed to fetch bookings: ${error}`);
        }
    }, [error]);

    const handleCardClick = (id) => {
        navigate(`/booking/${id}`);
    };

    return (
        <Container className='bg-gray-300 mt-12 rounded-lg p-4'>
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Booking List
            </Typography>
            {loading && <Typography>Loading...</Typography>}
            {error && typeof error === 'string' && <Typography color="error">{error}</Typography>}
            {bookings && bookings.length > 0 ? (
                <Grid container spacing={3}>
                    {bookings.map((booking) => (
                        <Grid item xs={12} sm={6} md={4} key={booking.id} onClick={() => handleCardClick(booking.id)}>
                            <Card className='shadow-lg cursor-pointer'>
                                <CardContent className='bg-gray-100 rounded-lg p-4'>
                                    <Typography variant="h5" component="div">
                                        {booking.Service?.serviceName || 'Service Name Not Available'}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className='mt-2'>
                                        <strong>Date:</strong> {booking.date}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className='mt-1'>
                                        <strong>Time:</strong> {booking.time}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className='mt-1'>
                                        <strong>Status:</strong> {booking.status}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className='mt-1'>
                                        <strong>Customer Name:</strong> {booking.User ? `${booking.User.firstName} ${booking.User.lastName}` : 'Customer Name Not Available'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography>No bookings available.</Typography>
            )}
        </Container>
    );
};

export default BookingList;
