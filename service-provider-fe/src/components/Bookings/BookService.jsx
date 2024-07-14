import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createBooking } from "../../redux/slices/bookingSlice";
import { fetchServiceById } from "../../redux/slices/serviceSlice";
import { fetchUserProfile } from "../../redux/slices/authSlice";
import { Button, TextField, Container, Typography, Card, CardContent } from "@mui/material";
import { toast } from "react-toastify";

const BookService = () => {
    const { serviceId } = useParams();
    const dispatch = useDispatch();
    const { service, loading: serviceLoading, error: serviceError } = useSelector((state) => state.services);
    const { user, loading: userLoading, error: userError } = useSelector((state) => state.auth);
    const [form, setForm] = useState({
        date: "",
        time: "",
        serviceAddress: "",
        phoneNumber: "",
        name: "",
    });

    useEffect(() => {
        dispatch(fetchServiceById(serviceId));
        dispatch(fetchUserProfile());
    }, [dispatch, serviceId]);

    useEffect(() => {
        if (user) {
            setForm((prevForm) => ({
                ...prevForm,
                name: `${user.firstName} ${user.lastName}`,
                address: user.address || "",
                phoneNumber: user.phoneNumber || "",
            }));
        }
    }, [user]);

    useEffect(() => {
        if (serviceError) {
            toast.error(`Failed to fetch service details: ${serviceError.message}`);
        }
        if (userError) {
            toast.error(`Failed to fetch user profile: ${userError.message}`);
        }
    }, [serviceError, userError]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = user?.id; // Assuming the user ID is available in the user state
        if (!userId) {
            toast.error("User ID not found.");
            return;
        }

        const { date, time, serviceAddress, address, phoneNumber, name } = form;

        const bookingData = {
            date,
            time,
            serviceAddress,
            phoneNumber,
            userId,
            serviceId,
            name,
            address
        };
        console.log("Booking data: ", bookingData); // Log the booking data

        dispatch(createBooking(bookingData)).then((response) => {
            if (response.meta.requestStatus === "fulfilled") {
                toast.success("Booking created successfully");
            } else {
                console.error("Error creating booking:", response.payload); // Log the error payload
                toast.error("Failed to create booking");
                if (response.payload?.errors) {
                    response.payload.errors.forEach((err) => toast.error(err));
                }
            }
        });
    };


    return (
        <Container>
            <Typography variant="h4" className="mt-8 mb-4 text-center">
                Book Service
            </Typography>
            {serviceLoading || userLoading ? (
                <Typography variant="h6">Loading...</Typography>
            ) : (
                <>
                    {service && (
                        <Card className="mb-4">
                            <CardContent>
                                <Typography variant="h5">{service.serviceName}</Typography>
                                <Typography variant="body1">{service.description}</Typography>
                                <Typography variant="body1">Price: ${service.price}</Typography>
                            </CardContent>
                        </Card>
                    )}
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            label="Name"
                            value={form.name || ""}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            name="address"
                            label="Profile Address"
                            value={form.address || ""}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            name="serviceAddress"
                            label="Service Address"
                            value={form.serviceAddress}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            name="phoneNumber"
                            label="Phone Number"
                            value={form.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            name="date"
                            label="Date"
                            type="date"
                            value={form.date}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                        <TextField
                            name="time"
                            label="Time"
                            type="time"
                            value={form.time}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="mt-4"
                        >
                            Submit
                        </Button>
                    </form>
                </>
            )}
        </Container>
    );
};

export default BookService;
