// src/components/Bookings/BookingList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../../redux/slices/bookingSlice';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { toast } from 'react-toastify';

const BookingList = () => {
    const dispatch = useDispatch();
    const { bookings, loading, error } = useSelector((state) => state.bookings);

    useEffect(() => {
        dispatch(fetchBookings());
        if (error) {
            toast.error('Failed to fetch bookings');
        }
    }, [dispatch, error]);

    return (
        <Container>
            <Typography variant="h4" className="mt-16 mb-4 text-center">
                Bookings
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {bookings.map((booking) => (
                    <Card key={booking.id} className="shadow-lg">
                        <CardContent>
                            <Typography variant="h5">{booking.serviceName}</Typography>
                            <Typography variant="body2">{booking.description}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {booking.date}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default BookingList;
