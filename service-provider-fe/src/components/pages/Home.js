import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container className="text-center mt-8">
      <Typography variant="h3" className="mb-4">
        Welcome to Mahir Company Clone
      </Typography>
      <Typography variant="h6" className="mb-4">
        Your one-stop solution for all services
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/services"
      >
        View Services
      </Button>
    </Container>
  );
};

export default Home;
