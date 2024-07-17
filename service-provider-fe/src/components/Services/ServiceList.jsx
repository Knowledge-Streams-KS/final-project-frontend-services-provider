import React, { useEffect } from "react";
import { fetchServicesByCategory, fetchAllServices } from "../../redux/slices/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const ServiceList = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="container mx-auto mt-4 px-8 mb-4">
      <h2 className="text-4xl font-bold text-center mt-6 mb-4 text-gray-800">
        {category ? `${category} Services` : "All Services"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-slate-800 transition-shadow duration-300 cursor-pointer"
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="flex flex-col p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1 ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{service.serviceName}</h3>
                  <p className="text-gray-700">{truncateText(service.description, 40)}</p>
                  <p className="text-gray-600 font-bold">Rs {service.price}</p>
                </div>
                <img src={service.imageUrl ? `http://localhost:3004${service.imageUrl}` : 'default_image_path'} alt={service.serviceName} className="h-32 w-32 rounded-xl" />
              </div>
              <div className="flex justify-between items-center mt-4">
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookNowClick(service.id);
                  }}
                >
                  Book Now
                </Button>
                <span className="text-yellow-500 mr-4">★★★★ {service.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
