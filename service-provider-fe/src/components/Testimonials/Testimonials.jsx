// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const testimonialsData = [
    { id: 1, name: 'John Doe', testimonial: 'Great service!' },
    { id: 2, name: 'Jane Smith', testimonial: 'Very reliable and professional.' },
    // Add more testimonials here
];

const Testimonials = () => {
    return (
        <Container>
            <Typography variant="h4" className="text-center mt-8 mb-4">Testimonials</Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {testimonialsData.map((testimonial) => (
                    <Card key={testimonial.id} className="shadow-lg rounded-lg">
                        <CardContent>
                            <Typography variant="h6">{testimonial.name}</Typography>
                            <Typography variant="body1">{testimonial.testimonial}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Container>
    );
};

export default Testimonials;
