import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, Typography, Card, CardContent } from '@mui/material';

const BookingDetails = () => {
    const { id } = useParams();
    const { bookings } = useSelector((state) => state.bookings);
    const booking = bookings.find((booking) => booking.id === id);

    if (!booking) return <Typography variant="h6">Booking not found</Typography>;

    return (
        <Container>
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Booking Details
            </Typography>
            <Card className="shadow-lg">
                <CardContent>
                    <Typography variant="h5">{booking.serviceName}</Typography>
                    <Typography variant="body2">{booking.date}</Typography>
                    <Typography variant="body2" color="textSecondary">
                        {booking.time}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Status: {booking.status}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Provider: {booking.providerName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Location: {booking.location}
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default BookingDetails;
