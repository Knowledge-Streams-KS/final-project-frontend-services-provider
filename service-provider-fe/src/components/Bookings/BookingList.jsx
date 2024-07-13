// src/components/Bookings/BookingList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookings } from '../../redux/slices/bookingSlice';
import { Link } from 'react-router-dom';
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
                    <Link to={`/bookings/${booking.id}`} key={booking.id}>
                        <Card className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
                            <CardContent className="p-4">
                                <Typography variant="h5" className="text-xl font-semibold text-gray-900">
                                    {booking.Service.serviceName}
                                </Typography>
                                <Typography variant="body2" className="text-gray-700">
                                    {booking.Service.description}
                                </Typography>
                                <Typography variant="body2" className="text-green-500 font-bold">
                                    Price: ${booking.Service.price}
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                    Date: {booking.date}
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                    Time: {booking.time}
                                </Typography>
                                <Typography variant="body2" className="text-blue-500">
                                    Status: {booking.status}
                                </Typography>
                                <Typography variant="body2" className="text-gray-800 font-bold">
                                    Customer: {booking.User.firstName} {booking.User.lastName}
                                </Typography>
                                <Typography variant="body2" className="text-gray-800">
                                    Email: {booking.User.email}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </Container>
    );
};

export default BookingList;
