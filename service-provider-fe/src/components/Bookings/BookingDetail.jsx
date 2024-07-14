// src/components/Bookings/BookingDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

const BookingDetail = () => {
    const { id } = useParams();
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await axios.get(`/api/bookings/${id}`);
                setBooking(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch booking details');
                setLoading(false);
            }
        };

        fetchBooking();
    }, [id]);

    return (
        <Container className='bg-gray-300 mt-12 rounded-lg p-4'>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">{error}</Typography>}
            {booking && (
                <Card className='shadow-lg'>
                    <CardContent className='bg-gray-100 rounded-lg p-4'>
                        <Typography variant="h4" component="div">
                            {booking.Service?.serviceName}
                        </Typography>
                        <Typography variant="body1" className='mt-2'>
                            <strong>Description:</strong> {booking.Service?.description}
                        </Typography>
                        <Typography variant="body1" className='mt-2'>
                            <strong>Price:</strong> ${booking.Service?.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Category:</strong> {booking.Service?.Category?.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Location:</strong> {booking.Service?.Location?.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Provider:</strong> {booking.Service?.Provider?.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Date:</strong> {booking.date}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Time:</strong> {booking.time}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Status:</strong> {booking.status}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Service Address:</strong> {booking.serviceAddress}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Customer Address:</strong> {booking.address}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Customer Phone Number:</strong> {booking.phoneNumber}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" className='mt-2'>
                            <strong>Customer Name:</strong> {booking.User ? `${booking.User.firstName} ${booking.User.lastName}` : 'Customer Name Not Available'}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default BookingDetail;
