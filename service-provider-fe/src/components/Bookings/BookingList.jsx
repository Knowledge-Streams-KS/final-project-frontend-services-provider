import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookings } from '../../redux/slices/bookingSlice'
import { Container, Typography, Card, CardContent, CardAction, Button } from '@mui/material'
import { toast } from 'react-toastify'


const BookingList = () => {
    const dispatch = useDispatch()
    const { bookings, loading, error } = useSelector((state) => state.bookings)

    useEffect(() => {
        dispatch(fetchBookings())
        if (error) {
            toast.error('Failed to fetch bookings')
        }
    }, [dispatch, error])

    return (
        <Container>
            <Typography variant="h4" className="mt-8 mb-4 text-center ">My Booking</Typography>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {bookings.map((booking) => (
                    <Card key={booking.id} className="shadow-lg">
                        <CardContent>
                            <Typography variant="h5">{booking.serviceName}</Typography>
                            <Typography variant="body2">{booking.date}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {booking.time}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Status:{booking.status}
                            </Typography>
                        </CardContent>
                        <CardAction>
                            <Button size="small" color="primary">Cancel</Button>
                            <Button size="small" color="secondary">
                                Reschedule
                            </Button>
                        </CardAction>
                    </Card>
                ))}
            </div>
        </Container>
    )
}

export default BookingList