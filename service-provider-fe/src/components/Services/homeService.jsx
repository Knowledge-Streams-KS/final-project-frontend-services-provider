import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeServices } from "../../redux/slices/homeServiceSlice";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import homeServiceImage from "../../assets/home_services.png";

const HomeService = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { services, loading, error } = useSelector((state) => state.homeService);

    useEffect(() => {
        dispatch(fetchHomeServices());
    }, [dispatch]);

    const handleBookNowClick = (serviceId) => {
        navigate(`/book-service/${serviceId}`);
    };

    return (
        <div className="container mx-auto mt-12 px-8 mb-4 rounded-lg">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Home Services</h2>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="bg-gray-200 shadow-lg rounded-lg overflow-hidden hover:shadow-slate-800 transition-shadow duration-300">
                        <div className="p-6 flex flex-col justify-between h-full">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900">{service.serviceName}</h3>
                                    <p className="text-gray-700">{service.description}</p>
                                    <p className="text-gray-600 font-bold">${service.price}</p>
                                </div>
                                <img src={homeServiceImage} alt={service.serviceName} className="h-32 w-32 rounded-xl ml-4" />
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full"
                                    onClick={() => handleBookNowClick(service.id)}
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

export default HomeService;
