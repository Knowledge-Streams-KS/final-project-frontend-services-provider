import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4 mt-8">
            <Container>
                <Typography variant="body1" align="center">
                    © 2024 Mahir Company Clone. All Rights Reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
