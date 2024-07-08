import React, { useEffect } from "react";
import { fetchServices } from "../../redux/slices/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";

const ServiceList = () => {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
    if (error) {
      toast.error("Failed to fetch services");
    }
  }, [dispatch, error]);

  return (
    <Container className="mt-16">
      <Typography variant="h4" className="mt-16 mb-4 text-center">
        Services
      </Typography>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Card key={service.id} className="shadow-lg">
            <CardContent>
              <Typography variant="h5">{service.serviceName}</Typography>
              <Typography variant="body2">{service.description}</Typography>
              <Typography variant="body2" color="textSecondary">
                ${service.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Book Now
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ServiceList;
