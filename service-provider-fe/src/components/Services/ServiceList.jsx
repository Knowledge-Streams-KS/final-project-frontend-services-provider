import React, { useEffect } from "react";
import { fetchServicesByCategory, fetchAllServices } from "../../redux/slices/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import homeInspection from '../../assets/home_inspection.png';

const ServiceList = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { services, error } = useSelector((state) => state.services);

  useEffect(() => {
    if (category) {
      dispatch(fetchServicesByCategory(category));
    } else {
      dispatch(fetchAllServices());
    }
  }, [dispatch, category]);

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch services");
    }
  }, [error]);

  const handleBookNowClick = (serviceId) => {
    navigate(`/book-service/${serviceId}`);
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h2 className="text-4xl font-bold text-center mt-12 mb-4 text-gray-800">
        {category ? `${category} Services` : "All Services"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-slate-800 transition-shadow duration-300">
            <div className="flex items-center p-6">
              <img src={homeInspection} alt={service.serviceName} className="h-32 w-32 rounded-xl mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{service.serviceName}</h3>
                <p className="text-gray-700">{service.description}</p>
                <p className="text-gray-600 font-bold">Rs:{service.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 mr-2">★ {service.rating}</span>
                  <Button
                    size="small"
                    color="primary"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleBookNowClick(service.id)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
