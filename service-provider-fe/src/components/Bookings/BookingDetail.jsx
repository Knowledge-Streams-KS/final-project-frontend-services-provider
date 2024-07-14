// src/components/Bookings/BookingDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookingById } from '../../redux/slices/bookingSlice';
import { Container, Typography, Card, CardContent } from '@mui/material';

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
        <Container className='bg-gray-300 mt-12 rounded-lg'>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {booking && (
                <Card>
                    <CardContent className='bg-gray-100 rounded-lg'>
                        <Typography variant="h5" component="div">
                            {booking.Service?.serviceName || 'Service Name Not Available'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Description:</strong> {booking.Service?.description || 'Description not available'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Price:</strong> ${booking.Service?.price || 'Price not available'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Category:</strong> {booking.Service?.Category?.name || 'Category not available'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Location:</strong> {booking.Service?.Location?.name || 'Location not available'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Provider:</strong> {booking.Service?.Provider?.name || 'Provider not available'}
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
                            <strong>Service Address:</strong> {booking.serviceAddress}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Customer Address:</strong> {booking.address}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Customer Phone Number:</strong> {booking.phoneNumber}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Customer Name:</strong> {booking.User ? `${booking.User.firstName} ${booking.User.lastName}` : 'Customer Name Not Available'}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default BookingDetail;
