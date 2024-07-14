import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../../redux/slices/bookingSlice';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { toast } from 'react-toastify';

const BookingList = () => {
    const dispatch = useDispatch();
    const { bookings, loading, error } = useSelector((state) => state.bookings);

    useEffect(() => {
        dispatch(fetchBookings());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            toast.error('Failed to fetch bookings');
        }
    }, [error]);

    useEffect(() => {
        console.log("Bookings data: ", bookings); // Log bookings data
    }, [bookings]);

    return (
        <Container>
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Booking List
            </Typography>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {bookings && (
                <Grid container spacing={3}>
                    {bookings.map((booking) => (
                        <Grid item xs={12} md={6} lg={4} key={booking.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {booking.service?.serviceName || 'Service Name Not Available'}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Date:</strong> {booking.date}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Time:</strong> {booking.time}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Status:</strong> {booking.status}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <strong>Customer Name:</strong> {booking.user ? `${booking.user.name} ` : 'Customer Name Not Available'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default BookingList;
