import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookingById } from '../../redux/slices/bookingSlice';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { toast } from 'react-toastify';

const BookingDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { booking, loading, error } = useSelector((state) => state.bookings);

    useEffect(() => {
        dispatch(fetchBookingById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (error) {
            toast.error('Failed to fetch booking details');
        }
    }, [error]);

    return (
        <Container>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">{error.message}</Typography>}
            {booking && (
                <Card>
                    <CardContent>
                        <Typography variant="h5">Booking Details</Typography>
                        <Typography variant="body1">Service: {booking.service.serviceName}</Typography>
                        <Typography variant="body1">Date: {booking.date}</Typography>
                        <Typography variant="body1">Time: {booking.time}</Typography>
                        <Typography variant="body1">Address: {booking.address}</Typography>
                        <Typography variant="body1">Phone Number: {booking.phoneNumber}</Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default BookingDetails;
